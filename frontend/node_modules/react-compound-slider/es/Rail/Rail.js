import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { callAll } from '../utils';

var Rail =
/*#__PURE__*/
function (_Component) {
  _inherits(Rail, _Component);

  function Rail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getRailProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread({}, props, {
        onMouseDown: callAll(props.onMouseDown, emitMouse),
        onTouchStart: callAll(props.onTouchStart, emitTouch)
      });
    });

    return _this;
  }

  _createClass(Rail, [{
    key: "render",
    value: function render() {
      var getRailProps = this.getRailProps,
          _this$props2 = this.props,
          getEventData = _this$props2.getEventData,
          activeHandleID = _this$props2.activeHandleID,
          children = _this$props2.children;
      var renderedChildren = children({
        getEventData: getEventData,
        activeHandleID: activeHandleID,
        getRailProps: getRailProps
      });
      return renderedChildren && React.Children.only(renderedChildren);
    }
  }]);

  return Rail;
}(Component);

Rail.propTypes = process.env.NODE_ENV !== "production" ? {
  /** @ignore */
  getEventData: PropTypes.func,

  /** @ignore */
  activeHandleID: PropTypes.string,

  /** @ignore */
  emitMouse: PropTypes.func,

  /** @ignore */
  emitTouch: PropTypes.func,

  /**
   * A function to render the rail. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature: `({ getEventData, activeHandleID, getRailProps }): element`
   */
  children: PropTypes.func.isRequired
} : {};
export default Rail;