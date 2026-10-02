/*
 * Theme toggle (system / light / dark)
 *
 * The visitor's choice is saved in localStorage "theme" ("light" or "dark");
 * no saved choice means "follow the system". _includes/theme-init.html applies a
 * saved choice as <html data-theme> before first paint; the CSS in
 * _sass/_themes.scss follows the OS whenever data-theme is absent.
 *
 * Clicking cycles relative to the OS theme, so the first click always changes the
 * page: system -> the opposite of the OS theme -> the OS theme -> system.
 *
 * Fires document "themechange" with detail { theme: "light"|"dark", preference:
 * "system"|"light"|"dark", source: "toggle"|"system"|"storage"|"restore" }
 * whenever the resolved theme may have changed. source says what changed it: this
 * page's button, the OS, another tab, or a back/forward-cache restore.
 */
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var icons = { system: "fa-circle-half-stroke", light: "fa-sun", dark: "fa-moon" };

  function systemTheme() {
    return media && media.matches ? "dark" : "light";
  }

  function currentPreference() {
    var theme = root.getAttribute("data-theme");
    return theme === "light" || theme === "dark" ? theme : "system";
  }

  function nextPreference(preference) {
    var os = systemTheme();
    if (preference === "system") {
      return os === "dark" ? "light" : "dark";
    }
    return preference === os ? "system" : os;
  }

  function render() {
    if (!button) {
      return;
    }
    var preference = currentPreference();
    var current = preference === "system" ? "system (" + systemTheme() + ")" : preference;
    var label = "Theme: " + current + ". Switch to " + nextPreference(preference) + " theme";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.querySelector("i").className = "fa-solid " + icons[preference];
  }

  function notify(source) {
    var preference = currentPreference();
    var theme = preference === "system" ? systemTheme() : preference;
    document.dispatchEvent(new CustomEvent("themechange", {
      detail: { theme: theme, preference: preference, source: source }
    }));
  }

  function apply(preference, source) {
    if (preference === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", preference);
    }
    render();
    notify(source);
  }

  function savedPreference() {
    try {
      var theme = localStorage.getItem("theme");
      return theme === "light" || theme === "dark" ? theme : "system";
    } catch (e) {
      return null;
    }
  }

  if (button) {
    button.addEventListener("click", function () {
      var preference = nextPreference(currentPreference());
      try {
        if (preference === "system") {
          localStorage.removeItem("theme");
        } else {
          localStorage.setItem("theme", preference);
        }
      } catch (e) {}
      apply(preference, "toggle");
    });
  }

  /* the OS theme changed: "system" now resolves differently, and the next step of the cycle may too */
  if (media) {
    var onSystemChange = function () {
      render();
      notify("system");
    };
    if (media.addEventListener) {
      media.addEventListener("change", onSystemChange);
    } else if (media.addListener) {
      media.addListener(onSystemChange);
    }
  }

  /* keep other open tabs in sync */
  window.addEventListener("storage", function (e) {
    if (e.key === "theme" || e.key === null) {
      apply(e.newValue === "light" || e.newValue === "dark" ? e.newValue : "system", "storage");
    }
  });

  /* a page restored from the back/forward cache may predate a choice made on another page */
  window.addEventListener("pageshow", function (e) {
    var saved = savedPreference();
    if (e.persisted && saved && saved !== currentPreference()) {
      apply(saved, "restore");
    }
  });

  render();
})();
