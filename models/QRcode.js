

import {Schema, model, models} from 'mongoose'
import mongoose from "mongoose";


const QRcodeSchema = new Schema ({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Distribution model
    },

  
    region: {
        type: String,
    },

    province: {
        type: String,
    },

    municipality: {
        type: String,
    },

    barangay: {
        type: String,
    },


    qrNumber: {
        type: Number,
    },  


});

const QRcode = models.QRcode || model("QRcode", QRcodeSchema);

export default QRcode;