// const PORT=3000;
// const http=require("http");
// const fs=require("fs");
// const url=require("url");
// const queryString=require("querystring");
// const {MongoClient,ObjectId}=require("mongodb");

// //connect mmongodb
// const client = new MongoClient("mongodb://127.0.0.1:27017/");

// const app=http.createServer(async(req,res)=>{
//     //create database
//     const db=client.db("B_bank");
//     //create collection
//     const collection=db.collection("donors");
// const path=url.parse(req.url);
// console.log(path);
// if(path.pathname=="/")
//     {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../client_side/index.html"));

// }
// else if(path.pathname=="/js/customer.js")
//     {
//     res.writeHead(200,{"Content-type":"text/js"});
//     res.end(fs.readFileSync("../client_side/js/customer.js"));
// }
// else if(path.pathname=="/css/index.css")
//     {
// res.writeHead(200,{"Content-Type":"text/css"});
// res.end(fs.readFileSync("../client_side/css/index.css"));
// }
// else if(path.pathname=="/add")
//     {
//    res. writeHead(200,{"Content-Type":"text/html"})
//    res.end(fs.readFileSync("../client_side/pages/user.html"));
// }
// else if(path.pathname=="/css/user.css")
// {
//     res.writeHead(200,{"Content-Type":"text/css"});
//     res.end(fs.readFileSync("../client_side/css/user.css"));
// }
// console.log(req.method);

// if(req.method=="POST" && path.pathname=="/submit"){
    
//     let body="";
//     req.on("data",(chunks)=>{
//         console.log(chunks);
//         body +=chunks.toString();
//         console.log(body);   
//     });
//     req.on("end",async()=>{
//         if(body!=null){
//             //convert to object
//             const formData=queryString.parse(body);
//             console.log(formData);
//             //insert data
//             collection.insertOne(formData).then(()=>{
//                 console.log("success");
                
//             })
//             .catch((error)=>{
//                 console.log(error);
                
//             })
            
//         }
//     })
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../client_side/index.html"))
// }
// // get data from the database and send it into the front-end
// if (path.pathname == "/getdonors" && req.method == "GET"){
//     const data = await collection.find().toArray();
//     const jasonData= JSON.stringify(data);
//     // console.log(jasonData);
//     res.writeHead(200,{"Content-type":"text/json"});
//     res.end(jasonData);   
// }

// //delete
// if (req.method=="DELETE" && path.pathname=="/delete"){
//     console.log("reached to delete");
    
//     let body="";
//     req.on("data",(chunks)=>{
//         body+=chunks.toString();
//         console.log(body);
        
//     });
//     req.on("end",async()=>{
//         let _id=new ObjectId(body);
//         // console.log(id);
        
//         collection.deleteOne({_id}).then(()=>{
//             res.writeHead(200,{"Content-Type":"text/plain"})
//             res.end("success")
//         }).catch(()=>{
//             res.writeHead(404,{"content-Type":"text/plain"});
//             res.end("fail");

//         })
//     })
    
// }
// });

// //connecting database
// client.connect().then(()=>{
//     console.log("database connected");
//     app.listen(PORT,()=>{
//         console.log(`http://localhost:${PORT}`);   
//     });
// }).catch((error)=>{
//     console.log(error);   
// })