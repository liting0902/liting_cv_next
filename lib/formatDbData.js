"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (jsonData) => {
  let dataObj = {};
  if (!jsonData) return;
  Object.entries(jsonData).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      let obj = value;
      Object.entries(obj).forEach((content) => {
        value = content[1];
      });
    }
    dataObj[key] = value;
  });
  return dataObj;
};
