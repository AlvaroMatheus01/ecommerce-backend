import { Controller, Get, Param } from '@nestjs/common';
import { Products } from '../models/product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Products[]>{
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id')id: string): Promise<Products>{
    return this.productsService.findOne(Number(id));
  }
}
