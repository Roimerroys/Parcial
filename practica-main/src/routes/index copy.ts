// import { ClienteRoutes } from "./cliente";
import { BloqueRoutes } from "./bloque";
import { CasaRoutes } from "./casa";
import { PropietarioRoutes } from "./propietario";
import { AporteRoutes } from "./aporte";
import { EgresoRoutes } from "./egreso";
import { EleccionRoutes } from "./eleccion";
import { PeriodoRoutes } from "./periodo";
import { AdministradorRoutes } from "./administrador";

export class Routes {
    // public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public bloqueRoutes: BloqueRoutes = new BloqueRoutes();
    public casaRoutes: CasaRoutes = new CasaRoutes();
    public propietarioRoutes: PropietarioRoutes = new PropietarioRoutes();
    public aporteRoutes = new AporteRoutes();
    public egresoRoutes = new EgresoRoutes();
    public eleccionRoutes = new EleccionRoutes();
    public periodoRoutes = new PeriodoRoutes();
    public administradorRoutes: AdministradorRoutes = new AdministradorRoutes();
}