import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { ToDoList } from './TodoList.entity';
import { User } from './User.entity';

@Entity({ name: 'Calendar' })
export class Calendar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    date: string;

    @ManyToOne(() => User, (user) => user.calendar, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => ToDoList, (todo) => todo.calendar, { cascade: true })
    todo: ToDoList[];

    constructor(partial: Partial<Calendar>) {
        Object.assign(this, partial);
    }
}
