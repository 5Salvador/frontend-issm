#!/bin/bash

echo "Switching to branch Linux"
git checkout Linux

git pull origin Linux

echo "Building app...."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment!"
  exit 1
fi

echo "Clearing old files..."
ssh issm-p-glpi1@10.0.1.53 "sudo rm -rf /var/www/frontend-issm/*"

echo "Deploying files..."
scp -r dist/* issm-p-glpi1@10.0.1.53:/var/www/frontend-issm/

echo "Done!"

