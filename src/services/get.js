import{formModel} from '../models/form-schema.js';

const getFormByUniqueId = async(uniqueId)=>{
    const form = await formModel.findOne({
        where:{uniqueId}
    });

    return form;
}

const getFormsbyTitle = async(title)=>{
    const form = await formModel.findAll({
        where:{title}
    });

    return form;
}

const checkIfAlreadyRegistered = async(name,email,phoneNumber)=>{
    const result = await formModel.findOne({
        where: {
            [Op.or]: [{ name: name }, { email: email },{phoneNumber:phoneNumber}]
        }
    });

    return result;
}

export{getFormByUniqueId,checkIfAlreadyRegistered,getFormsbyTitle}