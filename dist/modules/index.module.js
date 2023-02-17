"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const pet_module_1 = require("./pet/pet.module");
const board_module_1 = require("./board/board.module");
const boardComment_module_1 = require("./boardComment/boardComment.module");
const boardCommentReply_module_1 = require("./boardCommentReply/boardCommentReply.module");
const feed_module_1 = require("./feed/feed.module");
const freind_module_1 = require("./freind/freind.module");
const feedComment_module_1 = require("./feedComment/feedComment.module");
let IndexModule = class IndexModule {
};
IndexModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            pet_module_1.PetModule,
            board_module_1.BoardModule,
            boardComment_module_1.CommentModule,
            boardCommentReply_module_1.BoardCommentReplyModule,
            feed_module_1.FeedModule,
            freind_module_1.FriendModule,
            feedComment_module_1.FeedCommentModule,
        ],
    })
], IndexModule);
exports.IndexModule = IndexModule;
//# sourceMappingURL=index.module.js.map