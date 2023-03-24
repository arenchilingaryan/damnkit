"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_1 = require("react");
var config_context_1 = require("config/context/config-context");
var styled_components_1 = require("styled-components");
var spaceDirections = ['top', 'right', 'bottom', 'left'];
function useStyles() {
    var _a = (0, react_1.useContext)(config_context_1.ConfigContext), space = _a.space, colors = _a.colors, mixes = _a.mixes, defaultMetricSystem = _a.defaultMetricSystem, breakpoints = _a.breakpoints;
    function getMixedStyles(name) {
        var result = {};
        if (!mixes || !name || !mixes[name]) {
            return result;
        }
        var currentMix = mixes[name];
        for (var property in currentMix) {
            var value = currentMix[property];
            if (!value)
                continue;
            if (space && space[value] && defaultMetricSystem) {
                if (typeof space[value] === 'number') {
                    result[property] = space[value] + defaultMetricSystem;
                }
                else {
                    var _a = space[value], size = _a.size, metricSystem = _a.metricSystem;
                    result[property] = size.toString() + metricSystem;
                }
                continue;
            }
            if (colors && colors[value]) {
                result[property] = colors[value];
                continue;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            result[property] = currentMix[property];
        }
        return result;
    }
    function getColorVariant(name) {
        return colors ? colors[name] || '' : '';
    }
    function getCorrectSpaceValue(sizeName) {
        if (!space || !defaultMetricSystem)
            return '';
        if (space[sizeName]) {
            var currentSize = space[sizeName];
            if (typeof currentSize === 'number') {
                return currentSize + defaultMetricSystem;
            }
            var _a = currentSize, size = _a.size, metricSystem = _a.metricSystem;
            return size + metricSystem;
        }
    }
    function getSpaces(type, params) {
        var result = {};
        if (!space || !params)
            return result;
        var bottom = params.bottom, left = params.left, right = params.right, top = params.top;
        if (bottom)
            result["".concat(type, "Bottom")] = getCorrectSpaceValue(bottom);
        if (left)
            result["".concat(type, "Left")] = getCorrectSpaceValue(left);
        if (right)
            result["".concat(type, "Right")] = getCorrectSpaceValue(right);
        if (top)
            result["".concat(type, "Top")] = getCorrectSpaceValue(top);
        return result;
    }
    function valueAsCss(valueIsVariable, value) {
        if (!valueIsVariable) {
            return value + (defaultMetricSystem || 'px');
        }
        if (typeof value === 'object') {
            return value.size + value.metricSystem;
        }
    }
    var getStylesFromObject = function (spaceType, element, type, direction) {
        var additionalStyles = [];
        for (var j in element) {
            var elementByKey = element[j];
            var valueIsVariable = !!space && !!space[elementByKey];
            var value = valueIsVariable ? space[elementByKey] : elementByKey;
            var cssValue = valueAsCss(valueIsVariable, value);
            if (breakpoints && breakpoints.sizes) {
                additionalStyles.push((0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          @media (", ": ", "px) {\n            ", ": ", "\n          }\n        "], ["\n          @media (", ": ", "px) {\n            ", ": ", "\n          }\n        "])), type, breakpoints.sizes[j], direction, cssValue));
            }
        }
        return additionalStyles;
    };
    function getBreakpointsStyles(element, type, dir) {
        var additionalStyles = [];
        if (Array.isArray(element)) {
            for (var i = 0; i < element.length; i++) {
                var item = element[i];
                var direction = spaceDirections[i];
                if (typeof item === 'object') {
                    var objStylesArr = getStylesFromObject('margin', item, type, direction);
                    additionalStyles.push.apply(additionalStyles, objStylesArr);
                }
            }
        }
        if (typeof element === 'object' && !Array.isArray(element)) {
            var objStylesArr = getStylesFromObject('margin', element, type, dir);
            additionalStyles.push.apply(additionalStyles, objStylesArr);
        }
        if (typeof element !== 'object' && !Array.isArray(element)) {
            if (typeof element === 'string') {
                var value = space && space[element];
                if (value) {
                    if (typeof value === 'object') {
                        additionalStyles.push((0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n              ", ": ", "\n            "], ["\n              ", ": ", "\n            "])), dir, value.size + value.metricSystem + ';'));
                    }
                    else {
                        additionalStyles.push((0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n              ", ": ", "\n            "], ["\n              ", ": ", "\n            "])), dir, value + (defaultMetricSystem || 'px') + ';'));
                    }
                }
                else {
                    additionalStyles.push((0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            ", ": ", "\n          "], ["\n            ", ": ", "\n          "])), dir, element + ';'));
                }
            }
            else {
                additionalStyles.push((0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          ", ": ", "\n        "], ["\n          ", ": ", "\n        "])), dir, element + (defaultMetricSystem || 'px') + ';'));
            }
        }
        return additionalStyles;
    }
    function getDirectionOfBoxProps(dir) {
        var obj = {
            t: 'top',
            r: 'right',
            b: 'bottom',
            l: 'left',
        };
        if (dir.length === 1) {
            if (dir === 'p')
                return 'padding';
            else
                return 'margin';
        }
        var prefix = dir[0] === 'p' ? 'padding' : 'margin';
        var postfix = obj[dir[1]];
        return prefix + '-' + postfix;
    }
    function getBoxStyles(props) {
        var mb = props.mb, mr = props.mr, mt = props.mt, p = props.p, pb = props.pb, pl = props.pl, pr = props.pr, pt = props.pt, ml = props.ml, m = props.m;
        var gaps = { mb: mb, mr: mr, mt: mt, ml: ml, m: m, p: p, pb: pb, pl: pl, pr: pr, pt: pt };
        var mediaVariant = props.mediaVariant || 'min-width';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var existGapsProps = {};
        var additionalStyles = [];
        for (var key in gaps) {
            var element = gaps[key];
            if (element !== undefined)
                existGapsProps[key] = element;
        }
        for (var key in existGapsProps) {
            var direction = getDirectionOfBoxProps(key);
            var styleArr = getBreakpointsStyles(existGapsProps[key], mediaVariant, direction);
            additionalStyles.push.apply(additionalStyles, styleArr);
        }
        return additionalStyles;
    }
    function getDisabledStyles(disabledStylesProps) {
        if (!disabledStylesProps) {
            if (mixes) {
                var styles = mixes['disabledStyle'];
                if (styles)
                    return styles;
            }
            return false;
        }
        if (typeof disabledStylesProps === 'string') {
            return getMixedStyles(disabledStylesProps);
        }
        return disabledStylesProps;
    }
    return {
        getMixedStyles: getMixedStyles,
        getColorVariant: getColorVariant,
        getSpaces: getSpaces,
        getBreakpointsStyles: getBreakpointsStyles,
        getStylesFromObject: getStylesFromObject,
        getBoxStyles: getBoxStyles,
        getDisabledStyles: getDisabledStyles,
    };
}
exports.useStyles = useStyles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
