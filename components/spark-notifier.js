import { LitElement, html, css } from 'lit';

export class SparkNotifier extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
      margin-bottom: 0.75rem;
    }
    .toast {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-radius: 6px;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .toast.hidden {
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
    }

    /* Type Variants */
    .toast.info { background-color: #2563eb; }
    .toast.success { background-color: #16a34a; }
    .toast.warning { background-color: #d97706; }
    .toast.error { background-color: #dc2626; }

    .content {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 500;
    }

    .close-btn {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0 0 0 12px;
      line-height: 1;
    }
    .close-btn:hover {
      color: #ffffff;
    }

    /* Progress Bar */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      transform-origin: left;
    }

    /* Missing keyframes animation */
    @keyframes shrink {
      from { transform: scaleX(1); }
      to { transform: scaleX(0); }
    }
  `;

  static properties = {
    type: { type: String },         // 'info' | 'success' | 'warning' | 'error'
    duration: { type: Number },     // Auto-dismiss duration in ms (0 = sticky)
    open: { type: Boolean }
  };

  constructor() {
    super();
    this.type = 'info';
    this.duration = 4000;
    this.open = true;
    this._timer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.duration > 0) {
      this._startTimer();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timer) clearTimeout(this._timer);
  }

  _startTimer() {
    this._timer = setTimeout(() => {
      this.dismiss();
    }, this.duration);
  }

  dismiss() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('toast-dismiss', {
      bubbles: true,
      composed: true,
      detail: { type: this.type }
    }));
  }

  _getIcon() {
    switch (this.type) {
      case 'success': return '✓';
      case 'warning': return '⚠️';
      case 'error': return '✕';
      default: return 'ℹ️';
    }
  }

  render() {
    if (!this.open) return html``;

    return html`
      <div class="toast ${this.type} ${!this.open ? 'hidden' : ''}">
        <div class="content">
          <span class="icon">${this._getIcon()}</span>
          <slot></slot>
        </div>
        <button class="close-btn" @click="${this.dismiss}">×</button>
        ${this.duration > 0 ? html`
          <div class="progress" style="animation: shrink ${this.duration}ms linear forwards;"></div>
        ` : ''}
      </div>
    `;
  }
}

if (!customElements.get('spark-notifier')) {
  customElements.define('spark-notifier', SparkNotifier);
}
