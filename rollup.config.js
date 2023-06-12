import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

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
    // commonjs({
    //   include: /node_modules/,
    //   requireReturnsDefault: 'auto'
    // }),
  ],
  external: ['react', 'react-dom'],
};
