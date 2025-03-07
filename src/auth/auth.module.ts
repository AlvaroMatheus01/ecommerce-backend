import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule} from '../users/users.module'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { register } from 'module';

@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule,register({
      secret: 'seu_segredo_super_secreto',
      signOptions: {expiresIn: '1h'},
    }),
  ]
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  
})
export class AuthModule {}
