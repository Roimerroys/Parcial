import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface BloqueI {
  id?: number;
  id_conjunto: number;
  nombre_bloque: string;
  numero_casas: number;
}

export class Bloque extends Model<BloqueI> implements BloqueI {
  public id!: number;
  public id_conjunto!: number;
  public nombre_bloque!: string;
  public numero_casas!: number;
}

Bloque.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_conjunto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre_bloque: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_casas: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: database,
    modelName: "Bloque",
    tableName: "bloques",
    timestamps: false
  }
);
