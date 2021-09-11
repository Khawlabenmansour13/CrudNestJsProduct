import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/Schema/productSchema';
import { ProductService } from '../../services/products/products.service';
import { ProductController } from '../../controllers/products/products.controller';

@Module({
    providers: [ProductService],
    controllers: [ProductController],
    imports: [
      MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
  })

export class ProductsModule {  

    
}
