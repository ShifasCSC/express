let picture
let banner

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const title=document.getElementById("title").value;
    const rating=document.getElementById("rating").value;
    const screen=document.getElementById("screen").value;
    const duration=document.getElementById("duration").value;
    const genre=document.getElementById("genre").value;
    const releaseDate=document.getElementById("releaseDate").value;
    const language=document.getElementById("language").value;
    const certification=document.getElementById("certification").value;
   await fetch("http://localhost:3000/api/addmovie",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,rating,screen,duration,genre,releaseDate,language,certification,picture,banner})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="../index.html"
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})
   async function getPoster(){
    console.log(document.getElementById("picture").files[0]);
    picture=await convertToBase64(document.getElementById("picture").files[0]);
    // console.log(picture);
    document.getElementById("bms-poster").src=picture
}

async function getBanner(){
banner=await convertToBase64(document.getElementById("banner").files[0]);
document.getElementById("bms-banner").src=banner
}

function convertToBase64(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
}
