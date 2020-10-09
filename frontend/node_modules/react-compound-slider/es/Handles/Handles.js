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

var Handles =
/*#__PURE__*/
function (_Component) {
  _inherits(Handles, _Component);

  function Handles() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Handles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Handles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "autofocus", function (e) {
      e.target.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "getHandleProps", function (id) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          emitKeyboard = _this$props.emitKeyboard,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;
      return _objectSpread({}, props, {
        onKeyDown: callAll(props.onKeyDown, function (e) {
          return emitKeyboard(e, id);
        }),
        onMouseDown: callAll(props.onMouseDown, _this.autofocus, function (e) {
          return emitMouse(e, id);
        }),
        onTouchStart: callAll(props.onTouchStart, function (e) {
          return emitTouch(e, id);
        })
      });
    });

    return _this;
  }

  _createClass(Handles, [{
    key: "render",
    value: function render() {
      var getHandleProps = this.getHandleProps,
          _this$props2 = this.props,
          activeHandleID = _this$props2.activeHandleID,
          children = _this$props2.children,
          handles = _this$props2.handles;
      var renderedChildren = children({
        handles: handles,
        activeHandleID: activeHandleID,
        getHandleProps: getHandleProps
      });
      return renderedChildren && React.Children.only(renderedChildren);
    }
  }]);

  return Handles;
}(Component);

Handles.propTypes = process.env.NODE_ENV !== "production" ? {
  /** @ignore */
  activeHandleID: PropTypes.string,

  /** @ignore */
  handles: PropTypes.array,

  /** @ignore */
  emitKeyboard: PropTypes.func,

  /** @ignore */
  emitMouse: PropTypes.func,

  /** @ignore */
  emitTouch: PropTypes.func,

  /**
   * A function to render the handles.
   * The function receives an object with an array of handles and functions to get handle props
   * `({ handles, getHandleProps }): element`
   */
  children: PropTypes.func.isRequired
} : {};
export default Handles;