import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { MyPet } from './MyPets.entity';

@Entity({ name: 'Users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    name: string;

    @Column()
    nickName: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    accountId: string;

    @Column()
    registType: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => MyPet, (pet) => pet.user, { cascade: true })
    pet: MyPet[];

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}
