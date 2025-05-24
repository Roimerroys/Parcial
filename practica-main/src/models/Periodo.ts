import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";
import { Administrador } from "./Administrador";

export interface PeriodoI {
  id?: number;
  inicio: Date;
  fin: Date;
  id_administrador: number;
}

export class Periodo extends Model<PeriodoI> implements PeriodoI {
  public id!: number;
  public inicio!: Date;
  public fin!: Date;
  public id_administrador!: number;
}

Periodo.init(
  {
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_administrador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "Periodo",
    tableName: "periodos",
    timestamps: false,
  }
);

// Relación 1:N con Administrador
Periodo.belongsTo(Administrador, { foreignKey: "id_administrador" });
