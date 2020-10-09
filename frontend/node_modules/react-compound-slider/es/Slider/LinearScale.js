import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { ticks } from 'd3-array';

var LinearScale =
/*#__PURE__*/
function () {
  function LinearScale() {
    _classCallCheck(this, LinearScale);

    this.domain = [0, 1];
    this.range = [0, 1];
    this.interpolator = null;
  }

  _createClass(LinearScale, [{
    key: "createInterpolator",
    value: function createInterpolator(domain, range) {
      var d0 = domain[0];
      var d1 = domain[1];
      var r0 = range[0];
      var r1 = range[1];

      if (d1 < d0) {
        d0 = this.deinterpolateValue(d1, d0);
        r0 = this.interpolateValue(r1, r0);
      } else {
        d0 = this.deinterpolateValue(d0, d1);
        r0 = this.interpolateValue(r0, r1);
      }

      return function (x) {
        return r0(d0(x));
      };
    }
  }, {
    key: "interpolateValue",
    value: function interpolateValue(a, b) {
      return a = +a, b -= a, function i(t) {
        return a + b * t;
      };
    }
  }, {
    key: "deinterpolateValue",
    value: function deinterpolateValue(a, b) {
      return (b -= a = +a) ? function (x) {
        return (x - a) / b;
      } : function () {
        return b;
      }; // eslint-disable-line
    }
  }, {
    key: "rescale",
    value: function rescale() {
      this.interpolator = null;
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(x) {
      var domain = this.domain,
          range = this.range;
      return (this.interpolator || (this.interpolator = this.createInterpolator(domain, range)))(+x);
    }
  }, {
    key: "setDomain",
    value: function setDomain(val) {
      this.domain = val.map(function (d) {
        return +d;
      });
      this.rescale();
      return this;
    }
  }, {
    key: "getDomain",
    value: function getDomain() {
      return this.domain;
    }
  }, {
    key: "setRange",
    value: function setRange(val) {
      this.range = val.map(function (d) {
        return +d;
      });
      return this;
    }
  }, {
    key: "getTicks",
    value: function getTicks(count) {
      var d = this.domain;
      return ticks(d[0], d[d.length - 1], count ? count : 10);
    }
  }]);

  return LinearScale;
}();

export { LinearScale as default };