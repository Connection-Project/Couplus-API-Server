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
exports.FeedCommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const feedComment_service_1 = require("./feedComment.service");
let FeedCommentController = class FeedCommentController {
    constructor(feedCommentService) {
        this.feedCommentService = feedCommentService;
    }
};
FeedCommentController = __decorate([
    (0, swagger_1.ApiTags)('피드 댓글'),
    (0, common_1.Controller)('feed/comment'),
    __metadata("design:paramtypes", [feedComment_service_1.FeedCommentService])
], FeedCommentController);
exports.FeedCommentController = FeedCommentController;
//# sourceMappingURL=feedComment.controller.js.map