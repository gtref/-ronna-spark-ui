import { SparkBaseDialog } from './spark-base-dialog.js';

export class SparkDialog extends SparkBaseDialog {}

if (!customElements.get('spark-dialog')) {
	customElements.define('spark-dialog', SparkDialog);
}
