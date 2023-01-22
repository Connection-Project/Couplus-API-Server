"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearDiff = exports.getDateDiff = exports.generateRandomCode = exports.currentDateFormat = exports.formatDate = void 0;
const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
};
exports.formatDate = formatDate;
const currentDateFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
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
const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};
exports.getDateDiff = getDateDiff;
const getYearDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
};
exports.getYearDiff = getYearDiff;
//# sourceMappingURL=date.js.map