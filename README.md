# SPARK UI
![npm version](https://img.shields.io/npm/v/@ronna/spark-ui)
![npm downloads](https://img.shields.io/npm/dw/@ronna/spark-ui)
![unpkg](https://img.shields.io/badge/unpkg-available-blue)
![GitHub Repo stars](https://img.shields.io/github/stars/gtref/-ronna-spark-ui)




Spark UI is a Lit-powered library of custom HTML elements.

## Install

```bash
npm install @ronna/spark-ui
```

Import the full component set or only the component you need:

```js
import '@ronna/spark-ui';
// or: import '@ronna/spark-ui/notifier';
```

| Element | What it does |
| ---- | --- |
| `<code-block>` | Creates a configurable code block with a language label and copy button. |
| `<card-element>` | Creates a basic block with a hide/show button. |
| `<profile-card>` | Creates a block the same as the card element but shows profile details. |
| `<spark-notifier>` | Creates a basic notification toast. |
| `<spark-r-button>` | Creates a simple round button with support for external event listeners. |
| `<spark-slider>` | Creates an accessible configurable range slider. |
| `<spark-dialog>` | Creates an accessible modal dialog with title, body, and footer slots. |

## Dialog

```html
<spark-dialog id="welcome-dialog" title="Welcome">
	<p>This content appears inside the dialog.</p>
	<spark-r-button slot="footer" id="close-dialog" variant="secondary">
		Close
	</spark-r-button>
</spark-dialog>

<script>
	const dialog = document.getElementById('welcome-dialog');
	dialog.openDialog();
</script>
```

The dialog can also be controlled with the `open` property or attribute. It
closes when the close button is clicked, Escape is pressed, or the backdrop is
clicked. Set `close-on-backdrop="false"` to disable backdrop closing.

## CDN

The built browser modules are available from the package at `public/cdn/v1`, or through a CDN that serves npm packages:

```html
<script type="module" src="https://unpkg.com/@ronna/spark-ui@0.2.5/public/cdn/v1/index.js"></script>
```
