import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'components/index.js',
    output: { file: 'public/cdn/v1/index.js', format: 'es' },
    plugins: [resolve(), terser()]
  },
  {
    input: 'components/spark-card-element.js',
    output: { file: 'public/cdn/v1/spark-card-element.js', format: 'es' },
    plugins: [resolve(), terser()]
  },
  {
    input: 'components/spark-profile-card.js',
    output: { file: 'public/cdn/v1/spark-profile-card.js', format: 'es' },
    plugins: [resolve(), terser()]
  },
  {
    input: 'components/spark-code-block.js',
    output: { file: 'public/cdn/v1/spark-code-block.js', format: 'es' },
    plugins: [resolve(), terser()]
  },
  {
    input: 'components/spark-notifier.js',
    output: {file: 'public/cdn/v1/spark-notifier.js', format: 'es'},
    plugins: [resolve(), terser()]
  },
  {
    input: 'components/buttons/spark-r.button.js',
    output: { file: 'public/cdn/v1/spark-r.button.js', format: 'es' },
    plugins : [resolve(), terser()]
  }
];
