import { Application } from "express";
import { EleccionController } from "../controllers/eleccion.controller";

export class EleccionRoutes {
  public eleccionController: EleccionController = new EleccionController();

  public routes(app: Application): void {
    app.route("/elecciones").get(this.eleccionController.getAllElecciones);
    app.route("/elecciones/:id").get(this.eleccionController.getEleccionById);
    app.route("/elecciones").post(this.eleccionController.createEleccion);
    app.route("/elecciones/:id").put(this.eleccionController.updateEleccion);
    app.route("/elecciones/:id").delete(this.eleccionController.deleteEleccion);
  }
}
