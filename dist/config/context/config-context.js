"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigContext = void 0;
var react_1 = require("react");
var base_config_1 = __importDefault(require("../base-config"));
exports.ConfigContext = (0, react_1.createContext)(base_config_1.default);
