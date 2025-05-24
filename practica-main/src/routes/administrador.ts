import { Application } from "express";
import { AdministradorController } from "../controllers/administrador.controller";
import { authMiddleware } from "../middleware/auth";

export class AdministradorRoutes { 
  public administradorController: AdministradorController = new AdministradorController();

  public routes(app: Application): void {// milddleware autentica antes de entrar a la peticion 
    app.route("/administradores").get(authMiddleware,this.administradorController.getAll);
    app.route("/administradores/:id").get(authMiddleware,this.administradorController.getById);
    app.route("/administradores").post(authMiddleware,this.administradorController.create);
    app.route("/administradores/:id").put(authMiddleware,this.administradorController.update);
    app.route("/administradores/:id").delete(authMiddleware,this.administradorController.delete);
  }
}
