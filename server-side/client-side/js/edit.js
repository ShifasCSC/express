
let profile;
//retrieve id 
const url=window.location.href
const urlParams=new URLSearchParams(url.split("?")[1])
const id=urlParams.get("id")

//edit function
async function editEmp(){
    try{
     const res=await fetch(`http://localhost:3004/api/getEmployee/${id}`)
     let edata=await res.json()
     profile=edata.profile
     document.getElementById("frm").innerHTML=` <label for="id">Empid</label>
                <input type="text" id="id" name="id" value="${edata.empid}" placeholder="EMP00">
                <label for="name">Name</label>
                <input type="text" id="name" value="${edata.name}" name="name">
                <label for="phone">Phone</label>
            <input type="text" id="phone" value="${edata.phone}" name="phone">
            <label for="email">Email</label>
            <input type="text" id="email" value="${edata.email}" name="email">
            <label for="salary">Salary</label>
            <input type="text" id="sal" value="${edata.sal}" name="sal">
            <label for="experience">Experience</label>
            <input type="text" id="exp" value="${edata.exp}" name="exp">
            <label for="designation">Designation</label>
            <input type="text" id="des" value="${edata.des}" name="des">
            <div class="prof">

    <label for="profile">profile</label>
    
    <input type="file" id="profile" class="profile" onchange="getProfile()" style="border: none;">
    <img src="${profile}" id="emp-img" class="emp-img" alt="">
</div>
            <span class="sub">
                <button id="sub">update</button>
            </span>`
     
    }catch(error){
        console.log(error);
        
    }
}
editEmp()


// updating employee
document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const empid=document.getElementById("id").value;
    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const sal=document.getElementById("sal").value;
    const exp=document.getElementById("exp").value;
    const des=document.getElementById("des").value;

    console.log(empid,name,phone,email,sal,exp,des);
    const res=await fetch(`http://localhost:3004/api//updateEmp/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({empid,name,phone,email,sal,exp,des,profile})

    }).then(async(res)=>{
        const data=await res.json()
        if(res.status==201){
            alert(data.msg)
            // window.location.href="../pages/details.html"
        } else{
         console.log("failed to add");
         alert(data.msg)

        }
    }).catch((error)=>{
        console.log(error);

    })
    

})

//convert the profile photo into string
async function getProfile(){
    profile=await convertBase64(document.getElementById("profile").files[0])
    document.getElementById("emp-img").src=profile;
}

function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader= new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=()=>{
            reject(error)
        }
    })
}