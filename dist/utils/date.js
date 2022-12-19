"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomCode = exports.currentDateFormat = exports.formatDate = void 0;
const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
};
exports.formatDate = formatDate;
const currentDateFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return year + month + day + hours + minutes + seconds;
};
exports.currentDateFormat = currentDateFormat;
const generateRandomCode = (digit) => {
    const max = 10 ** digit;
    const min = 10 ** (digit - 1);
    return Math.floor(Math.random() * (max - min) + min);
};
exports.generateRandomCode = generateRandomCode;
//# sourceMappingURL=date.js.map