const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);

// async function getMovie() {
//     const res=await fetch(`http://localhost:3000/api/getmovie/${id}`)
//     const movie=await res.json();
//     document.getElementById("picture").src=movie.picture;
//     document.getElementById("banner").src=movie.banner;
//     document.getElementById("title").textContent=movie.title;
//     document.getElementById("language").textContent=movie.language;
//     document.getElementById("duration").textContent=timeConvert(movie.duration);
//     document.getElementById("genre").textContent=movie.genre;
//     document.getElementById("certification").textContent=movie.certification;
//     document.getElementById("date").textContent=movie.releaseDate;
//     document.getElementById("buttons").innerHTML=`
//     <a href="../pages/edit.html?id=${movie._id}"><button id="edit">Edit</button></a>
//                         <button onclick="deleteMovie('${movie._id}')" id="delete">Delete</button>`
// }
// getMovie();
async function getMovie(){
    const res=await fetch(`http://localhost:3000/api/getmovie/${id}`)
    const movie=await res.json()
    console.log(movie.screen);
    document.getElementById("main").innerHTML=`
    <div>
    <img src=${movie.banner} alt="">
    <div class="main-img">
    <img src=${movie.picture} alt="">
    </div>
    
    <div class="main-content" >
    <h1 style="font-weight: bold;">${movie.title}</h1>
    <div class="content1">
    <span><i class="fa-solid fa-star" style="color: rgb(190, 82, 82);"></i></span>
    
    <span><span style="margin-right: 10px;">${movie.rating}/10</span>
    (40.6K Votes) >
    <span style="margin-left: 20%;"><button style="border: none; padding: 6px 14px;border-radius: 4px;">Rate now</button></span></span>
    
    </div>
    <div class="content3" >
    <p>${movie.language}</p>
    </div>
    <div class="content2" >
    <p>${movie.screen}</p>
    </div>
    <div class="content4"  style="word-spacing: 2px; margin-bottom: 30px;font-weight:bold">
    <span>${movie.duration}</span>
    <span>• ${movie.genre}</span>
    <span> •  ${movie.certification}</span>
    <span> •  ${movie.releaseDate}</span>
    </div>
    <div class="content5">
    <a href="./edit.html?id=${movie._id}"><button>Edit</button></a>
    <button onclick="deleteMovie('${movie._id}')">Delete</button>
    </div>
    </div>
    </div>`
    
    
}
getMovie()
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "hr " + rminutes + "min";
    
}






async function deleteMovie(id) {
    fetch(`http://localhost:3000/api/deletemovie/${id}`,{
      method:"DELETE",
          headers:{"Content-Type":"application/json"}
    }).then((res)=>{
          console.log(res);
          if(res.status==201){
              alert("Deleted")
              window.location.href="../index.html";
          }else{
              alert("error");
              window.location.href="../index.html";
          }
      }). catch ((error)=>{
          console.log(error);
          
      })
  }