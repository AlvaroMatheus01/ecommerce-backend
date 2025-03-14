import { Sequelize } from 'sequelize-typescript';
import { Cart } from '../models/cart.model';
import { Category } from '../models/category.model';
import { Order } from '../models/orders.model';
import { User } from '../models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadModels: true,
        synchronize: true,
      });

      sequelize.addModels([User, Product, Category, Order, Cart]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
