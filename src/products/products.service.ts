import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private productModel: typeof Products) {}

  findAll(): Promise<Products[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Products> {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    return product;
  }
  
}
