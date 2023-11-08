#!/bin/bash

instructions='About: run this script to quickly create a new folder for your component
Example: ./create.sh resizer'

[ -z "$1" ] && echo "$instructions" && exit 0

cp -r resizer "$1"
mv "$1"/resizer.tsx "$1"/"$1".tsx
rm "$1/dist.js" "$1/dist.mjs" "$1/Resizer.d.ts"
rm -rf "$1/node_modules"
npm i

echo """
# Steps to Do:
- [ ] Change \`package.json\` \"name\", \"types\", and \"version\" properties
- [ ] \`ncu -u && npm i\`
- [ ] Change \`rollup.config.js\`'s input file to the correct filename
- [ ] Write your component in \`$1.tsx\`
- [ ] Create \`$1.d.ts\` with the type signatures

""" | glow

