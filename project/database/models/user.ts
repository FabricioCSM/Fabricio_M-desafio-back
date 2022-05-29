import { DataTypes, Model } from 'sequelize'
import IUser from "../../src/interfaces/user.interface";
import sequelizeConnection from "../config/config";

class UserModel extends Model<IUser> {
  public id!: number
  public username!: string
  public email!: string
  public password!: string
  public dataValues!: {
    id: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  }

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

UserModel.init({
    id: { 
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  },
  
)

export default UserModel;
