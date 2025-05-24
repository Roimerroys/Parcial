import { Request, Response } from "express";
import { Bloque, BloqueI } from "../models/Bloque";

export class BloqueController {
  // Obtener todos los bloques
  public async getAllBloques(req: Request, res: Response) {
    try {
      const bloques: BloqueI[] = await Bloque.findAll();
      res.status(200).json({ bloques });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los bloques" });
    }
  }

  // Obtener bloque por ID
  public async getBloqueById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const bloque = await Bloque.findByPk(id);
      if (bloque) {
        res.status(200).json(bloque);
      } else {
        res.status(404).json({ error: "Bloque no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el bloque" });
    }
  }

  // Crear bloque
  public async createBloque(req: Request, res: Response) {
    try {
      const data: BloqueI = req.body;
      const nuevo = await Bloque.create(data);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear bloque" });
    }
  }

  // Actualizar bloque
//   public async updateBloque(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const [updated] = await Bloque.update(req.body, {
//         where: { id }
//       });
//       if (updated) {
//         res.status(200).json({ mensaje: "Bloque actualizado" });
//       } else {
//         res.status(404).json({ error: "Bloque no encontrado" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: Error al actualizar bloque" });
//     }
//   }

//   // Eliminar bloque
//   public async deleteBloque(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const deleted = await Bloque.destroy({ where: { id } });
//       if (deleted) {
//         res.status(200).json({ mensaje: "Bloque eliminado" });
//       } else {
//         res.status(404).json({ error: "Bloque no encontrado" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Error al eliminar bloque" });
//     }
//   }
}
