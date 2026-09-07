import { SparkRButton } from './spark-r.button.js';

export class SparkRButtonSuccess extends SparkRButton {
  constructor() {
    super();
    this.variant = 'success';
  }
}

if (!customElements.get('spark-r-button-success')) {
  customElements.define('spark-r-button-success', SparkRButtonSuccess);
}
