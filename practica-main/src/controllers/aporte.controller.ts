import { Request, Response } from "express";
import { Aporte, AporteI } from "../models/Aporte";

export class AporteController {
  //mostrar todos los aportes 
  public async getAllAportes(req: Request, res: Response) {
    try {
      const aportes: AporteI[] = await Aporte.findAll();
      res.status(200).json({ aportes });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los aportes" });
    }
  }

  public async getAporteById(req: Request, res: Response) {
    //mostrar un aporte por id
    try {
      const { id } = req.params;
      const aporte = await Aporte.findByPk(id);
      if (aporte) {
        res.status(200).json(aporte);
      } else {
        res.status(404).json({ error: "Aporte no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al buscar el aporte" });
    }
  }

  public async createAporte(req: Request, res: Response) {
  //crear un aporte
    try {
      const data: AporteI = req.body;
      const nuevo = await Aporte.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el aporte" });
    }
  }

  public async updateAporte(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Aporte.update(req.body, { where: { id } });
      if (updated) {
        res.status(200).json({ mensaje: "Aporte actualizado" });
      } else {
        res.status(404).json({ error: "Aporte no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el aporte" });
    }
  }

  public async deleteAporte(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Aporte.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Aporte eliminado" });
      } else {
        res.status(404).json({ error: "Aporte no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el aporte" });
    }
  }
}
