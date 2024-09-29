
function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{9}$/
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



//retrieve id from url
const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get("id");
console.log(id);

//edit employee inserted data reseting from table into edit page
async function getDonor(){
    try{
        const    res=await fetch(`http://localhost:3002/api/getDonor/${id}`)
         let data=await res.json();
         document.getElementById("frm").innerHTML=` <label for="name">Name</label>
            <input type="text" id="name" value="${data.name}" name="name" onkeyup="validateName(document.getElementById('name').value)" >
            <div id="nameV"></div>
<label for="phone">Phone</label>
<input type="text" id="phone" value="${data.phone}" name="phone" onkeyup="validatePhone(document.getElementById('phone').value)" >
<div id="phn"></div>
<label for="age">Age</label>
<input type="text" id="age" value="${data.age}" name="age" onkeyup="validateAge(document.getElementById('age').value)">
<div id="ageV"></div>
<label for="bloodgroup">bloodgroup</label>
<select name="bloodgroup" id="bloodgroup">

    <option>${data.bloodgroup}</option>
    <option value="select">select</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
</select>

<label for="dob">dob</label>
<input type="date" id="dob" value="${data.dob}" name="dob">
<div id="dobV"></div>
<label for="place">place</label>
<input type="text" id="place" value="${data.place}" name="place" onkeyup="validatePlace(document.getElementById('place').value)" >
<div id="placeV"></div>


<div class="btn">
    <button id="sub">update</button>
   
</div>`
        

    }catch(error){
        console.log(error);
    }
}
getDonor()







document.getElementById("frm").addEventListener('submit',async(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value;
    let phone=parseInt(document.getElementById("phone").value) ;
    let age=document.getElementById("age").value;
    let bloodgroup=document.getElementById("bloodgroup").value;
    let dob=document.getElementById("dob").value;
    let place=document.getElementById("place").value;
    console.log(name,place,age,phone,bloodgroup,dob);
    try{

    let res=await fetch(`http://localhost:3002/api/updateDonor/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,place,age,phone,bloodgroup,dob})
     })
    console.log(res);
    if(res.status==201){
        let data=await res.json()
        alert(data.data)
        getDonor()
        // window.location.href="../index.html"
    }else{
        alert("failed to upload data")
    }

}catch(error){
    console.log(error);
    
    }

})