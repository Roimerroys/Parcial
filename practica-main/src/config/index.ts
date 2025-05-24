import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from "../routes/index";
var cors = require("cors"); // install en node y types
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import "../models/index";

dotenv.config();

export class App {
    app: Application;
    public routePrv: Routes =  new Routes();

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes()
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    routes() {


        this.routePrv.authRoutes.routes(this.app);
        this.routePrv.resourceRoutes.routes(this.app);
        this.routePrv.refreshTokenRoutes.routes(this.app);
        this.routePrv.roleUserRoutes.routes(this.app);
        this.routePrv.roleRoutes.routes(this.app);
        this.routePrv.resourceRole.routes(this.app);

        this.routePrv.productoRoutes.routes(this.app);
        this.routePrv.bloqueRoutes.routes(this.app); // <-- Agregar esta línea
        this.routePrv.casaRoutes.routes(this.app);   // <-- Agregar esta línea
        this.routePrv.propietarioRoutes.routes(this.app);
        this.routePrv.aporteRoutes.routes(this.app);
        this.routePrv.egresoRoutes.routes(this.app);
        this.routePrv.eleccionRoutes.routes(this.app);
        this.routePrv.periodoRoutes.routes(this.app);
        this.routePrv.administradorRoutes.routes(this.app);

     
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json()); // leer json raw
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({ extended: false })); //leer json form
    }

   async listen() {
        await this.app.listen(this.app.get('port'));
        // await this.app.listen(this.port);
        // console.log('Server on port', this.port);
        console.log('Server on port', this.app.get('port'));
    }

   

}
