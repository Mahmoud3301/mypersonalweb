#!/bin/bash
set -e

echo "Pulling latest changes from main with merge strategy..."
git pull origin main --no-rebase -m "Merge remote-tracking branch 'origin/main'" || {
    echo "Merge conflict detected!"
    exit 1
}

echo "Building the project..."
npm run build

echo "Deploying to gh-pages..."
npm run deploy

echo "Pushing source to main..."
git push origin main

echo "Done!"
