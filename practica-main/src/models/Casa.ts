import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface CasaI {
  numero_casa: number;
  id_bloque: number;
}

export class Casa extends Model<CasaI> implements CasaI {
  public numero_casa!: number;
  public id_bloque!: number;
}

Casa.init(
  {
    numero_casa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    id_bloque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "Casa",
    tableName: "casas",
    timestamps: false,
  }
);


