"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenDigestPwd = void 0;
const crypto_1 = require("crypto");
const GenDigestPwd = (password) => {
    let digestPwd = (0, crypto_1.createHash)('sha512').update(password).digest('hex');
    digestPwd = (0, crypto_1.createHash)('sha512').update(digestPwd).digest('hex');
    digestPwd = (0, crypto_1.createHash)('sha512').update(digestPwd).digest('hex');
    return digestPwd;
};
exports.GenDigestPwd = GenDigestPwd;
//# sourceMappingURL=crypto.js.map