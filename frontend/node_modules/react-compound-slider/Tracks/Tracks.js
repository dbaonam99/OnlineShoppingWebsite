"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tracks =
/*#__PURE__*/
function (_Component) {
  _inherits(Tracks, _Component);

  function Tracks() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tracks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tracks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getTrackProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread({}, props, {
        onMouseDown: (0, _utils.callAll)(props.onMouseDown, emitMouse),
        onTouchStart: (0, _utils.callAll)(props.onTouchStart, emitTouch)
      });
    });

    return _this;
  }

  _createClass(Tracks, [{
    key: "render",
    value: function render() {
      var getTrackProps = this.getTrackProps,
          _this$props2 = this.props,
          children = _this$props2.children,
          left = _this$props2.left,
          right = _this$props2.right,
          scale = _this$props2.scale,
          handles = _this$props2.handles,
          getEventData = _this$props2.getEventData,
          activeHandleID = _this$props2.activeHandleID;
      var domain = scale.getDomain();
      var tracks = [];

      for (var i = 0; i < handles.length + 1; i++) {
        var source = handles[i - 1];
        var target = handles[i];

        if (i === 0 && left === true) {
          source = {
            id: '$',
            value: domain[0],
            percent: 0
          };
        } else if (i === handles.length && right === true) {
          target = {
            id: '$',
            value: domain[1],
            percent: 100
          };
        }

        if (source && target) {
          tracks.push({
            id: "".concat(source.id, "-").concat(target.id),
            source: source,
            target: target
          });
        }
      }

      var renderedChildren = children({
        getEventData: getEventData,
        activeHandleID: activeHandleID,
        tracks: tracks,
        getTrackProps: getTrackProps
      });
      return renderedChildren && _react["default"].Children.only(renderedChildren);
    }
  }]);

  return Tracks;
}(_react.Component);

Tracks.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Boolean value to control whether the left most track is included in the tracks array.
   */
  left: _propTypes["default"].bool,

  /**
   * Boolean value to control whether the right most track is included in the tracks array.
   */
  right: _propTypes["default"].bool,

  /** @ignore */
  getEventData: _propTypes["default"].func,

  /** @ignore */
  activeHandleID: _propTypes["default"].string,

  /** @ignore */
  scale: _propTypes["default"].object,

  /** @ignore */
  handles: _propTypes["default"].array,

  /** @ignore */
  emitMouse: _propTypes["default"].func,

  /** @ignore */
  emitTouch: _propTypes["default"].func,

  /**
   * A function to render the tracks. The function receives an object with an array of tracks. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature:  `({ getEventData, activeHandleID, tracks, getTrackProps }): element`
   */
  children: _propTypes["default"].func.isRequired
} : {};
Tracks.defaultProps = {
  left: true,
  right: true
};
var _default = Tracks;
exports["default"] = _default;