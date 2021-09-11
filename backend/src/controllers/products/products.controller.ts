import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import {CreateProductDto}from '../../Dto/CreateProductDto';
import {UpdateProductDto}from '../../Dto/UpdateProductDto';
  import { ProductService } from '../../services/products/products.service';
  
  @Controller('Products')
  export class ProductController {
    constructor(private readonly service: ProductService) {}
  
    @Get('/getall')
     index() {
      return  this.service.findAll();
    }
  
    @Get('/getProduct/:id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post("/addProduct")
    async create(@Body() createProductDto: CreateProductDto) {
      return await this.service.create(createProductDto);
    }
  
    @Put('/updateProduct/:id')
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
      return await this.service.update(id, updateProductDto);
    }
  
    @Delete('/deleteProduct/:id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }