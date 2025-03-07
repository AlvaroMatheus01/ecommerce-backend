import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Category } from '../categories/category.model';

@ForeignKey(() => Category)
@Column
categoryId: number;

@BelongsTo(() => Category)
category: Category;

@Table
export class Products extends Model<Products> {
  @Column({primaryKey: true, autoIncrement: true})
  declare id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.TEXT })
  description: string;

  @Column({type: DataType.STRING})
  imageURL: string;

  @Column({type: DataType.FLOAT, allowNull: false})
  price: number

  @Column({type: DataType.INTEGER, defaultValue: 0})
  stock: number;
}

