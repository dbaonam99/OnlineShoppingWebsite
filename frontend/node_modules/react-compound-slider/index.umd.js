"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Slider = _interopRequireDefault(require("./Slider"));

var _Rail = _interopRequireDefault(require("./Rail"));

var _Ticks = _interopRequireDefault(require("./Ticks"));

var _Tracks = _interopRequireDefault(require("./Tracks"));

var _Handles = _interopRequireDefault(require("./Handles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Slider["default"].Rail = _Rail["default"];
_Slider["default"].Ticks = _Ticks["default"];
_Slider["default"].Tracks = _Tracks["default"];
_Slider["default"].Handles = _Handles["default"];
var _default = _Slider["default"];
exports["default"] = _default;