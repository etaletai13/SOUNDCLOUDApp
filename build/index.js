const Build = require('nativefier').default

// Load configuration objects from json files
var darwin = require('./darwin')
var linux = require('./linux')
var windows = require('./win32')

// If there are iPhone and Android configs
// var android = require('./android')
// var ios = require('./ios')

// Functions
function buildThis (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildThis(darwin)
buildThis(linux)
buildThis(win32)
// buildThis(android)
// buildThis(iPhone)
// buildThis(raspberryPi)
