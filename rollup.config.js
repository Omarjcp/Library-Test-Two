import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  input: "index.js",
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss(),
  ],
  external: ['react', 'react-dom'],
};
