

import { AuthRoutes } from './authorization/auth';
import { ResourceRoutes } from './authorization/recource';
import { ResourceRoleRoutes } from './authorization/recourceRole';
import { RefreshTokenRoutes } from './authorization/refresk_token';
import { RoleUserRoutes } from './authorization/role_user';
import { RoleRoutes } from './authorization/role';
import { BloqueRoutes } from "./bloque";
import { CasaRoutes } from "./casa";
import { PropietarioRoutes } from "./propietario";
import { AporteRoutes } from "./aporte";
import { EgresoRoutes } from "./egreso";
import { EleccionRoutes } from "./eleccion";
import { PeriodoRoutes } from "./periodo";
import { AdministradorRoutes } from "./administrador";

import { ProductoRoutes } from './producto';

export class Routes {


    public authRoutes: AuthRoutes = new AuthRoutes();
    public resourceRoutes: ResourceRoutes = new ResourceRoutes();
    public refreshTokenRoutes: RefreshTokenRoutes = new RefreshTokenRoutes();
    public roleUserRoutes: RoleUserRoutes = new RoleUserRoutes();
    public roleRoutes: RoleRoutes = new RoleRoutes();
    public resourceRole: ResourceRoleRoutes = new ResourceRoleRoutes();

    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public bloqueRoutes: BloqueRoutes = new BloqueRoutes();
    public casaRoutes: CasaRoutes = new CasaRoutes();
    public propietarioRoutes: PropietarioRoutes = new PropietarioRoutes();
    public aporteRoutes = new AporteRoutes();
    public egresoRoutes = new EgresoRoutes();
    public eleccionRoutes = new EleccionRoutes();
    public periodoRoutes = new PeriodoRoutes();
    public administradorRoutes: AdministradorRoutes = new AdministradorRoutes();

 
}
