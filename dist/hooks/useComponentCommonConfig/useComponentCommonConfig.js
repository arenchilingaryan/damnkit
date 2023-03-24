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
exports.useComponentCommonConfig = void 0;
var useStyles_1 = require("hooks/useStyles/useStyles");
var react_1 = require("react");
var dictionary_1 = require("config/baseStyles/dictionary");
function useComponentCommonConfig(props, type) {
    var _a = (0, useStyles_1.useStyles)(), getMixedStyles = _a.getMixedStyles, getColorVariant = _a.getColorVariant, getSpaces = _a.getSpaces, getDisabledStyles = _a.getDisabledStyles;
    var disabledStyles = props.disabled && (getDisabledStyles(props.disableStyles) || dictionary_1.stylesDictionary[type].disabledStyles);
    var styles = (0, react_1.useMemo)(function () { return (__assign(__assign(__assign(__assign(__assign({}, props.style), getMixedStyles(props.mixName)), getSpaces('padding', props.padding)), getSpaces('margin', props.margin)), disabledStyles)); }, []);
    if (props.variant) {
        styles.backgroundColor = getColorVariant(props.variant);
    }
    return { styles: styles };
}
exports.useComponentCommonConfig = useComponentCommonConfig;
