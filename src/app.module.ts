import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module'; // Importando o módulo de produtos
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carrega variáveis do .env
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true, // Carrega modelos automaticamente
      synchronize: true, // Só usar em desenvolvimento! Remove tabelas se mudar o modelo
    }),
    ProductsModule,
    CartModule,
    UsersModule,
    AuthModule,
    OrdersModule, // Registrando o módulo de produtos
  ],
})
export class AppModule {}
