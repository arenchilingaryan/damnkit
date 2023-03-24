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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var merge_config_1 = require("../merge-config");
var base_config_1 = __importDefault(require("../base-config"));
var config_context_1 = require("../context/config-context");
function DamnProvider(_a) {
    var settings = _a.config, children = _a.children;
    var providerValue = (0, react_1.useMemo)(function () {
        return settings ? (0, merge_config_1.mergeConfig)(settings) : base_config_1.default;
    }, [settings, settings, base_config_1.default]);
    return (0, jsx_runtime_1.jsx)(config_context_1.ConfigContext.Provider, __assign({ value: providerValue }, { children: children }));
}
exports.default = DamnProvider;
