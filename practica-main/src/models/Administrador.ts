import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";

export interface AdministradorI {
  id_administrador?: number;
  nombre_completo: string;
  documento: string;
  correo: string;
}

export class Administrador extends Model<AdministradorI> implements AdministradorI {
  public id_administrador!: number;
  public nombre_completo!: string;
  public documento!: string;
  public correo!: string;
}

Administrador.init(
  {
    id_administrador: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  },
  {
    sequelize: database,
    modelName: "Administrador",
    tableName: "administradores",
    timestamps: false
  }
);
