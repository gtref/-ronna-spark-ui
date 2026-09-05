import { LitElement, html, css } from 'lit';

export class SparkSlider extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            color: #1e293b;
            font-family: system-ui, -apple-system, sans-serif;
        }

        .slider {
            display: grid;
            gap: 8px;
            width: 100%;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            font-size: 14px;
        }

        .value {
            color: #475569;
            font-variant-numeric: tabular-nums;
        }

        input {
            width: 100%;
            margin: 0;
            accent-color: #2563eb;
            cursor: pointer;
        }

        input:focus-visible {
            outline: 3px solid rgba(37, 99, 235, 0.35);
            outline-offset: 3px;
        }

        input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        :host([disabled]) {
            color: #64748b;
        }
    `;

    static properties = {
        label: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        value: { type: Number },
        disabled: { type: Boolean, reflect: true },
        _valueText: { state: true }
    };

    constructor() {
        super();
        this.label = '';
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 50;
        this.disabled = false;
        this._valueText = String(this.value);
    }

    willUpdate(changedProperties) {
        if (changedProperties.has('value')) {
            this.value = this._clamp(this.value);
            this._valueText = this._formatValue(this.value);
        }
    }

    _clamp(value) {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) return this.min;
        return Math.min(this.max, Math.max(this.min, numericValue));
    }

    _formatValue(value) {
        return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(4)));
    }

    _handleInput(event) {
        const nextValue = Number(event.target.value);
        this.value = nextValue;
        this._valueText = this._formatValue(nextValue);
        this.dispatchEvent(new CustomEvent('spark-input', {
            bubbles: true,
            composed: true,
            detail: { value: nextValue, originalEvent: event }
        }));
    }

    render() {
        const labelId = this.label ? 'slider-label' : undefined;

        return html`
            <div class="slider">
                ${this.label ? html`
                    <div class="header">
                        <label id="${labelId}" for="slider-input">${this.label}</label>
                        <output class="value" for="slider-input">${this._valueText}</output>
                    </div>
                ` : ''}
                <input
                    id="slider-input"
                    type="range"
                    min="${this.min}"
                    max="${this.max}"
                    step="${this.step}"
                    .value="${this._valueText}"
                    ?disabled="${this.disabled}"
                    aria-label=${this.label || 'Slider'}
                    aria-valuetext=${this._valueText}
                    @input="${this._handleInput}"
                />
            </div>
        `;
    }
}

if (!customElements.get('spark-slider')) {
    customElements.define('spark-slider', SparkSlider);
}