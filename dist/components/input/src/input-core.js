"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Input = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports._Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  background: #ffffff;\n  color: #000000;\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dcdcdc;\n  border-radius: 3px;\n  &::placeholder {\n    color: rgba(0, 0, 0, 0.4);\n  }\n  &:active {\n    border-color: #646464;\n  }\n  &:focus {\n    border-color: #646464;\n  }\n  &:focus-visible {\n    outline: none;\n    border-color: #646464;\n  }\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  background: #ffffff;\n  color: #000000;\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dcdcdc;\n  border-radius: 3px;\n  &::placeholder {\n    color: rgba(0, 0, 0, 0.4);\n  }\n  &:active {\n    border-color: #646464;\n  }\n  &:focus {\n    border-color: #646464;\n  }\n  &:focus-visible {\n    outline: none;\n    border-color: #646464;\n  }\n"])));
var templateObject_1;
