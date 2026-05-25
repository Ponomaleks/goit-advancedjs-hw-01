## Project Tasks

**Overview:** This project contains two small interactive tasks implemented as separate pages. Each task demonstrates practical frontend skills using plain JavaScript, semantic HTML, and CSS, and is intended for learning and practice.

- **Task 1 — Image Gallery:** Implemented in `src/1-gallery.html` and `src/js/1-gallery.js`.
   - Purpose: build a responsive image gallery that shows thumbnails and opens a full-size
      image in a modal window.
   - Key behaviors: gallery items are handled using event delegation (single click handler on a parent), and a modal/lightbox library is loaded via CDN to display the full-size image.

- **Task 2 — Feedback Form (localStorage):** Implemented in `src/2-form.html` and `src/js/2-form.js`.
   - Purpose: create a feedback/contact form which preserves user input between page reloads.
   - Key behaviors: the script saves field values to `localStorage` while the user types, restores saved values on page load, and typically clears storage on successful submit.

**What the code does:**

- Renders interactive UI from static HTML and attaches event listeners in JavaScript.
- Uses event delegation to reduce the number of event handlers and simplify DOM updates for the gallery.
- Integrates a third-party modal/lightbox via CDN rather than reimplementing modal logic.
- Persists form state to the browser `localStorage` to keep user input across reloads or accidental navigations.
- Restores saved form state on initialization so the user can continue typing where they left off.

**Skills practiced and concepts covered:**

- **DOM manipulation & events:** querying elements, creating/updating nodes, and handling click/input events.
- **Event delegation:** attaching a single handler to a container for many child items.
- **Browser storage APIs:** using `localStorage` for simple client-side persistence.
- **Form handling:** listening to `input` events, serializing/deserializing form state, and handling submit/reset flows.
- **Third-party integration:** including libraries from a CDN and using them to implement UX components (modal/lightbox).
- **Accessibility & semantics:** using semantic HTML, alt text for images, and ensuring modals are dismissible (keyboard/ESC) when implemented.
- **Performance considerations:** minimizing event listeners, and applying throttling/debouncing for frequent input events if implemented.
- **Tooling & build:** working with Vite for local dev, bundling, and following a structure that is ready for deployment via GitHub Pages.
- **Debugging & developer workflow:** testing with browser DevTools, inspecting `localStorage`, and iterative development.
