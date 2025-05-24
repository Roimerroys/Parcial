import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface EleccionI {
  id?: number;
  fecha: Date;
  descripcion: string;
}

export class Eleccion extends Model<EleccionI> implements EleccionI {
  public id!: number;
  public fecha!: Date;
  public descripcion!: string;
}

Eleccion.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "Eleccion",
    tableName: "elecciones",
    timestamps: false,
  }
);
