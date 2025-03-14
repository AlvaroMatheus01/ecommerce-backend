import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from '../models/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  async addToCart(productId: number, quantity: number = 1): Promise<Cart> {
    return this.cartModel.create({
      productId,
      quantity
    } as Cart);
  }

  async getCart(): Promise<Cart[]> {
    return this.cartModel.findAll();
  }
}
