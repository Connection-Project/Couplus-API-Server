import { User } from 'src/models/User.entity';

export class CreateBoardTypes {
    user: User;
    type: string;
    title: string;
    content: string;
}
