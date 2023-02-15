import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export enum FriendStatus {
    request = 'request', // ! 요청 중
    confirmed = 'confirmed', // ! 친구
}

@Entity({ name: 'friends' })
export class Friend {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    friendId: number;

    @Column({ type: 'enum', enum: FriendStatus, default: FriendStatus.request })
    status: FriendStatus;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<Friend>) {
        Object.assign(this, partial);
    }
}
