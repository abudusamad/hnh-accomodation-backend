import mongoose, { Schema } from "mongoose";
const { Schema } = mongoose;

const HostelSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    address: {
        type: String,
        require:true
    }, 
    rating: {
        type: String,
        require:true
    },

    descriptions: {
        type: String,
        type: true
    },
    
})