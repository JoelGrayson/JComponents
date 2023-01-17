import typescript from "@rollup/plugin-typescript";
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default [
{
    input: './Dropdown.tsx',
    output: [
        {
            file: './dist.mjs',
            format: 'es'
        },
        {
            file: './dist.js',
            format: 'cjs',
            exports: 'named'
        }
    ],
    plugins: [
        postcss({
            minimize: true
        }),
        typescript(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules',
            presets: ['@babel/preset-react' ],
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs',
                '.ts', '.tsx']
        }),
        external(),
        resolve(),
        cjs(),
        terser()
    ]
}
]

