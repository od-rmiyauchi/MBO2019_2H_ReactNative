watchman watch-del-all
lsof -n -P -i :8081 -t | xargs kill
rm -rf ios/build
rm -rf android/app/build
rm -rf node_modules
npm install
