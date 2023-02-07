import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { PetModule } from './pet/pet.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';

@Module({
    imports: [
        UserModule,
        AuthModule,
        PetModule,
        BoardModule,
        CommentModule,
        // ProductModule,
        // CartModule
    ],
})
export class IndexModule {}
