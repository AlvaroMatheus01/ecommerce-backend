import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body('productId') productId: number, @Body('quantity') quantity: number) {
    return this.cartService.addToCart(productId, quantity);
  }

  @Get()
  getCart() {
    return this.cartService.getCart();
  }
}
