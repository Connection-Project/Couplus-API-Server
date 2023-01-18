import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { TestCart } from './TestCart.entity';

@Entity({ name: 'TestProducts' })
export class TestProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    productName: string;

    @Column({ default: 0 })
    price: number;

    @Column({ nullable: true })
    summary: string;

    @Column({ nullable: true, length: 3000 })
    detail: string;

    @Column({ type: 'double', default: 0 })
    raing: number;

    @Column({ nullable: true })
    thumb: string;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    @OneToMany(() => TestCart, (cart) => cart.product, { cascade: true })
    @JoinColumn()
    cart: TestCart;

    constructor(partial: Partial<TestProduct>) {
        Object.assign(this, partial);
    }
}
