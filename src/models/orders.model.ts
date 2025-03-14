import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  stock: number;
}

export class Order{}