import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Products } from 'src/models/product.model';

@Table
export class Cart extends Model<Cart> {
  @Column({primaryKey: true, autoIncrement: true})
  declare id: number;
  
  @ForeignKey(() => Products)
  @Column
  productId: number;

  @Column({ type: 'integer', defaultValue: 1})
  quantity: number;
}