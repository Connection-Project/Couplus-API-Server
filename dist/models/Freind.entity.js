"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Freind = exports.FreindStatus = void 0;
const typeorm_1 = require("typeorm");
var FreindStatus;
(function (FreindStatus) {
    FreindStatus["request"] = "request";
    FreindStatus["confirmed"] = "confirmed";
})(FreindStatus = exports.FreindStatus || (exports.FreindStatus = {}));
let Freind = class Freind {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Freind.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Freind.prototype, "freindId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: FreindStatus, default: FreindStatus.request }),
    __metadata("design:type", String)
], Freind.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Freind.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Freind.prototype, "updatedAt", void 0);
Freind = __decorate([
    (0, typeorm_1.Entity)({ name: 'Freinds' }),
    __metadata("design:paramtypes", [Object])
], Freind);
exports.Freind = Freind;
//# sourceMappingURL=Freind.entity.js.map