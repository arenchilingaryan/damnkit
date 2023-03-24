"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Loader = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 2px solid #fff;\n  border-top-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(0, 0, 0, 0);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  animation: loadingSpinner 0.7s infinite linear;\n  -webkit-animation: loadingSpinner 0.7s infinite linear;\n\n  margin-top: -12px;\n  margin-left: -12px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  @keyframes loadingSpinner {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  border: 2px solid #fff;\n  border-top-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(0, 0, 0, 0);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  animation: loadingSpinner 0.7s infinite linear;\n  -webkit-animation: loadingSpinner 0.7s infinite linear;\n\n  margin-top: -12px;\n  margin-left: -12px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  @keyframes loadingSpinner {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])));
var templateObject_1;
