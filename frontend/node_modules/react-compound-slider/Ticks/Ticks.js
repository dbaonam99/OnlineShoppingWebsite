"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Ticks =
/*#__PURE__*/
function (_Component) {
  _inherits(Ticks, _Component);

  function Ticks() {
    _classCallCheck(this, Ticks);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ticks).apply(this, arguments));
  }

  _createClass(Ticks, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          values = _this$props.values,
          scale = _this$props.scale,
          count = _this$props.count,
          getEventData = _this$props.getEventData,
          activeHandleID = _this$props.activeHandleID;
      var ticks = (values ? values : scale.getTicks(count)).map(function (value) {
        return {
          id: "$$-".concat(value),
          value: value,
          percent: scale.getValue(value)
        };
      });
      var renderedChildren = children({
        getEventData: getEventData,
        activeHandleID: activeHandleID,
        ticks: ticks
      });
      return renderedChildren && _react["default"].Children.only(renderedChildren);
    }
  }]);

  return Ticks;
}(_react.Component);

Ticks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** @ignore */
  scale: _propTypes["default"].object,

  /**
   * Approximate number of ticks you want to render.
   * If you supply your own ticks using the values prop this prop has no effect.
   */
  count: _propTypes["default"].number,

  /**
   * The values prop should be an array of unique numbers.
   * Use this prop if you want to specify your own tick values instead of ticks generated by the slider.
   * The numbers should be valid numbers in the domain and correspond to the step value.
   * Invalid values will be coerced to the closet matching value in the domain.
   */
  values: _propTypes["default"].array,

  /** @ignore */
  getEventData: _propTypes["default"].func,

  /** @ignore */
  activeHandleID: _propTypes["default"].string,

  /** @ignore */
  emitMouse: _propTypes["default"].func,

  /** @ignore */
  emitTouch: _propTypes["default"].func,

  /**
   * A function to render the ticks.
   * The function receives an object with an array of ticks. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature:
   * `({ getEventData, activeHandleID, ticks  }): element`
   */
  children: _propTypes["default"].func.isRequired
} : {};
Ticks.defaultProps = {
  count: 10
};
var _default = Ticks;
exports["default"] = _default;