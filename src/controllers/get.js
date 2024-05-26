import { StatusCodes } from 'http-status-codes';
import { getFormsbyTitle } from '../services/get.js';

// import { log } from 'winston';
const getForms = async(req,res)=>{

    const forms = await getFormsbyTitle(req.query.form_title);
    res.status(StatusCodes.OK).json({
        forms
    })
}

export{
    getForms
}