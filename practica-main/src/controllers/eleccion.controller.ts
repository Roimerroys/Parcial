import { Request, Response } from "express";
import { Eleccion, EleccionI } from "../models/Eleccion";

export class EleccionController {
  public async getAllElecciones(req: Request, res: Response) {
    try {
      const elecciones: EleccionI[] = await Eleccion.findAll();
      res.status(200).json({ elecciones });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener elecciones" });
    }
  }

  public async getEleccionById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const eleccion = await Eleccion.findByPk(id);
      if (eleccion) {
        res.status(200).json(eleccion);
      } else {
        res.status(404).json({ error: "Elección no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la elección" });
    }
  }

  public async createEleccion(req: Request, res: Response) {
    try {
      const data: EleccionI = req.body;
      const nueva = await Eleccion.create(data);
      res.status(201).json(nueva);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la elección" });
    }
  }

  public async updateEleccion(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Eleccion.update(req.body, { where: { id } });
      if (updated) {
        res.status(200).json({ mensaje: "Elección actualizada" });
      } else {
        res.status(404).json({ error: "Elección no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la elección" });
    }
  }

  public async deleteEleccion(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Eleccion.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Elección eliminada" });
      } else {
        res.status(404).json({ error: "Elección no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la elección" });
    }
  }
}
