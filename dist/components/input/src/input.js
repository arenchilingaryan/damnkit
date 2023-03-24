"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var input_core_1 = require("components/input/src/input-core");
var useComponentCommonConfig_1 = require("hooks/useComponentCommonConfig/useComponentCommonConfig");
var Input = (0, react_1.forwardRef)(function (props, ref) {
    var styles = (0, useComponentCommonConfig_1.useComponentCommonConfig)(props, 'input').styles;
    return (0, jsx_runtime_1.jsx)(input_core_1._Input, __assign({ style: styles, ref: ref }, props));
});
Input.displayName = 'Input';
exports.default = Input;
