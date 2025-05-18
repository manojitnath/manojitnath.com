document.addEventListener("DOMContentLoaded", function () {
  const tocToggle = document.getElementById("toc-toggle");
  const tocNav = document.getElementById("TableOfContents"); // Hugo's default ID for the <nav>
  const tocContentWrapper = document.querySelector(".toc-content"); // The div we wrapped around {{ .TableOfContents }}

  // Check if all necessary elements exist
  if (tocToggle && tocNav && tocContentWrapper) {
    // Initially, the TOC is collapsed (CSS handles this with max-height: 0)
    // The button's aria-expanded is already set to "false" in HTML.

    tocToggle.addEventListener("click", function () {
      const isExpanded = tocToggle.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        // Collapse the TOC
        tocContentWrapper.classList.remove("is-open");
        tocToggle.setAttribute("aria-expanded", "false");
        // Optional: Change button text
        // tocToggle.textContent = 'Show Table of Contents';
      } else {
        // Expand the TOC
        tocContentWrapper.classList.add("is-open");
        tocToggle.setAttribute("aria-expanded", "true");
        // Optional: Change button text
        // tocToggle.textContent = 'Hide Table of Contents';
      }
    });
  } else {
    // If the TOC or button doesn't exist, we might hide the button if it was rendered unconditionally
    // But since we use `{{ if .TableOfContents }}` in Hugo, this 'else' might not be strictly
    // necessary for hiding the button itself, but good for debugging.
    if (tocToggle && (!tocNav || !tocContentWrapper)) {
      console.warn(
        "TOC toggle button found, but TOC content missing. Hiding toggle."
      );
      tocToggle.style.display = "none";
    }
  }
});
