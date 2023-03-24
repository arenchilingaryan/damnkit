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
var button_core_1 = require("./button-core");
var index_1 = require("components/spinner/index");
var useComponentCommonConfig_1 = require("hooks/useComponentCommonConfig/useComponentCommonConfig");
var Button = (0, react_1.forwardRef)(function (props, ref) {
    var styles = (0, useComponentCommonConfig_1.useComponentCommonConfig)(props, 'button').styles;
    return ((0, jsx_runtime_1.jsxs)(button_core_1._Button, __assign({ style: styles, ref: ref }, props, { children: [props.leftIcon && props.leftIcon, (0, jsx_runtime_1.jsx)(button_core_1._ButtonContent, __assign({ isHide: !!props.isLoading }, { children: props.children })), props.rightIcon && props.rightIcon, props.isLoading && (props.spinner ? props.spinner : (0, jsx_runtime_1.jsx)(index_1.Spinner, {}))] })));
});
Button.displayName = 'Button';
exports.default = Button;
