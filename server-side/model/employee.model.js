import mongoose from "mongoose";

const empSchema=new mongoose.Schema({
    empid:{type:String},
    name:{type:String},
    phone:{type:String},
    email:{type:String},
    sal:{type:Number},
    exp:{type:Number},
    des:{type:String},
    profile:{type:String}


})
export default mongoose.model.Emp||mongoose.model("Emp",empSchema)