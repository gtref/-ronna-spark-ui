# Spark UI

![npm version](https://img.shields.io/npm/v/@ronna/spark-ui)
![npm downloads](https://img.shields.io/npm/dw/@ronna/spark-ui)
![unpkg](https://img.shields.io/badge/unpkg-available-blue)
[![Socket Badge](https://badge.socket.dev/npm/package/@ronna/spark-ui/latest)](https://badge.socket.dev/npm/package/@ronna/spark-ui/latest)
![GitHub Repo stars](https://img.shields.io/github/stars/gtref/-ronna-spark-ui)

Spark UI is a lightweight, high-performance, Lit-powered library of custom HTML elements designed for building modern, accessible, and elegant web interfaces.

## Features

- **Lit-Powered**: Built on top of [Lit](https://lit.dev/), ensuring exceptional performance, minimal overhead, and full reactivity.
- **Tree-Shakeable**: Import only the components you need to keep your production bundle sizes ultra-lean.
- **Accessible**: Built with accessibility best practices in mind (ARIA semantics, keyboard navigation).
- **Zero Build-Step Option**: Ready to use directly via unpkg or any standard CDN.

## Installation

Install the package via your preferred package manager:

```bash
npm install @ronna/spark-ui
```

## Usage

Import the full component registry or import individual components to enable tree-shaking:

```js
// Import all components globally
import '@ronna/spark-ui';

// Or import specific components individually
import '@ronna/spark-ui/card-element';
import '@ronna/spark-ui/code-block';
import '@ronna/spark-ui/notifier';
import '@ronna/spark-ui/profile-card';
import '@ronna/spark-ui/button';
import '@ronna/spark-ui/slider';
import '@ronna/spark-ui/dialog';
```

## Components Reference

| Element | Description |
| :--- | :--- |
| `<code-block>` | A configurable code block with a language label and a copy-to-clipboard button. |
| `<card-element>` | A basic card container with an optional hide/show (collapsible) button. |
| `<profile-card>` | An extended card element that displays user profile details. |
| `<spark-notifier>` | A lightweight notification toast for displaying temporary messages. |
| `<spark-r-button>` | A simple round button with support for custom events and variants. |
| `<spark-slider>` | An accessible, fully configurable range slider. |
| `<spark-dialog>` | An accessible modal dialog with slots for title, body, and footer. |

---

### 1. Code Block (`<code-block>`)

Displays preformatted source code with an automatic copy button and language badge header.

- **Attributes / Properties:**
  - `language` (string): The programming language label displayed in the header (default: `'code'`).

```html
<code-block language="javascript">
const greeting = "Hello Spark UI";
console.log(greeting);
</code-block>
```

### 2. Card Element (`<card-element>`) & Profile Card (`<profile-card>`)

Containers featuring collapsible headers to dynamically hide or show content.

- **Attributes / Properties (`<profile-card>`):**
  - `username` (string): The title/username displayed in the card header (default: `'User'`).
  - `collapsed` (boolean): Whether the card body is hidden.

```html
<profile-card username="Jane Doe">
  <p>User biographical details or configuration options go here.</p>
</profile-card>
```

### 3. Spark Notifier (`<spark-notifier>`)

Toast notification component supporting auto-dismiss timers, visual progress indications, and multiple variant types.

- **Attributes / Properties:**
  - `type` (string): `'info'`, `'success'`, `'warning'`, or `'error'` (default: `'info'`).
  - `duration` (number): Time in milliseconds before auto-dismissing. Set to `0` to keep sticky (default: `4000`).
  - `open` (boolean): Controls visibility.
- **Events:**
  - `toast-dismiss`: Dispatched automatically when the notification is closed.

```html
<spark-notifier type="success" duration="3000">
  Changes saved successfully!
</spark-notifier>
```

### 4. Spark Button (`<spark-r-button>`)

Stylized fully-rounded button component supporting multiple color variants, states, and event wrapping.

- **Attributes / Properties:**
  - `variant` (string): `'primary'`, `'secondary'`, or `'danger'` (default: `'primary'`).
  - `disabled` (boolean): Disables user interaction.
  - `type` (string): Standard HTML button type (`'button'`, `'submit'`, `'reset'`).
- **Events:**
  - `spark-click`: Custom click event carrying the variant and original event details across shadow DOM boundaries.

```html
<spark-r-button variant="primary">
  Confirm Action
</spark-r-button>
```

### 5. Spark Slider (`<spark-slider>`)

Fully accessible range slider featuring live formatted value outputs and comprehensive keyboard navigation support.

- **Attributes / Properties:**
  - `label` (string): Accessible label displayed above the slider.
  - `min` (number): Minimum boundary value (default: `0`).
  - `max` (number): Maximum boundary value (default: `100`).
  - `step` (number): Step increment value (default: `1`).
  - `value` (number): Current active value (default: `50`).
  - `disabled` (boolean): Disables the input.
- **Events:**
  - `spark-input`: Fired on value changes, containing `{ value, originalEvent }` inside the event detail object.

```html
<spark-slider label="Volume Level" min="0" max="100" value="75"></spark-slider>
```

### 6. Spark Dialog (`<spark-dialog>`)

Robust modal dialog window providing structured slots for title, body content, and footers.

```html
<spark-dialog id="welcome-dialog" title="Welcome">
  <p>This content appears inside the dialog body.</p>
  <spark-r-button slot="footer" id="close-dialog" variant="secondary">
    Close
  </spark-r-button>
</spark-dialog>

<script>
  const dialog = document.getElementById('welcome-dialog');
  
  // Open the dialog programmatically
  dialog.openDialog();
</script>
```

**Behavior & Options:**
- Automatically closes when the close button is clicked, the `Escape` key is pressed, or the backdrop is clicked.
- Set `close-on-backdrop="false"` to prevent dismissal when clicking outside the dialog window.
- Can be controlled declaratively via the `open` property or attribute.

## CDN Usage

For quick prototypes or applications without a build pipeline, load modules directly via unpkg or any standard CDN:

```html
<script type="module" src="https://unpkg.com/@ronna/spark-ui@0.3.6/public/cdn/v1/index.js"></script>

<!-- Use components immediately in your markup -->
<spark-notifier type="success" duration="3000">Hello from CDN!</spark-notifier>
```

## License

ISC
