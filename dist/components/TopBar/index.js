"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const TopBar = ({ metadata }) => {
    const authorEmail = (metadata['email'] && `(${metadata['email']})`) || '';
    const authorText = `${metadata['author'] || ''} ${authorEmail}`;
    return (react_1.default.createElement(ink_1.Box, { display: "flex", justifyContent: "space-between" },
        react_1.default.createElement(ink_1.Text, null, metadata['title']),
        react_1.default.createElement(ink_1.Text, null, authorText)));
};
exports.default = TopBar;
