
//validation
function validateId(empid){
    let regEx=/^EMP\d+$/;
    if(!(regEx.test(empid))){
        document.getElementById("idV").textContent="Invalid"
        document.getElementById("idV").style.color="red"
        document.getElementById("idV").style.fontSize=13+"px" 
    }else{
        document.getElementById("idV").textContent="true"
        document.getElementById("idV").style.color="green"
        document.getElementById("idV").style.fontSize=13+"px" 
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
        document.getElementById("nameV").textContent="true"
        document.getElementById("nameV").style.color="green"
        document.getElementById("nameV").style.fontSize=13+"px"
    }
}

function validatePhone(phone){
    let regEx=/^[6-9]\d{2}\d{3}\d{4}$/
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


function validateMail(email){
    let regEx=/^[A-Z,a-z][a-z,0-9,.]+@[a-z]+([\.][a-z]{3})/
    if((regEx.test(email))){
        document.getElementById("nameV").textContent=""
    }
    else{
        document.getElementById("emailV").textContent="invalid"
        document.getElementById("emailV").style.color="red"
        document.getElementById("emailV").style.fontSize=13+"px"
    }
}


//to add employee
let profile;//----------declare the profile globally to acess the profile to all function if it is needed
document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault()
    if(!profile){
        alert("please upload your profile")
        return
    }
    let empid=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let sal=document.getElementById("sal").value;
    let email=document.getElementById("email").value;
    let exp=document.getElementById("exp").value;
    let des=document.getElementById("des").value;
    console.log(empid,name,phone,email,sal,exp,des)
    await fetch("http://localhost:3004/api/addEmp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({empid,name,phone,email,sal,exp,des,profile})
    }).then(async(res)=>{ 
        const data=await res.json()
        if(res.status==201){
            alert(data.msg)
            
            console.log(res);
            
            window.location.href="../index.html"
        } else{
         console.log("failed to add");
         alert(data.msg)

        }
    }).catch((error)=>{
        console.log(error);
        
    })
    
})


async function getProfile()
{
//    console.log(document.getElementById("profile").files[0]);

    profile=await convertBase64(document.getElementById("profile").files[0])
    document.getElementById("emp-img").src=profile;
    console.log(profile);
    
    
}


//to convert the image file into string format
function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result);
        }
        fileReader.onerror=(error)=>{
            reject(error);
        }
    })
}