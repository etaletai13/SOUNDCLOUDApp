const Build = require('nativefier').default

// Load configuration objects from json files
var darwin = require('./darwin')
var linux = require('./linux')
var windows = require('./win32')

// Functions
function buildThis (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildThis(darwin)
buildThis(linux)
buildThis(windows)
