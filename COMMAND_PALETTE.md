# Command Palette (Cmd+K Search)

A terminal-style command palette for quick navigation across your portfolio site.

## Features

- **Keyboard Shortcuts**:
  - `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open
  - `Esc` to close
  - `↑↓` Arrow keys to navigate results
  - `Enter` to select and navigate

- **Floating Search Button**:
  - Always visible at bottom-right corner
  - Shows keyboard shortcut hint
  - Click to open search
  - Auto-hides on mobile to show just icon

- **Search Categories**:
  - Page sections (About, Skills, Projects, Experience, Publications, Contact)
  - Individual projects with descriptions
  - Work experience positions
  - Skills and technologies
  - Publications
  - External links (GitHub, LinkedIn, Google Scholar, Email)

- **Design**:
  - **Auto light/dark mode** - Adapts to system preference
  - Terminal-inspired aesthetic
  - Fuzzy search algorithm
  - Smooth animations
  - Mobile responsive
  - Real-time theme switching

## Files

### 1. `assets/js/search-data.js`
Contains all searchable content indexed by:
- `type`: section, project, experience, skill, publication, page, link
- `title`: Display name
- `description`: Short description
- `url`: Navigation target
- `keywords`: Search terms

### 2. `assets/js/command-palette.js`
Main JavaScript functionality:
- Fuzzy search algorithm
- Keyboard event handling
- Result rendering
- Navigation logic

### 3. `assets/css/command-palette.css`
Styling for the command palette:
- Dark terminal theme
- Hover states and animations
- Mobile responsive layout
- Smooth transitions

## How to Use

1. **Open the palette**:
   - Press `Cmd+K` (or `Ctrl+K`), OR
   - Click the floating "Search" button at bottom-right
2. **Start typing**: Search for anything (e.g., "python", "projects", "linkedin")
3. **Navigate**: Use arrow keys or hover to select a result
4. **Open**: Press `Enter` or click to navigate

## Themes

The command palette supports both automatic and manual theme switching!

### Theme Modes

1. **Auto Mode (Default)**: Adapts to your system's light/dark preference
2. **Manual Mode**: Click the theme toggle button (☀️/🌙) in the palette header
3. **Persistent**: Your choice is saved to localStorage

### Theme Toggle Button

Located in the command palette header (next to ESC):
- **Dark mode**: Shows ☀️ (click to switch to light)
- **Light mode**: Shows 🌙 (click to switch to dark)
- **Persists**: Your preference is remembered across sessions

### Dark Mode
```
Background: #0d1117 (GitHub dark)
Text: #ffffff
Accent: #4CAF50 (green prompt)
Selected: #161b22
Toggle icon: ☀️ (sun - click for light mode)
```

### Light Mode
```
Background: #ffffff (white)
Text: #24292e (GitHub text)
Accent: #2c5aa0 (site blue)
Selected: #f6f8fa (light gray)
Toggle icon: 🌙 (moon - click for dark mode)
```

### How It Works

1. **First visit**: Uses system preference
2. **Click toggle**: Switches theme and saves to localStorage
3. **Next visits**: Uses your saved preference
4. **System change**: Only applies if you haven't manually set a theme

## Customization

### Adding New Search Items

Edit `assets/js/search-data.js` and add new objects to the `searchData` array:

```javascript
{
  type: 'project',  // section, project, experience, skill, publication, page, link
  title: 'My New Project',
  description: 'A cool project description',
  url: 'https://github.com/username/project',
  keywords: ['project', 'tech', 'stack']
}
```

### Changing Colors

Edit `assets/css/command-palette.css`:

- Background: `.command-palette-container { background: #1e1e1e; }`
- Accent color: `.command-palette-prompt { color: #4CAF50; }`
- Selected item border: `.command-palette-item.selected { border-left: 3px solid #4CAF50; }`

### Changing Icons

Edit the `getTypeIcon()` function in `assets/js/command-palette.js`:

```javascript
const icons = {
  'section': '§',
  'project': '⚡',
  'experience': '💼',
  // ... add more
};
```

## Technical Details

### Search Algorithm

The fuzzy search prioritizes:
1. Exact title matches (score: +100)
2. Title starts with query (score: +50)
3. Title contains query (score: +25)
4. Keywords match (score: +15)
5. Description contains query (score: +10)
6. Fuzzy character matching (variable score)

Results are sorted by score (highest first) and limited to top 8 results.

### Performance

- No external dependencies (vanilla JavaScript)
- Lightweight (<15KB total)
- Instant search (no debouncing needed for small datasets)
- Smooth 60fps animations

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Removing the Feature

To remove the command palette:

1. Delete these files:
   - `assets/js/search-data.js`
   - `assets/js/command-palette.js`
   - `assets/css/command-palette.css`

2. Remove from `_includes/head.html`:
   ```html
   <!-- Command Palette CSS -->
   <link rel="stylesheet" href="{{ base_path }}/assets/css/command-palette.css">
   ```

3. Remove from `_includes/scripts.html`:
   ```html
   <!-- Command Palette Scripts -->
   <script src="{{ base_path }}/assets/js/search-data.js"></script>
   <script src="{{ base_path }}/assets/js/command-palette.js"></script>
   ```

## Future Enhancements

Ideas for improvement:
- [ ] Add search history
- [ ] Add recent searches
- [ ] Add actions (e.g., "Copy email", "Download resume")
- [ ] Add keyboard shortcut hints in search results
- [ ] Add search analytics
- [ ] Add "Did you mean..." suggestions
- [ ] Add categories filter (only show projects, only show skills, etc.)

## Credits

Inspired by command palettes from:
- GitHub's Command Palette
- Vercel's Command Menu
- Linear's Command K
- Raycast

Built with vanilla JavaScript, no frameworks required.
