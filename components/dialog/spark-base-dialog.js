import { LitElement, html, css } from 'lit';

export class SparkBaseDialog extends LitElement {
	static styles = css`
		:host {
			display: contents;
			font-family: system-ui, -apple-system, sans-serif;
		}

		dialog {
			width: min(32rem, calc(100vw - 2rem));
			padding: 0;
			border: 0;
			border-radius: 8px;
			color: #1e293b;
			background: #ffffff;
			box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);
		}

		dialog::backdrop {
			background: rgba(15, 23, 42, 0.55);
		}

		.dialog-content {
			display: grid;
			gap: 1rem;
			padding: 1.25rem;
		}

		.header,
		.footer {
			display: flex;
			align-items: center;
			gap: 0.75rem;
		}

		.header {
			justify-content: space-between;
		}

		.title {
			margin: 0;
			font-size: 1.125rem;
		}

		.close-button {
			border: 0;
			padding: 0.25rem;
			color: #475569;
			background: transparent;
			cursor: pointer;
			font-size: 1.25rem;
			line-height: 1;
		}

		.close-button:focus-visible {
			outline: 3px solid rgba(37, 99, 235, 0.35);
			outline-offset: 2px;
		}

		.footer {
			justify-content: flex-end;
		}
	`;

	static properties = {
		open: { type: Boolean, reflect: true },
		title: { type: String },
		closeOnBackdrop: { type: Boolean },
		showCloseButton: { type: Boolean }
	};

	constructor() {
		super();
		this.open = false;
		this.title = '';
		this.closeOnBackdrop = true;
		this.showCloseButton = true;
		this._dialog = null;
		this._previouslyFocused = null;
	}

	firstUpdated() {
		this._dialog = this.renderRoot.querySelector('dialog');
		this._syncDialogState();
	}

	updated(changedProperties) {
		if (changedProperties.has('open')) {
			this._syncDialogState();
		}
	}

	disconnectedCallback() {
		this._dialog?.removeEventListener('cancel', this._handleCancel);
		super.disconnectedCallback();
	}

	_syncDialogState() {
		if (!this._dialog) return;

		if (this.open && !this._dialog.open) {
			this._previouslyFocused = document.activeElement;
			this._dialog.showModal();
			this.dispatchEvent(new CustomEvent('spark-open', { bubbles: true, composed: true }));
		} else if (!this.open && this._dialog.open) {
			this._dialog.close();
			this._previouslyFocused?.focus?.();
		}

		this._dialog.addEventListener('cancel', this._handleCancel);
	}

	_handleCancel = (event) => {
		event.preventDefault();
		this.close();
	};

	_handleDialogClick(event) {
		if (this.closeOnBackdrop && event.target === this._dialog) {
			this.close();
		}
	}

	openDialog() {
		this.open = true;
	}

	close() {
		if (!this.open) return;
		this.open = false;
		this.dispatchEvent(new CustomEvent('spark-close', { bubbles: true, composed: true }));
	}

	render() {
		const titleId = `${this.localName || 'spark-dialog'}-title`;

		return html`
			<dialog
				aria-labelledby=${this.title ? titleId : undefined}
				@click=${this._handleDialogClick}
			>
				<div class="dialog-content">
					<header class="header">
						<h2 class="title" id=${titleId}><slot name="title">${this.title}</slot></h2>
						${this.showCloseButton ? html`
							<button
								class="close-button"
								type="button"
								aria-label="Close dialog"
								@click=${this.close}
							>
								&times;
							</button>
						` : ''}
					</header>
					<section><slot></slot></section>
					<footer class="footer"><slot name="footer"></slot></footer>
				</div>
			</dialog>
		`;
	}
}
