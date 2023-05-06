#!/bin/bash

# About: run this script to quickly create a new folder for your component
# Example: ./create.sh resizer

cp -r resizer "$1"
mv "$1"/resizer.tsx "$1"/"$1".tsx
rm "$1/dist.js" "$1/dist.mjs" "$1/Resizer.d.ts"
rm -rf "$1/node_modules"
npm i

echio """
# Steps to Do:
- [ ] Change \`package.json\` name and types
- [ ] \`ncu -u && npm i\`
- [ ] Change \`rollup.config.js\` to the correct filename
- [ ] Write your component in \`$1.tsx\`

"""
