import { where } from "sequelize";
import { formModel } from "../models/form-schema.js";

const fillData = async (data) => {
    console.log(data);

    const result = await formModel.update(
        {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            isGraduated: data.isGraduated
        },
        {
            where: {
                uniqueId: data.uniqueId
            }
        }
    )
    return result;

}
export { fillData };