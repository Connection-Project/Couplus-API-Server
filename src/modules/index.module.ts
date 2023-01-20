import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { PetModule } from './pet/pet.module';

@Module({
    imports: [
        UserModule,
        AuthModule,
        PetModule,
        // ProductModule,
        // CartModule
    ],
})
export class IndexModule {}
