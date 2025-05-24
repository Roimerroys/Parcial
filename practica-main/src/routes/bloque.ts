import { Application } from "express";
import { BloqueController } from "../controllers/bloque.controller";

export class BloqueRoutes {
  public bloqueController: BloqueController = new BloqueController();

  public routes(app: Application): void {
    app.route("/bloques").get(this.bloqueController.getAllBloques);
    app.route("/bloques/:id").get(this.bloqueController.getBloqueById);
    app.route("/bloques").post(this.bloqueController.createBloque);
    // app.route("/bloques/:id").put(this.bloqueController.updateBloque);
    // app.route("/bloques/:id").delete(this.bloqueController.deleteBloque);
  }
}
