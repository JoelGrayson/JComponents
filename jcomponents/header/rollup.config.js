import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './Header.js',
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
            babel({
                exclude: "node_modules",
                presets: ['@babel/preset-react' ]
            }),
            external(),
            resolve(),
            cjs(),
            terser()
        ]
    }
]
