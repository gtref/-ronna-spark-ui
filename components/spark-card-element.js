import { LitElement, html, css } from 'lit';

export class CardElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
      margin-bottom: 1rem;
    }
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .header {
      padding: 12px 16px;
      background: #f8fafc;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .body {
      padding: 16px;
    }
    .body.collapsed {
      display: none;
    }
    .toggle-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
  `;

  static properties = {
    title: { type: String },
    collapsible: { type: Boolean },
    collapsed: { type: Boolean }
  };

  constructor() {
    super();
    this.title = 'Card Title';
    this.collapsible = false;
    this.collapsed = false;
  }

  toggle() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  }

  render() {
    return html`
      <div class="card">
        <div class="header">
          <slot name="header"><strong>${this.title}</strong></slot>
          ${this.collapsible
            ? html`<button class="toggle-btn" @click="${this.toggle}">${this.collapsed ? '▼' : '▲'}</button>`
            : ''}
        </div>
        <div class="body ${this.collapsed ? 'collapsed' : ''}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('card-element')) {
  customElements.define('card-element', CardElement);
}
