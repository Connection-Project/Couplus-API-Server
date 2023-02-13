import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export enum FreindStatus {
    request = 'request', // ! 요청 중
    confirmed = 'confirmed', // ! 친구
    deleted = 'deleted', // ! 한쪽이 친구를 삭제 했을 경우
}

@Entity({ name: 'Freinds' })
export class Freind {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    freindId: number;

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
