import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Productos extends Model {
    public id!: number;
    public nombre!: string;
    public precio!: number;
    public stock!: number;
}

export interface ProductosI{
    nombre: string;
    precio: number;
    stock: number;
}

Productos.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
          tableName: 'productos',
        sequelize: database,
        timestamps: false
    }
    

)