import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

const formModel = sequelize.define('forms',{
    uniqueId:{
        type: DataTypes.UUID,
        allowNull:true,
        defaultValue: DataTypes.UUIDV4
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    isGraduated:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
    }
},{
    indexes:[
        {
            unique: false,
            fields:['title']
        },
    
    ]
});

formModel.sync();

export{formModel};