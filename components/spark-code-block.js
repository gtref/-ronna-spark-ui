import {LitElement, html, css} from 'lit';

export class CodeBlock extends LitElement {
    static styles = css`
    :host {
      display: block;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      margin-bottom: 1rem;
    }
    .container {
      background-color: #1e1e1e;
      color: #d4d4d4;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #333;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background-color: #252526;
      border-bottom: 1px solid #333;
    }
    .lang {
      font-size: 12px;
      color: #858585;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .copy-btn {
      background: #333;
      color: #ccc;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .copy-btn:hover {
      background: #444;
      color: #fff;
    }
    pre {
      margin: 0;
      padding: 14px;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.5;
    }
    code {
      font-family: inherit;
    }
  `;

  static properties = {
    language: { type: String },
    _copied: { state: true }
  };

  constructor() {
    super();
    this.language = 'code';
    this._copied = false;
  }

  async copyToClipboard() {
    // Read raw text content passed inside the default slot
    const codeText = this.textContent.trim();
    if (!codeText) return;

    try {
      await navigator.clipboard.writeText(codeText);
      this._copied = true;
      setTimeout(() => {
        this._copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <span class="lang">${this.language}</span>
          <button class="copy-btn" @click="${this.copyToClipboard}">
            ${this._copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <pre><code><slot></slot></code></pre>
      </div>
    `;
  }
}

if (!customElements.get('code-block')) {
  customElements.define('code-block', CodeBlock);
}
