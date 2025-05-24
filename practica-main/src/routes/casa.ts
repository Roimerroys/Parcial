import { Router, Application } from "express";
import { CasaController } from "../controllers/casa.controller";

export class CasaRoutes {
  public CasaController: CasaController = new CasaController();

  public routes(app: Application): void {
    app.route("/casas").get(this.CasaController.getAllCasas);
    app.route("/casas/:numero_casa").get(this.CasaController.getCasaById);
    app.route("/casas").post(this.CasaController.createCasa); // <-- Este es el importante
    app.route("/casas/:numero_casa").put(this.CasaController.updateCasa);
    app.route("/casas/:numero_casa").delete(this.CasaController.deleteCasa);
    app.route("/casas-con-propietarios").get(this.CasaController.getCasasConPropietarios.bind(this.CasaController));
    app.route("/casas-con-aportes").get(this.CasaController.getCasasConAportes.bind(this.CasaController));
    app.route("/casas-con-aportes").get(this.CasaController.getCasasConAportes);

    
  }
}
