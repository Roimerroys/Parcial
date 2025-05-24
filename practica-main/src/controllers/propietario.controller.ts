import { Request, Response } from "express";
import { Propietario, PropietarioI } from "../models/Propietario";
import { Casa } from "../models/Casa";
// import { AporteRoutes } from "../Routes/aporte";
import { Aporte } from "../models/Aporte";

export class PropietarioController {
  // Obtener todos los propietarios
  public async getAllPropietarios(req: Request, res: Response) {
    try {
      const propietarios = await Propietario.findAll();
      res.status(200).json({ propietarios });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los propietarios" });
    }
  }

  // Obtener un propietario por ID
  public async getPropietarioById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const propietario = await Propietario.findByPk(id);
      if (propietario) {
        res.status(200).json(propietario);
      } else {
        res.status(404).json({ error: "Propietario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el propietario" });
    }
  }

  // Crear un nuevo propietario
  public async createPropietario(req: Request, res: Response) {
    try {
      const data: PropietarioI = req.body;
      const nuevo = await Propietario.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el propietario" });
    }
  }
  

  // Actualizar un propietario
  public async updatePropietario(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updated] = await Propietario.update(req.body, {
        where: { id }
      });
      if (updated) {
        res.status(200).json({ mensaje: "Propietario actualizado" });
      } else {
        res.status(404).json({ error: "Propietario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar propietario" });
    }
  }

  // Eliminar un propietario
  public async deletePropietario(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Propietario.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ mensaje: "Propietario eliminado" });
      } else {
        res.status(404).json({ error: "Propietario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar propietario" });
    }
  }
  // Obtener propietarios con sus casas
public async getPropietariosConCasas(req: Request, res: Response) {
  try {
    const propietarios = await Propietario.findAll({
      include: [{
        model: Casa,
        through: { attributes: [] }
      }]
    });
    res.status(200).json(propietarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener propietarios con casas", detalle: error });
  }
}
public async getPropietariosConAportes(req: Request, res: Response): Promise<void> {
  try {
    const propietarios = await Propietario.findAll({
      include: [
        {
          model: Aporte,
          as: "Aportes", // Verifica este alias si lo estás usando
        }
      ]
    });
    res.status(200).json(propietarios);
  } catch (error) {
    console.error("Error al obtener propietarios con aportes:", error);
    res.status(500).json({ error: "Error al obtener los propietarios con aportes" });
  }
}

}
