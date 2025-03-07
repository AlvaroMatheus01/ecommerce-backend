import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';

@Table
export class Order extends Model<Order> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column({ type: 'integer' })
  quantity: number;
}
