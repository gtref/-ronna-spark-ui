import { LitElement, html, css } from 'lit';

export class ProfileCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
      margin-bottom: 1rem;
    }
    .card {
      border: 1px solid #3b82f6;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .header {
      padding: 12px 16px;
      background: #eff6ff;
      color: #1e40af;
      border-bottom: 1px solid #3b82f6;
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
      color: #1e40af;
      cursor: pointer;
      font-size: 14px;
    }
  `;

  static properties = {
    username: { type: String },
    collapsed: { type: Boolean }
  };

  constructor() {
    super();
    this.username = 'User';
    this.collapsed = false;
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    return html`
      <div class="card">
        <div class="header">
          <span>👤 <strong>${this.username}</strong></span>
          <button class="toggle-btn" @click="${this.toggle}">${this.collapsed ? 'Show' : 'Hide'}</button>
        </div>
        <div class="body ${this.collapsed ? 'collapsed' : ''}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('profile-card')) {
  customElements.define('profile-card', ProfileCard);
}
