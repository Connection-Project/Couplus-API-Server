import { Injectable } from '@nestjs/common';
import { Board } from 'src/models/Board.entity';
import { BoardComment } from 'src/models/BoardComment.entity';
import { User } from 'src/models/User.entity';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { formatDateParam } from 'src/utils/date';
import { CreateCommentReqDto } from './dto/req/create.req.dto';

@Injectable()
export class CommentService {
    constructor(
        private readonly boardCommentRepository: BoardCommentRepository,
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
                boardComment.board;
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
                let mine = false;
                if (userId && userId === boardComment[i].user.id) mine = true;
                items[i] = {
                    commentId: boardComment[i].id,
                    writer: boardComment[i].user.nickName,
                    content: boardComment[i].content,
                    mine: mine,
                    createdAt: formatDateParam(boardComment[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1511, data: null } };
        }
    }

    // async update(userId:number, );
}
