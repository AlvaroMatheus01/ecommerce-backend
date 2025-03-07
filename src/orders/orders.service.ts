import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderModel: typeof Order) {}

  async createOrder(userId: number, productId: number, quantity: number) {
    return this.orderModel.create({ userId, productId, quantity });
  }

  async getUserOrders(userId: number) {
    return this.orderModel.findAll({ where: { userId } });
  }
}
