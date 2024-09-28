let profile
//retreve id 
const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1])
const id=urlParams.get("id")
console.log(id);



//get details of single employees
async function getDetails(){
    try{

        const res=await fetch(`http://localhost:3004/api/getEmployee/${id}`);
        let emp=await res.json()
        profile=emp.profile
        document.getElementById("main").innerHTML=`

          <div class="details">
              <div class="detail">
                  <img src="${profile}" alt="">
            <h3>${emp.empid}</h3>
        </div>
        <div class="content">
            <table>
                <tr><td>name:</td>
                    <td><input type="text" value="${emp.name}"></td></tr>
                <tr><td>phone:</td>
                    <td><input type="text" value="${emp.phone}"></td></tr>
                <tr><td>salary:</td>
                    <td><input type="text" value="${emp.sal}"></td></tr>
                <tr><td>email:</td>
                    <td><input type="text" value="${emp.email}"></td></tr>
                <tr><td>experience:</td>
                    <td><input type="text" value="${emp.exp}"></td></tr>
                <tr><td>designation:</td>
                    <td><input type="text" value="${emp.des}"></td></tr>
                </table>
                <div class="btn">
                    <button id="edt"><a href="../pages/edit.html?id=${emp._id}">Edit</a></button>
                    <button id="dlt" onclick="deleteEmploy('${emp._id}')">delete</button>
                </div>
         </div>
           
        </div>`

     }catch(error){
         console.log(error);
     
 }


}
getDetails()

//delete

 
async function deleteEmploy(id){
    try{

        let res=await fetch(`http://localhost:3004/api/deleteEmp/${id}`,{
            method:"DELETE"
        // headers:{"Content-Type":"application/json"}
    })
        if(res.status==200){
            alert("successfully deleted")
            window.location.href="../index.html"
        }else{
            alert("failed to delete")
        }
    }catch(error){
        res.status(404).send(error)
    }
}
