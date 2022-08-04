#!/bin/bash

# About: run this script to quickly turn a single file into a React component
# Example: ./containerize_component.sh ./jcomponents/button Button

# Arguments
u_path="$1"
u_filename="$2"


cd "$u_path" && 
echo """import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default [
{
    input: '$u_filename',
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
        babel({
            exclude: 'node_modules',
            presets: ['@babel/preset-react' ]
        }),
        external(),
        resolve(),
        cjs(),
        terser()
    ]
}
]
""" > rollup.config.js &&
npm i -D react react-dom @rollup/plugin-babel rollup-plugin-peer-deps-external @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-terser @babel/preset-react rollup-plugin-postcss

if type "jq" > /dev/null; then
    temp_name="$(mktemp)"
    jq '''. + {
            "main": "./dist.js",
            "module": "./dist.mjs",
            "peerDependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        }, 
        "scripts": {
            "rollup": "rollup -c",
            "jpublish": "npm run rollup && npm publish"
        }
    } ''' < package.json > "$temp_name"
    cat "$temp_name" > package.json
    rm "$temp_name"
else
    echo '''! Remember to add this to your package.json:
    scripts: {
        "rollup": "rollup -c"
    }
    peerDependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    '''
    # echo "Please install jq for this to work. You can install from https://stedolan.github.io/jq/"
fi

npm run rollup
