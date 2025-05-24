import { Request, Response } from "express";
import { Casa, CasaI } from "../models/Casa";
import { Propietario } from "../models/Propietario";
import { Aporte } from "../models/Aporte";

// Obtener casas con sus propietarios


export class CasaController {
  // Obtener todas las casas
  public async getAllCasas(req: Request, res: Response) {
    try {
      const casas: CasaI[] = await Casa.findAll();
      res.status(200).json({ casas });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las casas" });
    }
  }

  // Obtener casa por número
  public async getCasaById(req: Request, res: Response) {
    try {
      const { numero_casa } = req.params;
      const casa = await Casa.findByPk(numero_casa);
      if (casa) {
        res.status(200).json(casa);
      } else {
        res.status(404).json({ error: "Casa no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la casa" });
    }
  }

  // Crear casa
  public async createCasa(req: Request, res: Response) {
    try {
      const data: CasaI = req.body;
      const nuevaCasa = await Casa.create(data);
      res.status(201).json(nuevaCasa);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la casa" });
    }
  }

  // Actualizar casa
  public async updateCasa(req: Request, res: Response) {
    try {
      const { numero_casa } = req.params;
      const [updated] = await Casa.update(req.body, {
        where: { numero_casa }
      });
      if (updated) {
        res.status(200).json({ mensaje: "Casa actualizada" });
      } else {
        res.status(404).json({ error: "Casa no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la casa" });
    }
  }

  // Eliminar casa
  public async deleteCasa(req: Request, res: Response) {
    try {
      const { numero_casa } = req.params;
      const deleted = await Casa.destroy({ where: { numero_casa } });
      if (deleted) {
        res.status(200).json({ mensaje: "Casa eliminada" });
      } else {
        res.status(404).json({ error: "Casa no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la casa" });
    }
  }
  // Obtener casas con sus propietarios
  public async getCasasConPropietarios(req: Request, res: Response) {
    try {
      const casas = await Casa.findAll({
        include: [{
          model: Propietario,
          through: { attributes: [] }
        }]
      });
      res.status(200).json(casas);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener casas con propietarios", detalle: error });
    }
  }
  public async getCasasConAportes(req: Request, res: Response) {
    try {
      // Consultar todas las casas y sus aportes asociados
      const casasConAportes = await Casa.findAll({
        include: [
          {
            model: Aporte,
            as: 'aportes',  // Este "as" debe coincidir con lo que hayas definido en las relaciones
            required: false  // Esto asegura que se incluyan las casas aunque no tengan aportes
          }
        ]
      });

      // Retornar las casas con los aportes
      res.status(200).json(casasConAportes);
    } catch (error) {
      console.error(error);  // Es importante ver el error completo para depurar
      res.status(500).json({ error: "Error al obtener las casas con aportes" });
    }
  }
  }

  

