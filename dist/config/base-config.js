"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = {
    primary: '#366ad5',
    white: '#ffffff',
    secondary: '#199',
};
var space = {
    l: 24,
    m: {
        size: 2,
        metricSystem: 'em',
    },
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
var breakpoints = {
    type: 'min-width',
    sizes: {
        l: 1440,
        m: 1024,
        s: 448,
        xs: 0,
    },
};
var defaultMetricSystem = 'px';
var baseConfig = {
    space: space,
    colors: colors,
    defaultMetricSystem: defaultMetricSystem,
    mixes: mixes,
    breakpoints: breakpoints,
};
exports.default = baseConfig;
