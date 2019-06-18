import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import html from 'rollup-plugin-html';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

import postcssImport from 'postcss-import';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
  output: {
		name: 'app',
		format: 'iife',
		sourcemap: true,
		file: 'public/main.js',
	},
	plugins: [
		svelte({
			dev: !production,
      emitCss: true
		}),
    postcss({
      plugins: [
        postcssImport,
        tailwind(),
        autoprefixer,
        production && removeUnusedCss,
      ].filter(Boolean),
      extract: './public/bundle.css',
    }),
		resolve(),
    html(),
		commonjs(),
    !production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
