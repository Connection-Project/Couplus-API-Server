import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './User.entity';

export enum ToDoStatus {
    todo = 'todo', // ! 할 일
    done = 'done', // ! 완료
}

@Entity({ name: 'ToDoList' })
export class ToDoList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({ type: 'enum', enum: ToDoStatus, default: ToDoStatus.todo })
    status: ToDoStatus;

    @Column({ nullable: false })
    date: string;

    @ManyToOne(() => User, (user) => user.todo, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<ToDoList>) {
        Object.assign(this, partial);
    }
}
