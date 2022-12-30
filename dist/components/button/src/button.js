"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var config_context_1 = require("../../../config/context/config-context");
var Button = (0, react_1.forwardRef)(function (props, ref) {
    var context = (0, react_1.useContext)(config_context_1.ConfigContext);
    console.log(context);
    return (0, jsx_runtime_1.jsx)(_Button, { children: props.children });
});
var _Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 4px;\n"], ["\n  background: ", ";\n  color: ", ";\n\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 4px;\n"])), function (props) { return props.theme.primary; }, function (props) { return props.theme.white; });
Button.displayName = 'Button';
exports.default = Button;
var templateObject_1;
