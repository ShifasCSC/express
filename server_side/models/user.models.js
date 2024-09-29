import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:String},
    phone:{type:String},
    bloodgroup:{type:String},
    place:{type:String}
})

export default mongoose.model.Users||mongoose.model("User",userSchema)