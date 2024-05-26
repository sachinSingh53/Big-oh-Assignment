import { formRoutes } from "./routes/form.js";

const BASE_PATH = '/api/v1/';

const appRoutes = (app)=>{
    // app.use('',healthRoute());
    app.use(BASE_PATH,formRoutes());
}

export{appRoutes};