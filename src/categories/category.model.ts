import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Products } from '../products/product.model';

@Table
export class Category extends Model<Category>{
  @Column({primaryKey: true, AutoIncrement: true })
  id: number;

  @Column({ type: 'string', allowNull: false})
  name: string;

  @HasMany(() => Products)
  products: Products[];


}