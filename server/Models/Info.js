import mongoose from 'mongoose'



const infoSchema = mongoose.Schema({

    country : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    population : {
        type : Number,
        required : true,
        
    }
})

export default mongoose.model('cinfo',infoSchema)