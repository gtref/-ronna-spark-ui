import { SparkRButton } from './spark-r.button.js';

export class SparkRButtonDanger extends SparkRButton {
  constructor() {
    super();
    this.variant = 'danger';
  }
}

if (!customElements.get('spark-r-button-danger')) {
  customElements.define('spark-r-button-danger', SparkRButtonDanger);
}
