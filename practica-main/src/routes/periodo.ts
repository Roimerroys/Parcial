import { Application } from "express";
import { PeriodoController } from "../controllers/periodo.controller";

export class PeriodoRoutes {
  public periodoController: PeriodoController = new PeriodoController();

  public routes(app: Application): void {
    app.route("/periodos").get(this.periodoController.getAllPeriodos.bind(this.periodoController));
    app.route("/periodos/:id").get(this.periodoController.getPeriodoById);
    app.route("/periodos").post(this.periodoController.createPeriodo);
    app.route("/periodos/:id").put(this.periodoController.updatePeriodo);
    app.route("/periodos/:id").delete(this.periodoController.deletePeriodo);
  }
}
