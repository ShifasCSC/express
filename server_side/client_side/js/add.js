

// async function getDonor(){
    
//         const res=await fetch("http://localhost:3000/getdonors")
//         const data= await res.json();
//         str=``
//         data.map((donor)=>{
//             // console.log(donor);
            
//             str+=` <div class="div1">
//             <label for="input"></label>
//             <input type="text" value=${donor.name}  id="name-${donor._id}" placeholder="name" disabled=true>
//             <input type="text" value=${donor.email} id="email-${donor._id}"  placeholder="email" disabled=true>
//             <input type="text" value=${donor.phone} id="phone-${donor._id}"  placeholder="phone" disabled=true>
//         </div>
//         <div class="div2">
//             <input type="text" value=${donor.bloodgroup} id="bloodgroup-${donor._id}" placeholder="blood group" disabled=true>
//             <input type="text" value=${donor.gender} id="gender-${donor._id}" placeholder="gender" disabled=true>
//         </div>
        
//         <div class="btn1">
//             <button onclick="handleEdit('${donor._id}')">Edit</button>
//             <button onclick="hanldeSave('${donor._id}')">Save</button>
//             <button onclick="handleDelete('${donor._id}')">Delete</button>
//         </div>
            
//             `
//         })
        
//         document.getElementById("main").innerHTML=str;
//     }
        
    

// getDonor();

// //edit data
// // ---------------------------------------------------------------------------
// function handleEdit(id){
//     //to get the id of each input field and make it disabled to false
//     document.getElementById(`name-${id}`).disabled=false
//     document.getElementById(`email-${id}`).disabled=false
//     document.getElementById(`phone-${id}`).disabled=false
//     document.getElementById(`bloodgroup-${id}`).disabled=false
//     document.getElementById(`gender-${id}`).disabled=false
    

// }



// //for save
// function hanldeSave(id){
//     let name=document.getElementById(`name-${id}`).value;
//     let email=document.getElementById(`email-${id}`).value;
//     let phone=document.getElementById(`phone-${id}`).value;
//     let bloodgroup=document.getElementById(`bloodgroup`).value;
//     let gender=document.getElementById(`gender`).value;
//     console.log(name,email,phone,bloodgroup,gender);

    
// }
// //delete
// async function handleDelete(id){

//     //request
//     const res= await fetch("http://localhost:3000/delete",{
//         method:"delete",
//         headers:{"Content-Type":"type/plain"},
//         body:id

//     });
// console.log(res);

//     //get response from the server

//      //one way
//     // // ---------------------------------------------------
//     const data =await res.text()
//     // console.log(data);
//     // getData()
//     // // ---------------------------------------------------
//     // //second way
//     res.status==200?alert(data):alert(data);
//     getDonor()
//     // // ---------------------------------------------------
//     // // ---------------------------------------------------
// }


//
//
//------------------------------------------------------------
//------------------------------------------------------------

//input validation
function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{2}\d{3}\d{4}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
        document.getElementById("phn").textContent=""
    }
    else{
        document.getElementById("phn").textContent="Phone Number Is Invalid"
        document.getElementById("phn").style.color="red"
        document.getElementById("phn").style.fontSize=13+"px"



    }



}

function validateAge(age){
    let regEx=/^[2-7][0-9]|[1][8-9]/
    if (!(regEx.test(age))){
        document.getElementById("ageV").textContent="Not Eligible"
        document.getElementById("ageV").style.color="red"
        document.getElementById("ageV").style.fontSize=13+"px"

    }
    else{
        document.getElementById("ageV").textContent=""

    }
}
function validateName(name){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(name))){
        document.getElementById("nameV").textContent="Invalid"
        document.getElementById("nameV").style.color="red"
        document.getElementById("nameV").style.fontSize=13+"px"
    }
    else{
        document.getElementById("nameV").textContent=""


    }

}
function validatePlace(place){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(place))){
        document.getElementById("placeV").textContent="Invalid"
        document.getElementById("placeV").style.color="red"
        document.getElementById("placeV").style.fontSize=13+"px"

    }
    else{
       document.getElementById("placeV").textContent=""

    }
}
// function validateDob(dob){
//     let regEx=/^([0][1-9]|[1-2]\d|[3][1-2])-([0][1-9]|[1][0-2])-([1][9]\d{2}|[2][0][1-2][1-4])/
//     if (!(regEx.test(dob))){
//         document.getElementById("dobV").textContent=" notEligible"
//         document.getElementById("dobV").style.color="red"
//         document.getElementById("dobV").style.fontSize=13+"px"

//     }
//     else{
//         document.getElementById("dobV").textContent=""
//         document.getElementById("dobV").style.color="green"
      

//     }
// }


document.getElementById("data").addEventListener("submit",async(e)=>{

    e.preventDefault();
    console.log(e);
    
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("phone").value
    let place=document.getElementById("place").value
    let bloodgroup=document.getElementById("bloodgroup").value
    console.log(name,age,dob,phone,place,bloodgroup);
    
    
    await fetch("http://localhost:3002/api/addDonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,phone,place,bloodgroup}),
    })
    .then((res)=>{
        console.log(res);
        
        if(res.status==200){
            alert("Success")
            window.location.href="../index.html"

        }else{
            alert("phone number is already existed")
        }
    
        
    }).catch((error)=>{
        
        console.log(error);
        
    })
    
})


// //FOR EXPRESS DATA ACCESSING
// document.getElementById("form").addEventListener("submit",async(e)=>{
//     e.preventDefault();//----to prevent the reloading of web page
//     console.log("hilo");
    
//     const name=document.getElementById("name").value;
//     const phone=parseInt(document.getElementById("phone").value);
//     const dob=document.getElementById("dob").value;
//     const bloodgroup=document.getElementById("bloodgroup").value;
//     const place=document.getElementById("place").value;
//     const age=parseInt(document.getElementById("age").value);

//     console.log(name,phone,dob,bloodgroup,age,place);

//     await fetch("http://localhost:3000/api/addDonor",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({name,phone,dob,bloodgroup,age,place})
//     })
//     .then(async(res)=>{
//         console.log(res);
//         if(res.status==201){
//             alert("success")
//             window.location.href="../index.html"
//         }
//         else{
//             const er=await res.json()
//             alert(er.msg)
//         }
        
//     }).catch((error)=>{
//         console.log(error);
        
//     })
    
// })
// //------------------------------------------------------------
// //------------------------------------------------------------

