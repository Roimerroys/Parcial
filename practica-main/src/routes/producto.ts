import { Application } from "express";

import { ProductosController } from "../controllers/producto.controller";
import { authMiddleware } from "../middleware/auth";

export class ProductoRoutes {
    public productoController: ProductosController = new ProductosController();

    public routes(app: Application): void {
        app.route("/productos").get(authMiddleware,this.productoController.MostrarProductos);
        app.route("/productos/:id").get(authMiddleware,this.productoController.MostrarProducto);
        app.route("/productos").post(authMiddleware,this.productoController.CrearProducto);
    
    }

}