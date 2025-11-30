// Command Palette - Terminal-style Cmd+K search
(function() {
  'use strict';

  let isOpen = false;
  let selectedIndex = 0;
  let filteredResults = [];
  let currentTheme = null;

  // Detect theme
  function getTheme() {
    // Check if user has manually set a theme
    const savedTheme = localStorage.getItem('command-palette-theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Otherwise use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Toggle theme
  function toggleTheme() {
    const palette = document.getElementById('command-palette');
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    palette.setAttribute('data-theme', currentTheme);
    localStorage.setItem('command-palette-theme', currentTheme);

    // Update toggle button icon
    updateThemeIcon();
  }

  // Update theme icon
  function updateThemeIcon() {
    const button = document.querySelector('.command-palette-theme-toggle');
    if (button) {
      button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
      button.setAttribute('title', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Create palette HTML
  function createPalette() {
    const palette = document.createElement('div');
    palette.id = 'command-palette';
    palette.className = 'command-palette';
    currentTheme = getTheme();
    palette.setAttribute('data-theme', currentTheme);
    palette.innerHTML = `
      <div class="command-palette-backdrop"></div>
      <div class="command-palette-container">
        <div class="command-palette-header">
          <span class="command-palette-prompt">></span>
          <input
            type="text"
            id="command-palette-input"
            class="command-palette-input"
            placeholder="Type to search... (projects, experience, skills)"
            autocomplete="off"
            spellcheck="false"
          />
          <button class="command-palette-theme-toggle" title="Toggle theme">
            ${currentTheme === 'dark' ? '☀️' : '🌙'}
          </button>
          <kbd class="command-palette-hint">ESC</kbd>
        </div>
        <div class="command-palette-results" id="command-palette-results">
          <div class="command-palette-empty">
            Start typing to search...
          </div>
        </div>
        <div class="command-palette-footer">
          <div class="command-palette-footer-item">
            <kbd>↑↓</kbd> Navigate
          </div>
          <div class="command-palette-footer-item">
            <kbd>Enter</kbd> Select
          </div>
          <div class="command-palette-footer-item">
            <kbd>ESC</kbd> Close
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(palette);

    // Add theme toggle event listener
    const themeToggle = palette.querySelector('.command-palette-theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTheme();
      });
    }

    // Listen for system theme changes (only if user hasn't manually set a theme)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('command-palette-theme')) {
          currentTheme = e.matches ? 'dark' : 'light';
          palette.setAttribute('data-theme', currentTheme);
          updateThemeIcon();
        }
      });
    }
  }

  // Get type icon
  function getTypeIcon(type) {
    const icons = {
      'section': '§',
      'project': '⚡',
      'experience': '💼',
      'skill': '🔧',
      'publication': '📄',
      'page': '📋',
      'link': '🔗'
    };
    return icons[type] || '•';
  }

  // Get type color
  function getTypeColor(type) {
    const colors = {
      'section': '#4CAF50',
      'project': '#2196F3',
      'experience': '#FF9800',
      'skill': '#9C27B0',
      'publication': '#F44336',
      'page': '#00BCD4',
      'link': '#607D8B'
    };
    return colors[type] || '#666';
  }

  // Fuzzy search function
  function fuzzySearch(query, data) {
    if (!query) return data.slice(0, 8); // Show first 8 items when no query

    const queryLower = query.toLowerCase();
    const results = [];

    data.forEach(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const keywords = item.keywords.join(' ').toLowerCase();

      // Exact title match = highest score
      if (titleLower === queryLower) score += 100;

      // Title starts with query
      if (titleLower.startsWith(queryLower)) score += 50;

      // Title contains query
      if (titleLower.includes(queryLower)) score += 25;

      // Description contains query
      if (descLower.includes(queryLower)) score += 10;

      // Keywords match
      if (keywords.includes(queryLower)) score += 15;

      // Fuzzy match (each character in order)
      let fuzzyScore = 0;
      let queryIndex = 0;
      for (let i = 0; i < titleLower.length && queryIndex < queryLower.length; i++) {
        if (titleLower[i] === queryLower[queryIndex]) {
          fuzzyScore++;
          queryIndex++;
        }
      }
      if (queryIndex === queryLower.length) score += fuzzyScore;

      if (score > 0) {
        results.push({ ...item, score });
      }
    });

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, 8); // Return top 8 results
  }

  // Render results
  function renderResults(results) {
    const resultsContainer = document.getElementById('command-palette-results');

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="command-palette-empty">No results found</div>';
      return;
    }

    resultsContainer.innerHTML = results.map((item, index) => `
      <div class="command-palette-item ${index === selectedIndex ? 'selected' : ''}" data-index="${index}">
        <div class="command-palette-item-icon" style="color: ${getTypeColor(item.type)}">
          ${getTypeIcon(item.type)}
        </div>
        <div class="command-palette-item-content">
          <div class="command-palette-item-title">${item.title}</div>
          <div class="command-palette-item-description">${item.description}</div>
        </div>
        <div class="command-palette-item-type">${item.type}</div>
      </div>
    `).join('');

    // Add click handlers
    const items = resultsContainer.querySelectorAll('.command-palette-item');
    items.forEach((item, index) => {
      item.addEventListener('click', () => selectItem(index));
      item.addEventListener('mouseenter', () => {
        selectedIndex = index;
        updateSelection();
      });
    });
  }

  // Update selection highlight
  function updateSelection() {
    const items = document.querySelectorAll('.command-palette-item');
    items.forEach((item, index) => {
      if (index === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // Handle search
  function handleSearch(query) {
    filteredResults = fuzzySearch(query, searchData);
    selectedIndex = 0;
    renderResults(filteredResults);
  }

  // Select item
  function selectItem(index) {
    if (filteredResults[index]) {
      const item = filteredResults[index];
      const url = item.url;

      // Close palette
      closePalette();

      // Navigate
      if (url.startsWith('http') || url.startsWith('mailto:')) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  }

  // Open palette
  function openPalette() {
    if (isOpen) return;

    const palette = document.getElementById('command-palette');
    const input = document.getElementById('command-palette-input');

    palette.classList.add('active');
    isOpen = true;
    selectedIndex = 0;

    // Focus input
    setTimeout(() => {
      input.focus();
      input.value = '';
      handleSearch('');
    }, 100);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  // Close palette
  function closePalette() {
    if (!isOpen) return;

    const palette = document.getElementById('command-palette');
    palette.classList.remove('active');
    isOpen = false;

    // Restore body scroll
    document.body.style.overflow = '';
  }

  // Keyboard navigation
  function handleKeyboard(e) {
    if (!isOpen) {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openPalette();
      }
      return;
    }

    switch(e.key) {
      case 'Escape':
        e.preventDefault();
        closePalette();
        break;

      case 'ArrowDown':
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, filteredResults.length - 1);
        updateSelection();
        break;

      case 'ArrowUp':
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        updateSelection();
        break;

      case 'Enter':
        e.preventDefault();
        selectItem(selectedIndex);
        break;
    }
  }

  // Initialize
  function init() {
    // Create palette
    createPalette();

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);

    // Navigation search button
    const navSearchBtn = document.getElementById('nav-search-btn');
    if (navSearchBtn) {
      navSearchBtn.addEventListener('click', openPalette);
    }

    // Click backdrop to close
    const backdrop = document.querySelector('.command-palette-backdrop');
    backdrop.addEventListener('click', closePalette);

    // Search input
    const input = document.getElementById('command-palette-input');
    input.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Wait for DOM and search data to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
