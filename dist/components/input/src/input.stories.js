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
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var input_1 = __importDefault(require("./input"));
var disableStoriesControls_1 = require("utils/disableStoriesControls");
exports.default = {
    title: 'Core/Inputs',
    component: input_1.default,
    argTypes: __assign({}, (0, disableStoriesControls_1.disableStoriesControls)('mixName', 'spinner', 'variant', 'rightIcon', 'leftIcon', 'disableStyles')),
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(input_1.default, __assign({ placeholder: "Hello world" }, args)); };
exports.Input = Template.bind({});
