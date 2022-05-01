"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlides = void 0;
const fs_1 = __importDefault(require("fs"));
const parseMD = require('parse-md').default;
const useSlides = ({ filePath }) => {
    const mdFile = filePath && fs_1.default.readFileSync(filePath, 'utf-8');
    const { metadata, content } = parseMD(mdFile);
    const slides = content === null || content === void 0 ? void 0 : content.split('---');
    return {
        metadata,
        slides
    };
};
exports.useSlides = useSlides;
