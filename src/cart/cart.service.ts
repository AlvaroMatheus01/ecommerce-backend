import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.module';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  async addToCart(productId: number, quantity: number = 1) {
    return this.cartModel.create({ productId, quantity });
  }

  async getCart() {
    return this.cartModel.findAll();
  }
}
