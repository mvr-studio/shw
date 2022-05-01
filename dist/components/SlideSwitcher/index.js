"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_tab_1 = require("ink-tab");
const SlideSwitcher = ({ slides, handleTabChange }) => {
    return (react_1.default.createElement(ink_1.Box, { display: "none" },
        react_1.default.createElement(ink_tab_1.Tabs, { onChange: handleTabChange }, (slides === null || slides === void 0 ? void 0 : slides.map((_, i) => (
        // @ts-ignore
        react_1.default.createElement(ink_tab_1.Tab, { key: i, name: String(i) }, i)))) || [])));
};
exports.default = SlideSwitcher;
