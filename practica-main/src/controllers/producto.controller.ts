import { Request, Response } from "express";
import { Productos, ProductosI} from "../models/producto";

export class ProductosController {

   public async MostrarProductos(req: Request, res: Response) {
    try {

        const productos: ProductosI[]= await Productos.findAll();

        res.status(200).json({productos});

    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
   }

   public async MostrarProducto(req: Request, res: Response) {
     try {
        const { id } = req.params;
        const producto = await Productos.findByPk(id);
      if (producto){
        res.status(200).json({ producto });
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }

     } catch (error) {
       res.status(500).json({ error: 'Error al obtener el producto' });
     }
   }

   public async CrearProducto(req: Request, res: Response) {
    const { nombre, precio, stock} = req.body;
      try {
        const nuevoProducto = await Productos.create({nombre, precio, stock});
        res.status(201).json({ nuevoProducto });

      } catch (error) {
           res.status(500).json({ error: 'Error al crear el prodcuto' });
       }
    
   }

}