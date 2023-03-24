"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useStyles_1 = require("hooks/useStyles/useStyles");
var Box = function (props) {
    var className = props.className, _a = props.component, component = _a === void 0 ? 'div' : _a, children = props.children, id = props.id, testId = props.testId, rest = __rest(props, ["className", "component", "children", "id", "testId"]);
    var getBoxStyles = (0, useStyles_1.useStyles)().getBoxStyles;
    if (typeof children === 'function') {
        return children(className || '');
    }
    var element = react_1.default.createElement(component, { className: className || '', id: id, 'data-testid': testId }, children);
    var styles = getBoxStyles(props);
    var renderComponent = function (Element) {
        return (0, styled_components_1.default)(function (_a) {
            var className = _a.className;
            return (0, jsx_runtime_1.jsx)(Element.type, __assign({}, Element.props, { className: className }));
        })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), styles);
    };
    var Component = renderComponent(element);
    return (0, jsx_runtime_1.jsx)(Component, __assign({}, rest));
};
exports.default = Box;
var templateObject_1;
