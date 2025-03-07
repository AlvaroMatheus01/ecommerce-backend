import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ){}

  @Post('singup')
  async singup(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.createUser(email,password);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.validateUser(email, password).then(user => {
      return this.authService.login(user);
    });
  }
}
