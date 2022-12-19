"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const operators_1 = require("rxjs/operators");
const date_1 = require("../utils/date");
const logStream = (0, fs_1.createWriteStream)('logs/api.log', { flags: 'a' });
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const { method, url } = context.getArgByIndex(0);
        common_1.Logger.log(`[${(0, date_1.formatDate)()}] Request to ${method} ${url}`);
        logStream.write(`[${(0, date_1.formatDate)()}] Request to ${method} ${url}\n`);
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => logStream.write(`[${(0, date_1.formatDate)()}] Response from ${method} ${url} \n`)), (0, operators_1.catchError)(async (err) => logStream.write(`[${(0, date_1.formatDate)()}] Error from ${method} ${url} : ${err} \n`)));
    }
};
LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map