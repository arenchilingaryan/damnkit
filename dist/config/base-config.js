"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = {
    primary: '#366ad5',
    white: '#ffffff',
    secondary: '#199',
};
var space = {
    l: 24,
};
var mixes = {
    primary: {
        color: 'white',
        backgroundColor: 'primary',
    },
    secondary: {
        color: 'white',
        backgroundColor: '',
    },
};
var defaultMetricSystem = 'px';
var baseConfig = {
    space: space,
    colors: colors,
    defaultMetricSystem: defaultMetricSystem,
    mixes: mixes,
};
exports.default = baseConfig;
