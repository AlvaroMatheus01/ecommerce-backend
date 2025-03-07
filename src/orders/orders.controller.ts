import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrder(@Request() req, @Body('productId') productId: number, @Body('quantity') quantity: number) {
    return this.ordersService.createOrder(req.user.userId, productId, quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUserOrders(@Request() req) {
    return this.ordersService.getUserOrders(req.user.userId);
  }
}
