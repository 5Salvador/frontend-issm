#!/bin/bash

echo "Switching to branch Linux"
git checkout Linux

# Pull the latest changes from the remote 'Linux' branch
git pull origin Linux

echo "Building app...."
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment!"
  exit 1
fi

echo "Deploying files to server..."
scp -r dist/* issm-p-glpi1@10.0.1.53:/var/www/frontend-issm/

echo "Done!"

