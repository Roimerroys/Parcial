import { database } from "../database/db";
import { Casa } from "./Casa";
import { Propietario } from "./Propietario";
import { Aporte } from "./Aporte";
import { Egreso } from "./Egreso";
import { Administrador } from "./Administrador";
import { Periodo } from "./Periodo";
import { Eleccion } from "./Eleccion";
import { DataTypes } from "sequelize";
import { CasaPropietarios } from "./CasaPropietario";

// =========================
// RELACIÓN N:N Casa <-> Propietario
// =========================
// export const CasaPropietario = sequelize.define('CasaPropietario', {}, { timestamps: false });

Casa.belongsToMany(Propietario, {
  through: CasaPropietarios,
  foreignKey: 'numero_casa',
  otherKey: 'id_propietario'
});

Propietario.belongsToMany(Casa, {
  through: CasaPropietarios,
  foreignKey: 'id_propietario',
  otherKey: 'numero_casa'
});

// =========================
// RELACIÓN 1:N Propietario -> Aporte
// =========================
Propietario.hasMany(Aporte, { foreignKey: 'id_propietario' });
Aporte.belongsTo(Propietario, { foreignKey: 'id_propietario' });

// =========================
// RELACIÓN 1:N Administrador -> PeriodoAdministrativo
// =========================
Administrador.hasMany(Periodo, { foreignKey: 'id_administrador' });
Periodo.belongsTo(Administrador, { foreignKey: 'id_administrador' });

// =========================
// RELACIÓN 1:N Administrador -> Egreso
// =========================
Administrador.hasMany(Egreso, { foreignKey: 'id_administrador' });
Egreso.belongsTo(Administrador, { foreignKey: 'id_administrador' });

// =========================
// RELACIÓN N:N Propietario <-> Eleccion
// =========================
export const ParticipacionEleccion = database.define('ParticipacionEleccion', {}, { timestamps: false });

Propietario.belongsToMany(Eleccion, {
  through: ParticipacionEleccion,
  foreignKey: 'id_propietario',
  otherKey: 'id_eleccion'
});

Eleccion.belongsToMany(Propietario, {
  through: ParticipacionEleccion,
  foreignKey: 'id_eleccion',
  otherKey: 'id_propietario'
});
