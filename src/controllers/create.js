import { StatusCodes } from 'http-status-codes';
import{create} from '../services/create.js';
import{formValidationSchema} from '../schemes/form.js'
import{ BadRequestError } from '../../utils/errors.js'
import{getFormByUniqueId, getFormsbyTitle} from '../services/get.js';
import { fillData } from '../services/update.js';
// import { log } from 'winston';
const createForm = async(req,res)=>{
    let form = await getFormsbyTitle(req.body.title);

    if(form.length!=0){
        throw new BadRequestError('Form already present','create service createForm method()');
    }
    form = await create(req.body);

    res.status(StatusCodes.CREATED).json({
        message: 'Created',
        uniqueId: form.dataValues.uniqueId
    })
}

const fillForm = async(req,res)=>{
    const {form_title} = req.query;
    
    const {error} = formValidationSchema.validate(req.body);
    if(error){
        throw new BadRequestError(error.details[0].message,'create fillForm() method');
    }
    
   

    let forms = await getFormsbyTitle(form_title);
    let form = await getFormByUniqueId(req.body.uniqueId);
    
    if(!form&& forms.length==0){
        const data = {
            title:form_title,
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            isGraduated: true
        }
        form = await create(data);

    }
    else{
        const data = {
            title:form_title,
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            isGraduated: true,
            uniqueId: req.body.uniqueId
        }
    
        form = await fillData(data);
    }

    res.status(StatusCodes.CREATED).json({
        message:'Form filled successfuly',
    })
}

export{createForm,fillForm}