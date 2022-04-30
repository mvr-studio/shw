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
const fs_1 = __importDefault(require("fs"));
const ink_markdown_1 = __importDefault(require("ink-markdown"));
const ink_tab_1 = require("ink-tab");
const ink_1 = require("ink");
const App = ({ file }) => {
    const { exit } = (0, ink_1.useApp)();
    const [size, setSize] = (0, react_1.useState)({
        columns: process.stdout.columns,
        rows: process.stdout.rows,
    });
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(0);
    const mdFile = file && fs_1.default.readFileSync(file, "utf-8");
    const slides = mdFile === null || mdFile === void 0 ? void 0 : mdFile.split("---");
    const handleTabChange = (name) => {
        setCurrentSlide(parseInt(name));
    };
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setSize({
                columns: process.stdout.columns,
                rows: process.stdout.rows,
            });
        };
        process.stdout.on("resize", onResize);
        process.stdout.write("\x1b[?1049h");
        return () => {
            process.stdout.off("resize", onResize);
            process.stdout.write("\x1b[?1049l");
        };
    }, []);
    (0, ink_1.useInput)((input, key) => {
        if (input === "q" || key.escape) {
            exit();
        }
    });
    return (react_1.default.createElement(ink_1.Box, { width: size.columns, height: size.rows, display: "flex", justifyContent: "center", alignItems: "center" },
        react_1.default.createElement(ink_1.Box, { display: "none" },
            react_1.default.createElement(ink_tab_1.Tabs, { onChange: handleTabChange }, (slides === null || slides === void 0 ? void 0 : slides.map((_, i) => (
            // @ts-ignore
            react_1.default.createElement(ink_tab_1.Tab, { key: i, name: String(i) }, i)))) || [])),
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_markdown_1.default, null, slides === null || slides === void 0 ? void 0 : slides[currentSlide]))));
};
module.exports = App;
exports.default = App;
