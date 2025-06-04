// --- Hamburger Menu Logic (Keep as is) ---
const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
  if (navLinks && hamburgerButton) {
    navLinks.classList.toggle("active");
    hamburgerButton.classList.toggle("open");
  }
}

if (hamburgerButton) {
  hamburgerButton.addEventListener("click", toggleMenu);
} else {
  console.warn("Hamburger button not found for menu.");
}
// --- End Hamburger Menu ---

// --- Dark/Light Theme Logic (Based on Tutorial) ---
(function () {
  // IIFE for scope
  const themeToggleButton = document.getElementById("themeSwitchBtn"); // Your button ID
  const htmlElement = document.documentElement; // Target <html> tag for 'dark' class
  const metaTheme = document.querySelector('meta[name="theme-color"]'); // Select meta tag
  const lightBg = "#fdfdfd"; // Your default light background for meta tag
  const themeKey = "dark"; // localStorage key used in the tutorial

  // --- Helper Function from Tutorial (Improved with ID check) ---
  function getStyleSheet(id_or_filename_part) {
    // First, try finding by ID (more reliable)
    const sheetById = document.getElementById(id_or_filename_part);
    if (sheetById && sheetById.sheet) {
      // console.log("Found stylesheet by ID:", id_or_filename_part);
      return sheetById.sheet; // Return the CSSStyleSheet object
    }

    // Fallback to searching href (less reliable with fingerprints)
    // console.warn(`Could not find stylesheet by ID: ${id_or_filename_part}, trying href includes...`);
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      if (sheet.href && sheet.href.includes(id_or_filename_part)) {
        // console.log("Found stylesheet by href:", id_or_filename_part);
        return sheet;
      }
    }
    console.error(`Stylesheet matching "${id_or_filename_part}" not found.`);
    return null; // Return null if not found
  }

  // --- Syntax Dark Function from Tutorial (Using reliable IDs) ---
  function setSyntaxDark(isDark) {
    // Use the IDs from your baseof.html
    const sheet_light = getStyleSheet("syntax-light-theme");
    const sheet_dark = getStyleSheet("syntax-dark-theme");

    // console.log("Setting syntax: isDark=", isDark); // Debug log

    if (sheet_light) {
      sheet_light.disabled = isDark;
      // console.log("Light sheet disabled:", sheet_light.disabled);
    }
    if (sheet_dark) {
      sheet_dark.disabled = !isDark;
      // console.log("Dark sheet disabled:", sheet_dark.disabled);
    }
  }

  // --- Main Theme Setting Function from Tutorial (Adapted) ---
  const setDark = (isDark) => {
    // console.log("Running setDark, isDark:", isDark); // Debug log
    if (metaTheme) {
      // Ensure lightBg matches your actual default light background
      metaTheme.setAttribute("content", isDark ? "#212737" : lightBg); // Use your dark primary bg
    } else {
      // Only warn if you actually added the meta tag
      // console.warn("Meta theme tag not found.");
    }

    // Add/remove 'dark' class to <html> element
    htmlElement.classList[isDark ? "add" : "remove"]("dark");

    // Save boolean state as string 'true' or 'false'
    localStorage.setItem(themeKey, isDark ? "true" : "false");

    // Call the function to toggle syntax stylesheets
    setSyntaxDark(isDark);
  };

  // --- Initialization Logic ---
  function initializeTheme() {
    let isInitiallyDark;
    const storedPreference = localStorage.getItem(themeKey);

    if (storedPreference !== null) {
      isInitiallyDark = storedPreference === "true"; // Convert stored string back to boolean
      // console.log("Found stored preference:", storedPreference, "Initial dark:", isInitiallyDark);
    } else {
      isInitiallyDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      // console.log("No stored preference. System prefers dark:", isInitiallyDark);
    }
    // Apply the theme (this also calls setSyntaxDark)
    setDark(isInitiallyDark);
  }

  // --- Event Listener ---
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      // Check current state by reading from localStorage what setDark just saved
      const currentlyDark = localStorage.getItem(themeKey) === "true";
      // console.log("Button clicked. Currently dark:", currentlyDark, " Toggling to:", !currentlyDark);
      setDark(!currentlyDark); // Call setDark with the opposite state
    });
  } else {
    console.error("Theme toggle button with ID 'themeSwitchBtn' NOT FOUND!");
  }

  // --- Run Initialization ---
  initializeTheme();
})(); // End IIFE


