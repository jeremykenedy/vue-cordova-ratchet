# vue-cordova-ratchet
A Template created with vue cli and vue-cordova. This will compile using to IOS, Android, Electron, and OSX native all from the cli out the box!

## Project setup
```sh
git clone git@github.com:jeremykenedy/vue-cordova-ratchet.git vue-cordova-ratchet
cd vue-cordova-ratchet/
cp .env.example .env
npm install
```

* Configure your `.env` file.

### Compiles and hot-reloads for development
```sh
npm run serve
```

### Compiles and minifies for production
```sh
npm run build
```

### Run your unit tests
```sh
npm run test:unit
```

### Lints and fixes files
```sh
npm run lint
```

## Vue Cordova Plugin Usage
Prepare
```sh
npm run cordova-prepare # prepare for build (you can run this command, when you checkouted your project from GIT, it's like npm install)
```
Android
```sh
npm run cordova-serve-android # Development Android
npm run cordova-build-android # Build Android
npm run cordova-build-only-www-android # Build only files to src-cordova
```
IOS
```sh
npm run cordova-serve-ios # Development IOS
npm run cordova-build-ios # Build IOS
npm run cordova-build-only-www-ios # Build only files to src-cordova
```
OSX
```sh
npm run cordova-serve-osx # Development OSX
npm run cordova-build-osx # Build OSX
npm run cordova-build-only-www-osx # Build only files to src-cordova
```
Browser
```sh
npm run cordova-serve-browser # Development Browser
npm run cordova-build-browser # Build Browser
npm run cordova-build-only-www-browser # Build only files to src-cordova
```
Electron
```sh
npm run cordova-serve-electron # Development Electron
npm run cordova-build-electron # Build Electron
npm run cordova-build-only-www-electron # Build only files to src-cordova
```

### References
* [Vue CLI Config](https://cli.vuejs.org/config/)
* [Vue CLI Cordova Plugin](https://github.com/m0dch3n/vue-cli-plugin-cordova)
* [Cordova Command-line Interface](https://cordova.apache.org/docs/en/2.9.0/guide/cli/)
* [Google Ratchet UI](http://goratchet.com/)
