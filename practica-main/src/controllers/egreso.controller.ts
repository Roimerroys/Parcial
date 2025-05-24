import { Request, Response } from "express";
import { Egreso, EgresoI } from "../models/Egreso";

export class EgresoController {
  public async getAllEgresos(req: Request, res: Response) {
    try {
      const egresos: EgresoI[] = await Egreso.findAll();
      res.status(200).json({ egresos });
    } catch (error) {
      console.error("Error al obtener los egresos:", error); // 👈 Agrega esto
      res.status(500).json({ error: "Error al obtener los egresos" });
    }
  }

  public async getEgresoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const egreso = await Egreso.findByPk(id);
      if (egreso) {
        res.status(200).json(egreso);
      } else {
        res.status(404).json({ error: "Egreso no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al buscar el egreso" });
    }
  }

  public async createEgreso(req: Request, res: Response) {
    try {
      const data: EgresoI = req.body;
      const nuevo = await Egreso.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el egreso" });
    }
  }

  public async updateEgreso(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Egreso.update(req.body, { where: { id } });
      if (updated) {
        res.status(200).json({ mensaje: "Egreso actualizado" });
      } else {
        res.status(404).json({ error: "Egreso no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el egreso" });
    }
  }

  public async deleteEgreso(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Egreso.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Egreso eliminado" });
      } else {
        res.status(404).json({ error: "Egreso no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el egreso" });
    }
  }
}
