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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var box_1 = __importDefault(require("./box"));
var button_1 = __importDefault(require("../../button/src/button"));
exports.default = {
    title: 'Core',
    component: button_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var divStyles = { backgroundColor: 'red', width: '200px', height: '200px' };
var BoxComponent = function () { return ((0, jsx_runtime_1.jsx)(box_1.default, __assign({ mb: 44, pt: 50, ml: { xs: 20, l: 100 }, p: 2 }, { children: (0, jsx_runtime_1.jsx)("div", { style: divStyles }) }))); };
exports.SpaceBox = BoxComponent.bind({});
