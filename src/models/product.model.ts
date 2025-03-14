import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from '../models/category.model';

@Table
export class Products extends Model<Products> {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.STRING })
  imageURL: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  stock: number;

  @ForeignKey(() => Category) // Movido para dentro da classe
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
