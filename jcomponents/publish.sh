#!/bin/bash

# Build
npm run rollup

# Publish under both names
jq '.name="joelcomponent"' package.json > tmp; cat tmp > package.json; rm tmp; 
npm publish
jq '.name="joelcomponents"' package.json > tmp; cat tmp > package.json; rm tmp; 
npm publish
jq '.name="joelgrayson"' package.json > tmp; cat tmp > package.json; rm tmp; 
npm publish
