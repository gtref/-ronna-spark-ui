import { LitElement, html, css } from 'lit';

export class SparkRButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      border: 1px solid transparent;
      border-radius: 9999px; /* Class 1 fully rounded */
      cursor: pointer;
      outline: none;
      transition: all 0.2s ease-in-out;
      user-select: none;
    }

    .btn:focus-visible {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
    }

    .btn:active:not(:disabled) {
      transform: scale(0.97);
    }

    /* Primary */
    .btn.primary {
      background-color: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
    }
    .btn.primary:hover:not(:disabled) {
      background-color: #1d4ed8;
      border-color: #1d4ed8;
    }

    /* Secondary */
    .btn.secondary {
      background-color: #f1f5f9;
      color: #1e293b;
      border-color: #cbd5e1;
    }
    .btn.secondary:hover:not(:disabled) {
      background-color: #e2e8f0;
      border-color: #94a3b8;
    }

    /* Danger */
    .btn.danger {
      background-color: #dc2626;
      color: #ffffff;
      border-color: #dc2626;
    }
    .btn.danger:hover:not(:disabled) {
      background-color: #b91c1c;
      border-color: #b91c1c;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  `;

  static properties = {
    variant: { type: String }, // 'primary' | 'secondary' | 'danger'
    disabled: { type: Boolean },
    type: { type: String }
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.disabled = false;
    this.type = 'button';
  }

  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Dispatch a clean custom event that crosses Shadow DOM boundary
    this.dispatchEvent(new CustomEvent('spark-click', {
      bubbles: true,
      composed: true,
      detail: {
        variant: this.variant,
        originalEvent: e
      }
    }));
  }

  render() {
    return html`
      <button
        type="${this.type}"
        class="btn ${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `;
  }
}

if (!customElements.get('spark-r-button')) {
  customElements.define('spark-r-button', SparkRButton);
}
