import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum FreindStatus {
    request = 'request', // ! 요청 중
    confirmed = 'confirmed', // ! 친구
}

@Entity({ name: 'Freinds' })
export class Freind {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    sender: number;

    @Column({ nullable: false })
    reciever: number;

    @Column({ type: 'enum', enum: FreindStatus, default: FreindStatus.request })
    status: FreindStatus;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<Freind>) {
        Object.assign(this, partial);
    }
}
