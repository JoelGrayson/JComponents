"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Item = void 0;
var react_1 = require("react");
var css_1 = require("@emotion/css");
// documentation: onChange, title
function Dropdown(_a, ref) {
    var title = _a.title, children = _a.children, openTitleWidth = _a.openTitleWidth, closedTitleWidth = _a.closedTitleWidth, className = _a.className, onClick = _a.onClick, onChange = _a.onChange, absoluteWhenOpen = _a.absoluteWhenOpen, width = _a.width, props = __rest(_a, ["title", "children", "openTitleWidth", "closedTitleWidth", "className", "onClick", "onChange", "absoluteWhenOpen", "width"]);
    // <Clicking outside closes dropdown
    var _b = (0, react_1.useState)(false), open = _b[0], _setOpen = _b[1];
    function closeDropdown() {
        setOpen(false);
    }
    function closeDropdownOnEscape(e) {
        if (e.key === 'Escape')
            closeDropdown();
    }
    function setOpen(newValue) {
        _setOpen(newValue);
        if (newValue) {
            document.addEventListener('click', closeDropdown); //close dropdown when clicking outside
            document.addEventListener('keydown', closeDropdownOnEscape);
        }
        if (!newValue) {
            document.removeEventListener('click', closeDropdown);
            document.removeEventListener('click', closeDropdownOnEscape);
        }
    }
    // >
    return react_1["default"].createElement("div", __assign({ onClick: function (e) {
            e.stopPropagation();
            setOpen(!open);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }, style: {
            position: 'relative',
            userSelect: 'none',
            zIndex: 1,
            minHeight: '40px'
        } }, props),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { className: (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                ", "\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                width: ", ";\n                cursor: pointer;\n                position: relative;\n                background-color: #ffd472;\n                &:hover {\n                    background-color: #f0c35b;\n                }\n                &:active {\n                    background-color: #e0b142;\n                }\n            "], ["\n                ", "\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                width: ", ";\n                cursor: pointer;\n                position: relative;\n                background-color: #ffd472;\n                &:hover {\n                    background-color: #f0c35b;\n                }\n                &:active {\n                    background-color: #e0b142;\n                }\n            "])), absoluteWhenOpen ? 'position: absolute !important;' : '', openTitleWidth && open ? openTitleWidth : closedTitleWidth && !open ? closedTitleWidth : 'auto') }, title),
            react_1["default"].createElement("svg", { viewBox: '0 0 10 10', width: '10px', height: '10px' },
                " ",
                react_1["default"].createElement("path", { d: open ? 'M 0 10 L 5 0 L 10 10' : 'M 0 0 L 5 10 L 10 0', fill: 'none', stroke: 'black' }))),
        open && react_1["default"].createElement("div", { className: (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            cursor: pointer;\n            position: relative;\n            background-color: #ffd472;\n            &:hover {\n                background-color: #f0c35b;\n            }\n            &:active {\n                background-color: #e0b142;\n            } \n        "], ["\n            cursor: pointer;\n            position: relative;\n            background-color: #ffd472;\n            &:hover {\n                background-color: #f0c35b;\n            }\n            &:active {\n                background-color: #e0b142;\n            } \n        "]))) }, children));
}
exports["default"] = Dropdown;
function DropdownItem(_a, ref) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return react_1["default"].createElement("div", __assign({ className: "".concat((0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: 100%;\n        border: 1px solid black;\n        padding: .3rem .8rem;\n        display: flex;\n        gap: 1ch;\n        background-color: #fefefe;\n        &:hover {\n            background-color: #eee;\n        }\n        &:active {\n            background-color: #ddd;\n        }\n    "], ["\n        width: 100%;\n        border: 1px solid black;\n        padding: .3rem .8rem;\n        display: flex;\n        gap: 1ch;\n        background-color: #fefefe;\n        &:hover {\n            background-color: #eee;\n        }\n        &:active {\n            background-color: #ddd;\n        }\n    "]))), " ").concat(className) }, props), children);
}
// exported as <Dropdown.Item> or <Item>
Dropdown.Item = react_1["default"].forwardRef(DropdownItem);
exports.Item = react_1["default"].forwardRef(DropdownItem);
var templateObject_1, templateObject_2, templateObject_3;
