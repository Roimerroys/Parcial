import { Application } from "express";
import { AporteController } from "../controllers/aporte.controller";

export class AporteRoutes {
  public aporteController: AporteController = new AporteController();

  public routes(app: Application): void {
    app.route("/aportes").get(this.aporteController.getAllAportes);
    app.route("/aportes/:id").get(this.aporteController.getAporteById);
    app.route("/aportes").post(this.aporteController.createAporte);
    app.route("/aportes/:id").put(this.aporteController.updateAporte);
    app.route("/aportes/:id").delete(this.aporteController.deleteAporte);
  }
}
