const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
let picture;
let banner;
async function getMovie() {
    const res=await fetch(`http://localhost:3000/api/getmovie/${id}`);
    const movie=await res.json();
    
    picture=movie.picture;
    document.getElementById("frm").innerHTML=` 

    
    <label for="title">Movie Title:</label>
            <input type="text" id="title" name="title" value=${movie.title}>

             <label for="rating">Rating</label>
                <input type="number" value="${movie.rating}"  id="rating" required>
                <label for="screen">Screen</label>
                <select id="screen">
                    <option value="${movie.screen}">${movie.screen}</option>
                    <option value="2D">2D</option>
                    <option value="3D">3D</option>
                    <option value="IMAX">IMAX</option>
                    <option value="4DX">4DX</option>
                    </select>

            <label for="duration">Duration (in minutes):</label>
            <input type="text" id="duration" name="duration" value=${movie.duration}>

            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value=${movie.genre}>

            <label for="release-date">Release Date:</label>
            <input type="date" id="releaseDate" name="releaseDate" value=${movie.releaseDate}>

            <label for="language">Language:</label>
            <input type="text" id="language" name="language" value=${movie.language}>

            <label for="certification">Certification:</label>
            <select id="certification" name="certification" value=${movie.certification}>
                <option value="U">U</option>
                <option value="UA">UA</option>
                <option value="A">A</option>
                <option value="S">S</option>
            </select>
             <div class="div1">
                <div class="div">
                    <label for="picture">Picture:</label>
                    <input type="file" id="picture" name="picture"  onchange="getPoster()">
                    <img src="${movie.picture}" id="bms-poster" alt="">
                </div>
                <div class="divs">
                    <label for="banner">Banner:</label>
                    <input type="file" id="banner" name="banner" onchange="getBanner()">
                    <img src="${movie.banner}" id="bms-banner" alt="">
                </div>
            </div>

            <button type="submit">update</button>
    `;
}
getMovie();

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const title=document.getElementById("title").value;
        const rating=document.getElementById("rating").value;
        const screen=document.getElementById("screen").value;
        const duration=document.getElementById("duration").value;
        const genre=document.getElementById("genre").value;
        const releaseDate=document.getElementById("releaseDate").value;
        const language=document.getElementById("language").value;
        const certification=document.getElementById("certification").value;
    const res=await fetch(`http://localhost:3000/api/editmovie/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,rating,screen,duration,genre,releaseDate,language,certification,picture,banner})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})

// async function pic(){
//     console.log(document.getElementById("picture").files[0]);
//     picture=await convertToBase64(document.getElementById("picture").files[0]);
// }

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