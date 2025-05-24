import { Application } from "express";
import { EgresoController } from "../controllers/egreso.controller";

export class EgresoRoutes {
  public egresoController: EgresoController = new EgresoController();

  public routes(app: Application): void {
    app.route("/egresos").get(this.egresoController.getAllEgresos);
    app.route("/egresos/:id").get(this.egresoController.getEgresoById);
    app.route("/egresos").post(this.egresoController.createEgreso);
    app.route("/egresos/:id").put(this.egresoController.updateEgreso);
    app.route("/egresos/:id").delete(this.egresoController.deleteEgreso);
  }
}
