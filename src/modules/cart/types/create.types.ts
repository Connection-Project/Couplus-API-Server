import { ApiProperty } from '@nestjs/swagger';
import { TestProduct } from 'src/models/TestProduct.entity';

export class CreateCartTypes {
    @ApiProperty()
    product: TestProduct;
}
