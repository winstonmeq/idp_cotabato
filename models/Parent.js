
import mongoose from "mongoose";

import {Schema, model, models} from 'mongoose'


const ParentSchema = new Schema ({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Distribution model
    },

    
    qrcodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QRcode', // Reference to the Distribution model
    },

 
    lastName: {
        type: String,
    },
  
    firstName: {
        type: String,
    },

    middleName: {
        type: Number,
    },

    birthDate: {
        type: String,
    },

    age: {
        type: Number,
    },


    birthPlace: {
        type: String,
    },  

    maidenName: {
        type: String,
    },  


    occupation: {
        type: String,
    }, 
    

    familyNetIncome: {
        type: String,
    }, 
    
    idCardPresented: {
        type: String,
    },  

    idCardNumber: {
        type: String,
    },  


    contactNumber: {
        type: String,
    },  


});

const Parent = models.Parent || model("Parent", ParentSchema);

export default Parent;