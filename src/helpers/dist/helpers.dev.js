"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncate = truncate;

// Text truncate helper
function truncate(text) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
//# sourceMappingURL=helpers.dev.js.map
