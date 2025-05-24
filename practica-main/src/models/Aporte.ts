import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface AporteI {
  id?: number;
  fecha: Date;
  monto: number;
  descripcion: string;
  id_propietario: number;
}

export class Aporte extends Model<AporteI> implements AporteI {
  public id!: number;
  public fecha!: Date;
  public monto!: number;
  public descripcion!: string;
  public id_propietario!: number;
}

Aporte.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_propietario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "Aporte",
    tableName: "aportes",
    timestamps: false,
  }
  
);
