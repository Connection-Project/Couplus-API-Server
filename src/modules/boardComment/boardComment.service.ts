import { Injectable } from '@nestjs/common';
import { Board } from 'src/models/Board.entity';
import { BoardComment } from 'src/models/BoardComment.entity';
import { User } from 'src/models/User.entity';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { BoardCommentReplyRepository } from 'src/repositories/boardCommentReply.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { formatDateParam } from 'src/utils/date';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReqDto } from './dto/req/update.req.dto';

@Injectable()
export class CommentService {
    constructor(
        private readonly boardCommentRepository: BoardCommentRepository,
        private readonly boardCommentReplyRepository: BoardCommentReplyRepository,
        private readonly boardRepository: BoardRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreateCommentReqDto): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const { content, boardId } = body;
            const query = this.boardRepository.getQuery();
            const boardWhere = [
                {
                    key: 'b.id = :boardId',
                    value: {
                        boardId: boardId,
                    },
                },
            ];
            const board: Board = await this.boardRepository.findOne(query, boardWhere);
            if (!board) {
                status = 201;
                resultCode = 1502;
            } else {
                const user: User = await this.userRepository.findByKey('id', userId);
                const boardComment: BoardComment = this.boardCommentRepository.create();
                boardComment.board = board;
                boardComment.user = user;
                boardComment.content = content;
                await this.boardCommentRepository.save(boardComment);

                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1501, data: null } };
        }
    }

    async getBoardComments(userId: number, boardId: number): Promise<any> {
        try {
            const boardComment: BoardComment[] = await this.boardCommentRepository.findManyByBoardId(
                boardId,
            );
            const items = [];
            for (let i = 0; i < boardComment.length; i++) {
                let commentMine = false;
                if (userId && userId === boardComment[i].user.id) commentMine = true;

                const reply = [];
                // ! 대댓글 리스트
                for (let j = 0; j < boardComment[i].reply.length; j++) {
                    let replyMine = false;
                    if (userId && userId === boardComment[i].reply[j].user.id) replyMine = true;

                    reply[j] = {
                        replyId: boardComment[i].reply[j].id,
                        writer: boardComment[i].reply[j].user.nickName,
                        content: boardComment[i].reply[j].content,
                        mine: replyMine,
                        createdAt: formatDateParam(boardComment[i].reply[j].createdAt),
                    };
                }
                items[i] = {
                    commentId: boardComment[i].id,
                    writer: boardComment[i].user.nickName,
                    content: boardComment[i].content,
                    mine: commentMine,
                    reply: reply,
                    createdAt: formatDateParam(boardComment[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1511, data: null } };
        }
    }

    async update(userId: number, commentId: number, body: UpdateBoardCommentReqDto): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const { content } = body;
            const boardComment: BoardComment = await this.boardCommentRepository.findOneByIdAndUserId(
                commentId,
                userId,
            );
            if (boardComment) {
                console.log(body);
                // ! 내용이 공백이 아니고 내용이 DB의 값과 똑같지 않으면 수정
                if (content !== '' && content !== boardComment.content) {
                    boardComment.content = content;
                    await this.boardCommentRepository.save(boardComment);
                }
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1522;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1521, data: null } };
        }
    }

    async delete(userId: number, commentId: number): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const boardComment: BoardComment = await this.boardCommentRepository.findOneByIdAndUserId(
                commentId,
                userId,
            );
            if (boardComment) {
                await this.boardCommentRepository.delete(userId, commentId);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1532;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1531, data: null } };
        }
    }
}
