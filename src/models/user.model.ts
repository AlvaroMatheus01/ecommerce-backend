import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}
