import { ApiProperty } from '@nestjs/swagger';
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
    id!: number;

    @Column()
    productName: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    detail: string;

    @ApiProperty({ type: 'double' })
    raing: number;

    @ApiProperty()
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
