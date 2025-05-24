import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface EgresoI {
  id?: number;
  fecha: Date;
  monto: number;
  descripcion: string;
  id_administrador: number;
}

export class Egreso extends Model<EgresoI> implements EgresoI {
  public id!: number;
  public fecha!: Date;
  public monto!: number;
  public descripcion!: string;
  public id_administrador!: number;
}

Egreso.init(
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
      allowNull: false,
    },
    id_administrador: {  // <- AGREGA ESTO
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  
  
  {
    sequelize: database,
    modelName: "Egreso",
    tableName: "egresos",
    timestamps: false,
  }
);
