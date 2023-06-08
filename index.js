'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');
function _interopDefaultLegacy$1(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}
var React__default = /*#__PURE__*/_interopDefaultLegacy$1(React);
function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$1 = ".button-c {\n    display: flex;\n    width: auto;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    border: 1px solid #e5e5e5;\n    border-radius: 8px;\n    background-color: #80bc00;\n    font-family: 'Open Sans', sans-serif;\n    color: white;\n    cursor: pointer;\n    padding: 8px;\n}";
styleInject(css_248z$1);
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
    children = _ref.children,
    styles = _ref.styles,
    className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    style: styles,
    onClick: onClick,
    className: "button-c ".concat(className)
  }, children);
};
var css_248z = ".container-modal {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 35px 30px 45px 30px;\n    z-index: 1000;\n    max-width: 90vw;\n    min-width: 300px;\n    border-radius: 5px;\n    font-family: 'Open Sans', sans-serif;\n    animation: modalTransform 0.5s ease-in-out;\n\n    @keyframes modalTransform {\n        0% {\n            left: 50%;\n            top: 0;\n        }\n\n        100% {\n            left: 50%;\n            top: 50%;\n        }\n    }\n}\n\n.container-button-close {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    margin-bottom: 30px;\n}\n\n.title-modal {\n    color: gray;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.button-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: 5px;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    color: black;\n    font-weight: bold;\n    text-decoration: none;\n    text-transform: none;\n    margin-left: 2rem;\n    border: 1px solid rgb(237, 237, 237);\n}\n\n.container-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .7);\n    z-index: 1000;\n}";
styleInject(css_248z);
var Modal = function Modal(_ref) {
  var children = _ref.children,
    title = _ref.title,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$close = _ref.close,
    close = _ref$close === void 0 ? function () {} : _ref$close,
    _ref$hasButtonClose = _ref.hasButtonClose,
    hasButtonClose = _ref$hasButtonClose === void 0 ? true : _ref$hasButtonClose;
  if (!open) return null;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container-overlay"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container-modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container-button-close"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "title-modal"
  }, title), hasButtonClose && /*#__PURE__*/React__default["default"].createElement("button", {
    className: "button-close",
    onClick: close
  }, "x")), children));
};
exports.Button = Button;
exports.Modal = Modal;
