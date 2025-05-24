import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface PropietarioI {
  id?: number;
  nombre: string;
  cedula: string;
  telefono: string;
  correo: string;
}

export class Propietario extends Model<PropietarioI> implements PropietarioI {
  public id!: number;
  public nombre!: string;
  public cedula!: string;
  public telefono!: string;
  public correo!: string;
}

Propietario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: database,
    modelName: "Propietario",
    tableName: "propietarios",
    timestamps: false,
  }
 
  
);




