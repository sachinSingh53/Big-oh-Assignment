import express from 'express'
import{createForm, fillForm} from '../controllers/create.js'
import { getForms } from '../controllers/get.js';
const router = express.Router();
const formRoutes = ()=>{
    router.post('/form',createForm);
    router.post('/fill_data',fillForm);
    router.get('/fill_data',getForms);

    return router;
}

export{ formRoutes };