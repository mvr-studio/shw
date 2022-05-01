"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_markdown_1 = __importDefault(require("ink-markdown"));
const ink_1 = require("ink");
const components_1 = require("./components");
const hooks_1 = require("./hooks");
const App = ({ filePath }) => {
    const { exit } = (0, ink_1.useApp)();
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(0);
    const { metadata, slides } = (0, hooks_1.useSlides)({ filePath });
    const handleTabChange = (name) => {
        setCurrentSlide(parseInt(name));
    };
    (0, ink_1.useInput)((input, key) => {
        if (input === 'q' || key.escape) {
            exit();
        }
    });
    return (react_1.default.createElement(components_1.Layout, { currentSlide: currentSlide, totalSlides: (slides === null || slides === void 0 ? void 0 : slides.length) || 0, metadata: metadata },
        react_1.default.createElement(components_1.SlideSwitcher, { slides: slides, handleTabChange: handleTabChange }),
        react_1.default.createElement(ink_markdown_1.default, null, slides === null || slides === void 0 ? void 0 : slides[currentSlide])));
};
module.exports = App;
exports.default = App;
