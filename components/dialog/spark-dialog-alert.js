import { SparkBaseDialog } from './spark-base-dialog.js';

export class SparkDialogAlert extends SparkBaseDialog {
  constructor() {
    super();
    this.type = 'alert';
  }
}

if (!customElements.get('spark-dialog-alert')) {
  customElements.define('spark-dialog-alert', SparkDialogAlert);
}
