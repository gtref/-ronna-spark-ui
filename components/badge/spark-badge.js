import { LitElement, html, css } from 'lit';

export class SparkBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 9999px;
      line-height: 1.5;
      border: 1px solid transparent;
    }
    .badge.primary {
      background-color: #dbeafe;
      color: #1e40af;
      border-color: #bfdbfe;
    }
    .badge.success {
      background-color: #d1fae5;
      color: #065f46;
      border-color: #a7f3d0;
    }
    .badge.warning {
      background-color: #fef3c7;
      color: #92400e;
      border-color: #fde68a;
    }
    .badge.danger {
      background-color: #fee2e2;
      color: #991b1b;
      border-color: #fecaca;
    }
  `;

  static properties = {
    variant: { type: String }
  };

  constructor() {
    super();
    this.variant = 'primary';
  }

  render() {
    return html`
      <span class="badge ${this.variant}">
        <slot></slot>
      </span>
    `;
  }
}

if (!customElements.get('spark-badge')) {
  customElements.define('spark-badge', SparkBadge);
}
