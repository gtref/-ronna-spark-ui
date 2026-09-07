import { SparkBaseDialog } from './spark-base-dialog.js';

export class SparkDialogConfirm extends SparkBaseDialog {
  constructor() {
    super();
    this.type = 'confirm';
  }
}

if (!customElements.get('spark-dialog-confirm')) {
  customElements.define('spark-dialog-confirm', SparkDialogConfirm);
}
