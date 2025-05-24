import { Request, Response } from "express";
import { Administrador, AdministradorI } from "../models/Administrador";

export class AdministradorController { 
  //mostrar todos los administradores
  public async getAll(req: Request, res: Response) {
    try {
      const admins = await Administrador.findAll();
      res.status(200).json({ administradores: admins });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los administradores" });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const admin = await Administrador.findByPk(id);
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ error: "Administrador no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el administrador" });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const data: AdministradorI = req.body;
      const nuevo = await Administrador.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el administrador" });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Administrador.update(req.body, { where: { id_administrador: id } });
      if (updated) {
        res.status(200).json({ mensaje: "Administrador actualizado" });
      } else {
        res.status(404).json({ error: "Administrador no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el administrador" });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Administrador.destroy({ where: { id_administrador: id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Administrador eliminado" });
      } else {
        res.status(404).json({ error: "Administrador no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el administrador" });
    }
  }
}
