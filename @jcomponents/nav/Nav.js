"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("@jcomponents/button");
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.render = function () {
        var _a;
        var gap = (_a = this.props.gap) !== null && _a !== void 0 ? _a : 4;
        return react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", { style: {
                    display: 'flex',
                    padding: 0,
                    gap: gap
                } }, this.props.children));
    };
    Nav.Item = function (_a) {
        var children = _a.children, _b = _a.href, href = _b === void 0 ? '#' : _b, target = _a.target, props = __rest(_a, ["children", "href", "target"]);
        var _c = (0, react_1.useState)('jnone'), btnColor = _c[0], setBtnColor = _c[1]; //if is current page, set to jyellow. Has to be 'jnone' so it is not null
        (0, react_1.useEffect)(function () {
            if (href === window.location.pathname)
                setBtnColor('jyellow');
        }, []);
        return react_1.default.createElement("li", { style: { padding: 0, listStyleType: 'none' } },
            react_1.default.createElement("a", __assign({ className: 'unstyled', href: href, target: target }, props),
                react_1.default.createElement(button_1.default, { color: btnColor }, children)));
    };
    return Nav;
}(react_1.default.Component));
exports.default = Nav;
