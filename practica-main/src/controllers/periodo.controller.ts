import { Request, Response } from "express";
import { Periodo, PeriodoI } from "../models/Periodo";
import { Administrador } from "../models/Administrador";

export class PeriodoController {
  public async getAllPeriodos(req: Request, res: Response) {
    try {
      const periodos = await Periodo.findAll({
        include: [
          {
            model: Administrador,
            attributes: ["nombre_completo"], // Asegúrate de incluir los atributos que necesites
          },
        ],
      });
      res.status(200).json({ periodos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los periodos" });
    }
  }

  public async getPeriodoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const periodo = await Periodo.findByPk(id);
      if (periodo) {
        res.status(200).json(periodo);
      } else {
        res.status(404).json({ error: "Periodo no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el periodo" });
    }
  }

  public async createPeriodo(req: Request, res: Response) {
    try {
      const data: PeriodoI = req.body;
      const nuevo = await Periodo.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el periodo" });
    }
  }

  public async updatePeriodo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Periodo.update(req.body, { where: { id } });
      if (updated) {
        res.status(200).json({ mensaje: "Periodo actualizado" });
      } else {
        res.status(404).json({ error: "Periodo no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el periodo" });
    }
  }

  public async deletePeriodo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Periodo.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Periodo eliminado" });
      } else {
        res.status(404).json({ error: "Periodo no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el periodo" });
    }
  }
}
