import userSchema from './models/user.models.js'

//adding data into database from server which the data came from front-end
export async function addDonor(req,res){
try{
const{name,age,phone,dob,bloodgroup,place}=req.body
console.log(name,age,phone,dob,bloodgroup,place);


//validation
if(!(name&&age&&phone&&dob&&bloodgroup&&place))
  return res.status(404).send({msg:"please check the feilds once more"})
//if the phone number is already existed
const check=await userSchema.findOne({phone})
console.log(check);
if(!check){
  userSchema.create({name,age,phone,bloodgroup,place,dob}).then((data)=>{
    res.status(200).send({msg:data})
  }).catch((error)=>{
    res.status(404).send({msg:error})
  })
}else{
    return res.status(404).send({msg:"please check your number it is already existed"})
}
}catch(error){
res.status(404).send({msg:error})
}

}

export async function getDonors(req,res){
try{
  console.log(req.body);
  const donors=await userSchema.find();
  console.log(donors);
  res.status(200).send(donors)

}catch(error){
res.status(404).send({msg:error})
}
}

//to edit data
export async function getDonor(req,res){
  try{

    const {_id}=req.params;
    console.log(req.params);
    const data=await userSchema.findOne({_id});
    console.log(data);
    res.status(200).send(data)
  }catch{
    res.status(404).send("failed to edit")
  }


}

//update edited data
export async function updateDonor(req,res){
  
  const {_id}=req.params;
  const {name,age,phone,dob,bloodgroup,place}=req.body;
  await userSchema.updateOne({_id},{$set:{name,age,phone,dob,bloodgroup,place}}).then(()=>{
     console.log(req.body);
    res.status(201).send({data:"successfully updated"})
  
   }).catch((error)=>{
     res.status(404).send(error)
   })
}


//delete the donor data
export async function deleteDonor(req,res){
  try{
    const {_id}=req.params;
    console.log(_id);
    userSchema.deleteOne({_id}).then(()=>{
      res.status(200).send({msg:"successfully deleted"})
    }).catch((error)=>{
      console.log(error);
      
    })
    
  }catch(error){
    console.log(error);
    
  }
}
