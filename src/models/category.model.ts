import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Products } from '../models/product.model';

@Table
export class Category extends Model<Category> {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false }) // Corrigido aqui
  name: string;

  @HasMany(() => Products)
  products: Products[];
}
