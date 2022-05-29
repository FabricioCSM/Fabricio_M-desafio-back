import { DataTypes, Model } from 'sequelize'
import IPurchase from "../../src/interfaces/purchase.interface";
import sequelizeConnection from "../config/config";
import UserModel from './user';

class PurchaseModel extends Model<IPurchase> {
  public id!: number
  public userId!: string
  public productName!: string
  public quantity!: number
  public total!: Float32Array
  public dataValues!: {
    id: number,
    userId: string,
    productName: string,
    quantity: number,
    total: Float32Array,
    createdAt?: Date,
    updatedAt?: Date,
  }

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

PurchaseModel.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "UserModel",
        key: "id"
      },
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION'
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
)

export function createAssociations(): void {
  UserModel.hasOne(PurchaseModel, { as: 'userId'} );
}

export default PurchaseModel;
