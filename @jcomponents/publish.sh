#!/bin/bash

# ABOUT: Updates version and publishes to the npm registry
# Usage: ./publish.sh nav

cd "$1"

# Ask for new version
echo "Current version: $(jq '.version' package.json)"
read -rp "New version: " new_version

# Update to new version
jq ".version=\"$new_version\"" package.json > tmp; cat tmp > package.json; rm tmp;

# Deploy
npm run rollup
npm publish
