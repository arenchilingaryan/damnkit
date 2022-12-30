"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = __importDefault(require("./button"));
exports.default = {
    title: 'Core',
    component: button_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return (0, jsx_runtime_1.jsx)(button_1.default, { children: "123" }); };
exports.Button = Template.bind({});
var Text = function () { return (0, jsx_runtime_1.jsx)(button_1.default, { children: "Hello Button" }); };
exports.Text = Text;
