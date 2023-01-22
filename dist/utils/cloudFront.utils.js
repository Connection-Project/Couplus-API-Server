"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudfrontPath = void 0;
const cloudfrontPath = (key) => {
    const path = process.env.AWS_CLOUDFRONT_END_POINT + key;
    return path;
};
exports.cloudfrontPath = cloudfrontPath;
//# sourceMappingURL=cloudFront.utils.js.map