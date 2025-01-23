import { RouteObject } from "react-router-dom";
import { LoginRoutes } from "./modules/login/routes";


const RotaPrincipal: RouteObject[] = [
    {
        path:'/',
        element: <div>Pagina inicial</div>,
        errorElement: <div>Pagina não encontrada</div>,
    }
]

export const Rotas: RouteObject[] = [
    ...LoginRoutes,
    ...RotaPrincipal,
]