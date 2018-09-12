const packaged = require('electron-packager')

// Load configuration objects from json files
var darwin = {
  dir: '/Gits/SKIOApp',
  name: 'SKIOApp',
  platform: 'darwin',
  arch: 'x64',
  electronVersion: '1.6.15',
  out: '/Gits/SKIOApp/releases',
  appBundleId: '',
  appVersion: '0.0.1',
  overwrite: true,
  asar: false,
  icon: '',
  bundle_id: '',
  appname: 'SKIOApp',
  sourcedir: '/Gits/SKIOApp/knitting/SKIOApp-darwin-x64/',
  ignore: '/Gits/SKIOApp/releases'
}
// var linux = require('./linux')
// var windows = require('./win32')

// Functions
function packThis (options) {
  return new Promise(resolve => {
    packaged(options, resolve)
  })
}

packThis(darwin)
// buildThis(linux)
// buildThis(win32)
// buildThis(android)
// buildThis(iPhone)
// buildThis(raspberryPi)
