import { Application } from "express";
import { PropietarioController } from "../controllers/propietario.controller";

export class PropietarioRoutes {
  public propietarioController: PropietarioController = new PropietarioController();

  public routes(app: Application): void {
    app.route("/propietarios").get(this.propietarioController.getAllPropietarios.bind(this.propietarioController));
    app.route("/propietarios/:id").get(this.propietarioController.getPropietarioById.bind(this.propietarioController));
    app.route("/propietarios").post(this.propietarioController.createPropietario.bind(this.propietarioController));
    app.route("/propietarios/:id").put(this.propietarioController.updatePropietario.bind(this.propietarioController));
    app.route("/propietarios/:id").delete(this.propietarioController.deletePropietario.bind(this.propietarioController));
    app.route("/propietarios-con-casas").get(this.propietarioController.getPropietariosConCasas.bind(this.propietarioController));
   
    app.route("/propietarios-con-aportes").get(this.propietarioController.getPropietariosConAportes.bind(this.propietarioController));


  }
}
