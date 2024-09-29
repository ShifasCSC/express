let donors
async function getDonors(){
    

    const res=await fetch("http://localhost:3002/api/getDonors")

     if(res.status==200){

     donors= await res.json()
    console.log(donors);
    let str=``
    donors.map((data)=>{
        str+=`
                    <tr>
                        <td>${data.name}</td>
                        <td>${data.phone}</td>
                        <td>${data.bloodgroup}</td>
                        <td>${data.dob}</td>
                        <td>${data.place}</td>
                        <td>${data.age}</td>
                        <td> <div class="btn1">
                            <button><a href="./pages/edit.html?id=${data._id}">Edit</a></button>
                            <button id="dlt" onclick="deleteDonor('${data._id}')">Delete</button>
                        </div></td>
                    </tr>`
                
    })

    document.getElementById("main").innerHTML=str;
}
}
getDonors()

//delete

async function deleteDonor(id){
    try{

        console.log(id);
            const res=await fetch(`http://localhost:3002/api/deleteDonor/${id}`,{
                method:"DELETE",
                // body:id
            })
            if(res.status==200){
                let data=await res.json()
                alert(data.msg)
                getDonors()
            }
            else{
                alert("failed to delete")
            }
    
}catch(error){
console.log(error);

}

}

//search
document.getElementById("search").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    
    let fData=donors.filter((donors)=>donors.bloodgroup.toLowerCase().startsWith(e.target.value.toLowerCase()));
    str=""
    console.log(donors);
    fData.map((donors)=>{
        str+=` <tbody id="main">
                    <tr>
                        <td>${donors.name}</td>
                        <td>${donors.phone}</td>
                        <td>${donors.bloodgroup}</td>
                        <td>${donors.dob}</td>
                        <td>${donors.place}</td>
                        <td>${donors.age}</td>
                        <td> <div class="btn1">
                            <button><a href="./pages/edit.html">${donors.Edit}</a></button>
                            <button>${donors.Delete}</button>
                        </div></td>
                    </tr>
                </tbody>`
               
    })
    document.getElementById("main").innerHTML=str;
})