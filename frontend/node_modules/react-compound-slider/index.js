"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _Slider["default"];
  }
});
Object.defineProperty(exports, "mode1", {
  enumerable: true,
  get: function get() {
    return _Slider.mode1;
  }
});
Object.defineProperty(exports, "mode2", {
  enumerable: true,
  get: function get() {
    return _Slider.mode2;
  }
});
Object.defineProperty(exports, "mode3", {
  enumerable: true,
  get: function get() {
    return _Slider.mode3;
  }
});
Object.defineProperty(exports, "Rail", {
  enumerable: true,
  get: function get() {
    return _Rail["default"];
  }
});
Object.defineProperty(exports, "Ticks", {
  enumerable: true,
  get: function get() {
    return _Ticks["default"];
  }
});
Object.defineProperty(exports, "Tracks", {
  enumerable: true,
  get: function get() {
    return _Tracks["default"];
  }
});
Object.defineProperty(exports, "Handles", {
  enumerable: true,
  get: function get() {
    return _Handles["default"];
  }
});
exports["default"] = void 0;

var _Slider = _interopRequireWildcard(require("./Slider"));

var _Rail = _interopRequireDefault(require("./Rail"));

var _Ticks = _interopRequireDefault(require("./Ticks"));

var _Tracks = _interopRequireDefault(require("./Tracks"));

var _Handles = _interopRequireDefault(require("./Handles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_Slider["default"].Rail = _Rail["default"];
_Slider["default"].Ticks = _Ticks["default"];
_Slider["default"].Tracks = _Tracks["default"];
_Slider["default"].Handles = _Handles["default"];
var _default = _Slider["default"];
exports["default"] = _default;