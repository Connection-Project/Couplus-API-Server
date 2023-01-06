import { TestProduct } from './TestProduct.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'TestCarts' })
export class TestCart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => TestProduct, (product) => product.cart, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: TestProduct;

    @Column({ type: 'int', default: 1 })
    quantity: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<TestCart>) {
        Object.assign(this, partial);
    }
}
