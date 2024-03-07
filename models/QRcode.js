
import mongoose from "mongoose";

import {Schema, model, models} from 'mongoose'


const QRcodeSchema = new Schema ({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Distribution model
    },


    disasterIncident: {
        type: String,
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
        type: String,
    },  


});

const QRcode = models.QRcode || model("QRcode", QRcodeSchema);

export default QRcode;