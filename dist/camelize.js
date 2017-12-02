'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelize = camelize;
exports.snakify = snakify;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _mapKeys = require('lodash/mapKeys');

var _mapKeys2 = _interopRequireDefault(_mapKeys);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function camelizeString(str) {
  return str.replace(/_(\w)/g, function (match) {
    return match[1].toUpperCase();
  });
}


function snakifyString(str) {
  return str.replace(/[A-Z]/, function (match) {
    return '_' + match[0];
  }).toLowerCase();
}

function camelize(object) {
  var objectWithMappedKeys = (0, _mapKeys2.default)(object, camelizeString);
  return (0, _mapValues2.default)(objectWithMappedKeys, function (subObject) {
    return (0, _isPlainObject2.default)(subObject) ? camelize(subObject) : subObject;
  });
}

function snakify(object) {
  var objectWithMappedKeys = (0, _mapKeys2.default)(object, snakifyString);
  return (0, _mapValues2.default)(objectWithMappedKeys, function (subObject) {
    return (0, _isPlainObject2.default)(subObject) ? snakify(subObject) : subObject;
  });
}