"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mode1 = mode1;
exports.mode2 = mode2;
exports.mode3 = mode3;

var _utils = require("./utils");

/* eslint complexity: "off", max-statements: "off", max-depth: "off" */
function mode1(curr, next) {
  return next;
} // prevent duplicate values and crossing


function mode2(curr, next) {
  for (var i = 0; i < curr.length; i++) {
    if (curr[i].key !== next[i].key) {
      return curr;
    }

    if (next[i + 1] && next[i].val === next[i + 1].val) {
      return curr;
    }
  }

  return next;
} // pushable mode


function mode3(curr, next, step, reversed, getValue) {
  var indexForMovingHandle = -1;
  var handleMoveIsPositive = true;

  for (var i = 0; i < curr.length; i++) {
    var c = curr[i];
    var n = next[i]; // make sure keys are in same order if not return curr

    if (!n || n.key !== c.key) {
      return curr;
    } else if (n.val !== c.val) {
      indexForMovingHandle = i;
      handleMoveIsPositive = n.val - c.val > 0;
    }
  } // nothing has changed (shouldn't happen but just in case).


  if (indexForMovingHandle === -1) {
    return curr;
  } else {
    var increment = handleMoveIsPositive ? step : -step;

    for (var _i = 0; _i < next.length; _i++) {
      var n0 = next[_i];
      var n1 = next[_i + 1];

      if (n1 && n0.val === n1.val) {
        if (_i === indexForMovingHandle) {
          var newStep = n1.val + increment;

          if (getValue(newStep) === newStep) {
            var clone = (0, _utils.getUpdatedHandles)(next, n1.key, n1.val + increment, reversed);
            var check = mode3(next, clone, step, reversed, getValue);

            if (check === next) {
              return curr;
            } else {
              return check;
            }
          } else {
            return curr;
          }
        } else {
          var _newStep = n0.val + increment;

          if (getValue(_newStep) === _newStep) {
            var _clone = (0, _utils.getUpdatedHandles)(next, n0.key, n0.val + increment, reversed);

            var _check = mode3(next, _clone, step, reversed, getValue);

            if (_check === next) {
              return curr;
            } else {
              return _check;
            }
          } else {
            return curr;
          }
        }
      }
    }
  }

  return next;
}