"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ButtonContent = exports._Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports._Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: #0052d9;\n  color: #ffffff;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 4px;\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  position: relative;\n  background: #0052d9;\n  color: #ffffff;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 4px;\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
exports._ButtonContent = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: ", ";\n"], ["\n  opacity: ", ";\n"])), function (props) { return (props.isHide ? 0 : 1); });
var templateObject_1, templateObject_2;
