echo "Switching to branch Linux"
git checkout Linux

echo "Building app...."
npm run build

echo "Deploying files to server..."
scp -r  dist/* issm-p-glpi1@10.0.1.53:/var/www/frontend-issm/

echo "Done!"

