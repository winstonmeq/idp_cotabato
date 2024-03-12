
import mongoose from "mongoose";

import {Schema, model, models} from 'mongoose'


const ChildrenSchema = new Schema ({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Distribution model
    },

    qrcodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QRcode', // Reference to the Distribution model
    },

    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parent', // Reference to the Distribution model
    },


    familyMember: {
        type: String,
    },
  
    relationship: {
        type: String,
    },

    age: {
        type: Number,
    },

    sex: {
        type: String,
    },

    education: {
        type: String,
    },


    skill: {
        type: String,
    },  

    remark: {
        type: String,
    },  



});

const Children = models.Children || model("Children", ChildrenSchema);

export default Children;