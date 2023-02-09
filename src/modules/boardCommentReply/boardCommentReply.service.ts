import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { Injectable } from '@nestjs/common';
import { BoardCommentReplyRepository } from 'src/repositories/boardCommentReply.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateBoardCommentReplyReqDto } from './dto/req/create.req.dto';
import { BoardComment } from 'src/models/BoardComment.entity';
import { BoardCommentReply } from 'src/models/BoardCommentReply.entity';
import { User } from 'src/models/User.entity';
import { formatDateParam } from 'src/utils/date';
import { UpdateBoardCommentReplyDto } from './dto/req/update.req.dto';

@Injectable()
export class BoardcommentreplyService {
    constructor(
        private readonly boardCommentRepository: BoardCommentRepository,
        private readonly boardCommentReplyRepository: BoardCommentReplyRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreateBoardCommentReplyReqDto): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const { content, commentId } = body;
            const boardComment: BoardComment = await this.boardCommentRepository.findOneById(commentId);
            if (boardComment) {
                const user: User = await this.userRepository.findByKey('id', userId);
                const boardCommentReply: BoardCommentReply = this.boardCommentReplyRepository.create();
                boardCommentReply.comment = boardComment;
                boardCommentReply.user = user;
                boardCommentReply.content = content;
                await this.boardCommentReplyRepository.save(boardCommentReply);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1602;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1601, data: null } };
        }
    }

    async getBoardCommentReplys(userId: number, commentId: number): Promise<any> {
        try {
            const boardCommentReply: BoardCommentReply[] =
                await this.boardCommentReplyRepository.findManyByBoardId(commentId);
            const items = [];
            for (let i = 0; i < boardCommentReply.length; i++) {
                let mine = false;
                if (userId && userId === boardCommentReply[i].user.id) mine = true;
                items[i] = {
                    replyId: boardCommentReply[i].id,
                    writer: boardCommentReply[i].user.nickName,
                    content: boardCommentReply[i].content,
                    mine: mine,
                    createdAt: formatDateParam(boardCommentReply[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1611, data: null } };
        }
    }

    async update(userId: number, replyId: number, body: UpdateBoardCommentReplyDto): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const { content } = body;
            const boardCommentReply: BoardCommentReply =
                await this.boardCommentReplyRepository.findOneByIdAndUserId(replyId, userId);
            if (boardCommentReply) {
                // ! 내용이 공백이 아니고 내용이 DB의 값과 똑같지 않으면 수정
                if (content !== '' && content !== boardCommentReply.content) {
                    boardCommentReply.content;
                    await this.boardCommentReplyRepository.save(boardCommentReply);
                }
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1622;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1621, data: null } };
        }
    }

    async delete(userId: number, replyId: number): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const boardCommentReply: BoardCommentReply =
                await this.boardCommentReplyRepository.findOneByIdAndUserId(replyId, userId);
            if (boardCommentReply) {
                await this.boardCommentReplyRepository.delete(userId, replyId);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1632;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1631, data: null } };
        }
    }
}
