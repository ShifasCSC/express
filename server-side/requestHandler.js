import empSchema from "./model/employee.model.js"


export async function addEmp(req,res){
    console.log("hi");
   //  console.log(req.body);
    
    try{
       const{empid,name,phone,email,sal,exp,des,profile}=req.body
       //code for check feilds are empty or not
       if(!(empid&&name&&phone&&email&&sal&&exp&&des&&profile))
         return res.status(404).send({msg:"field are empty please check your input fields"})
       //when id is already existed
       let checkId= await empSchema.findOne({empid})
       console.log(checkId);
       if(!checkId)
       {  
          await empSchema.create({empid,name,phone,email,sal,exp,des,profile}).then((data)=>{
             res.status(201).send({msg:"Succcessfully"})
             
            }).catch((error)=>{
               console.log("datas are too large");
               
               res.status(404).send({msg:"datas are too large"})
            })
         }else{
            res.status(404).send({msg:"id is already existed"})
         }

     }catch(error){
        console.log(error);
        
     }
}

export async function getEmps(req,res){
   try{
      console.log(req.body);
     const employees= await empSchema.find()
     console.log(employees);
     res.status(200).send(employees)
     

   }catch(error){
     res.status(404).send({msg:error})
     
   }
}

export async function getEmployee(req,res){
   try{
      const _id=req.params;
      console.log(_id);
      const employee=await empSchema.findOne({_id})
      res.status(201).send(employee)
   }catch(error){
      res.status(404).send({msg:error})
   }
}

export async function updateEmp(req,res){
   const _id=req.params;
   console.log(_id);
   // console.log(req.body);
   
   const {empid,name,phone,email,des,sal,exp,profile}=req.body;
   await empSchema.updateOne({_id},{$set:{empid,name,phone,email,des,sal,exp,profile}}).then(()=>{
      
      res.status(201).send({msg:"successfully updated"})
   }).catch((error)=>{
      res.status(401).send(error)
   })
}

export async function deleteEmp(req,res){
const{_id}=req.params;
const data=await empSchema.deleteOne({_id}).then(()=>{
   res.status(200).send("sucessfully deleted")
}).catch((error)=>{
   res.status(404).send(error)
})
}
