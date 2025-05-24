// models/CasaPropietario.ts
import { DataTypes } from "sequelize";
import { database } from "../database/db";

export const CasaPropietarios = database.define('CasaPropietarios', {
  numero_casa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'casas',
      key: 'numero_casa'
    }
  },
  id_propietario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'propietarios',
      key: 'id'
    }
  }
}, {
  timestamps: false,
  tableName: 'CasaPropietarios'
});
