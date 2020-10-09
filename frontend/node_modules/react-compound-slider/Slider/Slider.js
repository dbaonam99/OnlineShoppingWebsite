"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Rail = _interopRequireDefault(require("../Rail"));

var _Ticks = _interopRequireDefault(require("../Ticks"));

var _Tracks = _interopRequireDefault(require("../Tracks"));

var _Handles = _interopRequireDefault(require("../Handles"));

var _modes = require("./modes");

var _utils = require("./utils");

var _LinearScale = _interopRequireDefault(require("./LinearScale"));

var _DiscreteScale = _interopRequireDefault(require("./DiscreteScale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var noop = function noop() {};

var compare = function compare(b) {
  return function (m, d, i) {
    return m && b[i] === d;
  };
};

var equal = function equal(a, b) {
  return a === b || a.length === b.length && a.reduce(compare(b), true);
};

var getNextValue = function getNextValue(curr, step, domain, reversed) {
  var newVal = reversed ? curr - step : curr + step;
  return reversed ? Math.max(domain[0], newVal) : Math.min(domain[1], newVal);
};

var getPrevValue = function getPrevValue(curr, step, domain, reversed) {
  var newVal = reversed ? curr + step : curr - step;
  return reversed ? Math.min(domain[1], newVal) : Math.max(domain[0], newVal);
};

var Slider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      step: null,
      values: null,
      domain: null,
      handles: [],
      reversed: null,
      activeHandleID: null,
      valueToPerc: null,
      valueToStep: null,
      pixelToStep: null
    });

    _defineProperty(_assertThisInitialized(_this), "slider", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e, handleID) {
      var validUpKeys = ['ArrowRight', 'ArrowUp'];
      var validDownKeys = ['ArrowDown', 'ArrowLeft'];

      var _assertThisInitialize = _assertThisInitialized(_this),
          handles = _assertThisInitialize.state.handles,
          _assertThisInitialize2 = _assertThisInitialize.props,
          step = _assertThisInitialize2.step,
          reversed = _assertThisInitialize2.reversed,
          vertical = _assertThisInitialize2.vertical,
          domain = _assertThisInitialize2.domain;

      var key = e.key || e.keyCode;

      if (!validUpKeys.concat(validDownKeys).includes(key)) {
        return;
      }

      if (vertical) {
        var _ref = [validDownKeys, validUpKeys];
        validUpKeys = _ref[0];
        validDownKeys = _ref[1];
      }

      e.stopPropagation && e.stopPropagation();
      e.preventDefault && e.preventDefault();
      var found = handles.find(function (value) {
        return value.key === handleID;
      });

      if (!found) {
        return;
      }

      var currVal = found.val;
      var newVal = currVal;

      if (validUpKeys.includes(key)) {
        newVal = getNextValue(currVal, step, domain, reversed);
      } else if (validDownKeys.includes(key)) {
        newVal = getPrevValue(currVal, step, domain, reversed);
      }

      var nextHandles = handles.map(function (v) {
        return v.key === handleID ? {
          key: v.key,
          val: newVal
        } : v;
      });

      _this.submitUpdate(nextHandles, true);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e, handleID) {
      _this.onStart(e, handleID, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e, handleID) {
      if ((0, _utils.isNotValidTouch)(e)) {
        return;
      }

      _this.onStart(e, handleID, true);
    });

    _defineProperty(_assertThisInitialized(_this), "getEventData", function (e, isTouch) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          _assertThisInitialize4 = _assertThisInitialize3.state,
          pixelToStep = _assertThisInitialize4.pixelToStep,
          valueToPerc = _assertThisInitialize4.valueToPerc,
          vertical = _assertThisInitialize3.props.vertical; // double check the dimensions of the slider


      pixelToStep.setDomain((0, _utils.getSliderDomain)(_this.slider.current, vertical));
      var value;

      if (isTouch) {
        value = pixelToStep.getValue((0, _utils.getTouchPosition)(vertical, e));
      } else {
        value = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
      }

      return {
        value: value,
        percent: valueToPerc.getValue(value)
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          _assertThisInitialize6 = _assertThisInitialize5.state,
          curr = _assertThisInitialize6.handles,
          pixelToStep = _assertThisInitialize6.pixelToStep,
          activeHandleID = _assertThisInitialize6.activeHandleID,
          _assertThisInitialize7 = _assertThisInitialize5.props,
          vertical = _assertThisInitialize7.vertical,
          reversed = _assertThisInitialize7.reversed; // double check the dimensions of the slider


      pixelToStep.setDomain((0, _utils.getSliderDomain)(_this.slider.current, vertical)); // find the closest value (aka step) to the event location

      var updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX); // generate a "candidate" set of values - a suggestion of what to do

      var nextHandles = (0, _utils.getUpdatedHandles)(curr, activeHandleID, updateValue, reversed); // submit the candidate values

      _this.submitUpdate(nextHandles);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      var _assertThisInitialize8 = _assertThisInitialized(_this),
          _assertThisInitialize9 = _assertThisInitialize8.state,
          curr = _assertThisInitialize9.handles,
          pixelToStep = _assertThisInitialize9.pixelToStep,
          activeHandleID = _assertThisInitialize9.activeHandleID,
          _assertThisInitialize10 = _assertThisInitialize8.props,
          vertical = _assertThisInitialize10.vertical,
          reversed = _assertThisInitialize10.reversed;

      if ((0, _utils.isNotValidTouch)(e)) {
        return;
      } // double check the dimensions of the slider


      pixelToStep.setDomain((0, _utils.getSliderDomain)(_this.slider.current, vertical)); // find the closest value (aka step) to the event location

      var updateValue = pixelToStep.getValue((0, _utils.getTouchPosition)(vertical, e)); // generate a "candidate" set of values - a suggestion of what to do

      var nextHandles = (0, _utils.getUpdatedHandles)(curr, activeHandleID, updateValue, reversed); // submit the candidate values

      _this.submitUpdate(nextHandles);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      var _assertThisInitialize11 = _assertThisInitialized(_this),
          _assertThisInitialize12 = _assertThisInitialize11.state,
          handles = _assertThisInitialize12.handles,
          activeHandleID = _assertThisInitialize12.activeHandleID,
          _assertThisInitialize13 = _assertThisInitialize11.props,
          onChange = _assertThisInitialize13.onChange,
          onSlideEnd = _assertThisInitialize13.onSlideEnd;

      onChange(handles.map(function (d) {
        return d.val;
      }));
      onSlideEnd(handles.map(function (d) {
        return d.val;
      }), {
        activeHandleID: activeHandleID
      });

      _this.setState({
        activeHandleID: null
      });

      if (isBrowser) {
        document.removeEventListener('mousemove', _this.onMouseMove);
        document.removeEventListener('mouseup', _this.onMouseUp);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      var _assertThisInitialize14 = _assertThisInitialized(_this),
          _assertThisInitialize15 = _assertThisInitialize14.state,
          handles = _assertThisInitialize15.handles,
          activeHandleID = _assertThisInitialize15.activeHandleID,
          _assertThisInitialize16 = _assertThisInitialize14.props,
          onChange = _assertThisInitialize16.onChange,
          onSlideEnd = _assertThisInitialize16.onSlideEnd;

      onChange(handles.map(function (d) {
        return d.val;
      }));
      onSlideEnd(handles.map(function (d) {
        return d.val;
      }), {
        activeHandleID: activeHandleID
      });

      _this.setState({
        activeHandleID: null
      });

      if (isBrowser) {
        document.removeEventListener('touchmove', _this.onTouchMove);
        document.removeEventListener('touchend', _this.onTouchEnd);
      }
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pixelToStep = this.state.pixelToStep;
      var vertical = this.props.vertical;
      pixelToStep.setDomain((0, _utils.getSliderDomain)(this.slider.current, vertical));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      if (isBrowser) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "onStart",
    value: function onStart(e, handleID, isTouch) {
      var handles = this.state.handles,
          onSlideStart = this.props.onSlideStart;

      if (!isTouch) {
        e.preventDefault && e.preventDefault();
      }

      e.stopPropagation && e.stopPropagation();
      var found = handles.find(function (value) {
        return value.key === handleID;
      });

      if (found) {
        this.setState({
          activeHandleID: handleID
        });
        onSlideStart(handles.map(function (d) {
          return d.val;
        }), {
          activeHandleID: handleID
        });
        isTouch ? this.addTouchEvents() : this.addMouseEvents();
      } else {
        this.setState({
          activeHandleID: null
        });
        this.handleRailAndTrackClicks(e, isTouch);
      }
    }
  }, {
    key: "handleRailAndTrackClicks",
    value: function handleRailAndTrackClicks(e, isTouch) {
      var _this2 = this;

      var _this$state = this.state,
          curr = _this$state.handles,
          pixelToStep = _this$state.pixelToStep,
          _this$props = this.props,
          vertical = _this$props.vertical,
          reversed = _this$props.reversed;
      var slider = this.slider; // double check the dimensions of the slider

      pixelToStep.setDomain((0, _utils.getSliderDomain)(slider.current, vertical)); // find the closest value (aka step) to the event location

      var updateValue;

      if (isTouch) {
        updateValue = pixelToStep.getValue((0, _utils.getTouchPosition)(vertical, e));
      } else {
        updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
      } // find the closest handle key


      var updateKey = null;
      var minDiff = Infinity;

      for (var i = 0; i < curr.length; i++) {
        var _curr$i = curr[i],
            key = _curr$i.key,
            val = _curr$i.val;
        var diff = Math.abs(val - updateValue);

        if (diff < minDiff) {
          updateKey = key;
          minDiff = diff;
        }
      } // generate a "candidate" set of values - a suggestion of what to do


      var nextHandles = (0, _utils.getUpdatedHandles)(curr, updateKey, updateValue, reversed); // submit the candidate values

      this.setState({
        activeHandleID: updateKey
      }, function () {
        _this2.submitUpdate(nextHandles, true);

        isTouch ? _this2.addTouchEvents() : _this2.addMouseEvents();
      });
    }
  }, {
    key: "addMouseEvents",
    value: function addMouseEvents() {
      if (isBrowser) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
      }
    }
  }, {
    key: "addTouchEvents",
    value: function addTouchEvents() {
      if (isBrowser) {
        document.addEventListener('touchmove', this.onTouchMove);
        document.addEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "submitUpdate",
    value: function submitUpdate(next, callOnChange) {
      var _this$props2 = this.props,
          mode = _this$props2.mode,
          step = _this$props2.step,
          onUpdate = _this$props2.onUpdate,
          onChange = _this$props2.onChange,
          reversed = _this$props2.reversed;
      var getValue = this.state.valueToStep.getValue;
      this.setState(function (_ref2) {
        var curr = _ref2.handles;
        var handles; // given the current handles and a candidate set, decide what to do

        if (typeof mode === 'function') {
          handles = mode(curr, next, step, reversed, getValue);
          (0, _warning["default"])(Array.isArray(handles), 'Custom mode function did not return an array.');
        } else {
          switch (mode) {
            case 1:
              handles = (0, _modes.mode1)(curr, next);
              break;

            case 2:
              handles = (0, _modes.mode2)(curr, next);
              break;

            case 3:
              handles = (0, _modes.mode3)(curr, next, step, reversed, getValue);
              break;

            default:
              handles = next;
              (0, _warning["default"])(false, "".concat(_utils.prfx, " Invalid mode value."));
          }
        }

        onUpdate(handles.map(function (d) {
          return d.val;
        }));

        if (callOnChange) {
          onChange(handles.map(function (d) {
            return d.val;
          }));
        }

        return {
          handles: handles
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          handles = _this$state2.handles,
          valueToPerc = _this$state2.valueToPerc,
          activeHandleID = _this$state2.activeHandleID,
          _this$props3 = this.props,
          className = _this$props3.className,
          rootStyle = _this$props3.rootStyle,
          rootProps = _this$props3.rootProps,
          Comp = _this$props3.component,
          disabled = _this$props3.disabled,
          flatten = _this$props3.flatten;
      var mappedHandles = handles.map(function (_ref3) {
        var key = _ref3.key,
            val = _ref3.val;
        return {
          id: key,
          value: val,
          percent: valueToPerc.getValue(val)
        };
      });

      var children = _react["default"].Children.map(this.props.children, function (child) {
        if (child && (child.type.name === _Rail["default"].name || child.type.name === _Ticks["default"].name || child.type.name === _Tracks["default"].name || child.type.name === _Handles["default"].name)) {
          return _react["default"].cloneElement(child, {
            scale: valueToPerc,
            handles: mappedHandles,
            activeHandleID: activeHandleID,
            getEventData: _this3.getEventData,
            emitKeyboard: disabled ? noop : _this3.onKeyDown,
            emitMouse: disabled ? noop : _this3.onMouseDown,
            emitTouch: disabled ? noop : _this3.onTouchStart
          });
        }

        return child;
      });

      return flatten ? _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(Comp, _extends({}, rootProps, {
        style: rootStyle,
        className: className,
        ref: this.slider
      })), children) : _react["default"].createElement(Comp, _extends({}, rootProps, {
        style: rootStyle,
        className: className,
        ref: this.slider
      }), children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var step = nextProps.step,
          values = nextProps.values,
          domain = nextProps.domain,
          reversed = nextProps.reversed,
          onUpdate = nextProps.onUpdate,
          onChange = nextProps.onChange,
          warnOnChanges = nextProps.warnOnChanges;
      var valueToPerc = prevState.valueToPerc;
      var valueToStep = prevState.valueToStep;
      var pixelToStep = prevState.pixelToStep;
      var nextState = {};

      if (!valueToPerc || !valueToStep || !pixelToStep) {
        valueToPerc = new _LinearScale["default"]();
        valueToStep = new _DiscreteScale["default"]();
        pixelToStep = new _DiscreteScale["default"]();
        nextState.valueToPerc = valueToPerc;
        nextState.valueToStep = valueToStep;
        nextState.pixelToStep = pixelToStep;
      }

      if (prevState.step === null || prevState.domain === null || prevState.reversed === null || step !== prevState.step || domain[0] !== prevState.domain[0] || domain[1] !== prevState.domain[1] || reversed !== prevState.reversed) {
        var _domain = _slicedToArray(domain, 2),
            min = _domain[0],
            max = _domain[1];

        valueToStep.setStep(step).setRange([min, max]).setDomain([min, max]);

        if (reversed === true) {
          valueToPerc.setDomain([min, max]).setRange([100, 0]);
          pixelToStep.setStep(step).setRange([max, min]);
        } else {
          valueToPerc.setDomain([min, max]).setRange([0, 100]);
          pixelToStep.setStep(step).setRange([min, max]);
        }

        (0, _warning["default"])(max > min, "".concat(_utils.prfx, " Max must be greater than min (even if reversed). Max is ").concat(max, ". Min is ").concat(min, "."));

        var _getHandles = (0, _utils.getHandles)(values || prevState.values, reversed, valueToStep, warnOnChanges),
            handles = _getHandles.handles,
            changes = _getHandles.changes;

        if (changes || values === undefined || values === prevState.values) {
          onUpdate(handles.map(function (d) {
            return d.val;
          }));
          onChange(handles.map(function (d) {
            return d.val;
          }));
        }

        nextState.step = step;
        nextState.values = values;
        nextState.domain = domain;
        nextState.handles = handles;
        nextState.reversed = reversed;
      } else if (!equal(values, prevState.values)) {
        var _getHandles2 = (0, _utils.getHandles)(values, reversed, valueToStep, warnOnChanges),
            _handles = _getHandles2.handles,
            _changes = _getHandles2.changes;

        if (_changes) {
          onUpdate(_handles.map(function (d) {
            return d.val;
          }));
          onChange(_handles.map(function (d) {
            return d.val;
          }));
        }

        nextState.values = values;
        nextState.handles = _handles;
      }

      if (Object.keys(nextState).length) {
        return nextState;
      }

      return null;
    }
  }]);

  return Slider;
}(_react.PureComponent);

Slider.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * String component used for slider root. Defaults to 'div'.
   */
  component: _propTypes["default"].string,

  /**
   * An object with any inline styles you want applied to the root element.
   */
  rootStyle: _propTypes["default"].object,

  /**
   * An object with any props you want applied to the root element.
   */
  rootProps: _propTypes["default"].object,

  /**
   * CSS class name applied to the root element of the slider.
   */
  className: _propTypes["default"].string,

  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain: _propTypes["default"].array,

  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: _propTypes["default"].array,

  /**
   * The step value for the slider.
   */
  step: _propTypes["default"].number,

  /**
   * The interaction mode. Value of 1 will allow handles to cross each other.
   * Value of 2 will keep the sliders from crossing and separated by a step.
   * Value of 3 will make the handles pushable and keep them a step apart.
   * ADVANCED: You can also supply a function that will be passed the current values and the incoming update.
   * Your function should return what the state should be set as.
   */
  mode: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].func]),

  /**
   * Set to true if the slider is displayed vertically to tell the slider to use the height to calculate positions.
   */
  vertical: _propTypes["default"].bool,

  /**
   * Reverse the display of slider values.
   */
  reversed: _propTypes["default"].bool,

  /**
   * Function triggered when the value of the slider has changed. This will recieve changes at the end of a slide as well as changes from clicks on rails and tracks. Receives values.
   */
  onChange: _propTypes["default"].func,

  /**
   * Function called with the values at each update (caution: high-volume updates when dragging). Receives values.
   */
  onUpdate: _propTypes["default"].func,

  /**
   * Function triggered with ontouchstart or onmousedown on a handle. Receives values.
   */
  onSlideStart: _propTypes["default"].func,

  /**
   * Function triggered on ontouchend or onmouseup on a handle. Receives values.
   */
  onSlideEnd: _propTypes["default"].func,

  /**
   * Ignore all mouse, touch and keyboard events.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Render slider children as siblings. This is primarily for SVG sliders. See the SVG example.
   */
  flatten: _propTypes["default"].bool,

  /**
   * When true, the slider will warn if values are changed to fit domain and step values.  Defaults to false.
   */
  warnOnChanges: _propTypes["default"].bool,

  /**
   * Component children to render.
   */
  children: _propTypes["default"].any
} : {};
Slider.defaultProps = {
  mode: 1,
  step: 0.1,
  domain: [0, 100],
  component: 'div',
  rootProps: {},
  rootStyle: {},
  vertical: false,
  reversed: false,
  onChange: noop,
  onUpdate: noop,
  onSlideStart: noop,
  onSlideEnd: noop,
  disabled: false,
  flatten: false,
  warnOnChanges: false
};
var _default = Slider;
exports["default"] = _default;