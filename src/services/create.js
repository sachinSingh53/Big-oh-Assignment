import{formModel} from '../models/form-schema.js'
const create = async(data)=>{
    const form = await formModel.create(data);
    return form;
}



export{create};