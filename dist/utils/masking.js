"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskingName = exports.maskingEmail = exports.checkNull = void 0;
const checkNull = (str) => {
    if (typeof str === undefined || str === null || str === "")
        return true;
    else
        return false;
};
exports.checkNull = checkNull;
const maskingEmail = (email) => {
    let emailStr = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    let strLength = 0;
    let result = null;
    if ((0, exports.checkNull)(email) || (0, exports.checkNull)(emailStr)) {
        result = email;
    }
    else {
        strLength = emailStr.toString().split('@')[0].length - 3;
        result = email.toString().replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*').replace(/.{6}$/, "******");
    }
    return result;
};
exports.maskingEmail = maskingEmail;
const maskingName = (name) => {
    let originStr = name;
    let maskingStr = null;
    let strLength = 0;
    if ((0, exports.checkNull)(originStr) == true) {
        return originStr;
    }
    strLength = originStr.length;
    if (strLength < 3) {
        maskingStr = originStr.replace(/(?<=.{1})./gi, "*");
    }
    else {
        maskingStr = originStr.replace(/(?<=.{2})./gi, "*");
    }
    return maskingStr;
};
exports.maskingName = maskingName;
//# sourceMappingURL=masking.js.map