#!/bin/bash
set -e

echo "Building the project..."
npm run build

echo "Deploying to gh-pages..."
npm run deploy

echo "Pushing source to main..."
git push origin main

echo "Done!"
