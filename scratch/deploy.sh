#!/bin/bash
set -e

echo "Committing changes..."
git add .
git commit -m "Update linkedin link and add ppe-safety-system project"

echo "Pulling latest changes from main..."
git pull --rebase origin main || { echo "Rebase failed, trying merge..."; git rebase --abort; git pull origin main; }

echo "Building the project..."
npm run build

echo "Deploying to gh-pages..."
npm run deploy

echo "Pushing source to main..."
git push origin main

echo "Done!"
