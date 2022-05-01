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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const components_1 = require("../../components");
const Layout = ({ children, metadata, currentSlide, totalSlides }) => {
    const [size, setSize] = (0, react_1.useState)({
        columns: process.stdout.columns,
        rows: process.stdout.rows
    });
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setSize({
                columns: process.stdout.columns,
                rows: process.stdout.rows
            });
        };
        process.stdout.on('resize', onResize);
        process.stdout.write('\x1b[?1049h');
        return () => {
            process.stdout.off('resize', onResize);
            process.stdout.write('\x1b[?1049l');
        };
    }, []);
    return (react_1.default.createElement(ink_1.Box, { width: size.columns, height: size.rows, display: "flex", flexDirection: "column" },
        react_1.default.createElement(components_1.TopBar, { metadata: metadata }),
        react_1.default.createElement(ink_1.Box, { display: "flex", flexBasis: 1, flexShrink: 1, flexGrow: 1, justifyContent: "center", alignItems: "center" }, children),
        react_1.default.createElement(components_1.BottomBar, { currentSlide: currentSlide, totalSlides: totalSlides })));
};
exports.default = Layout;
