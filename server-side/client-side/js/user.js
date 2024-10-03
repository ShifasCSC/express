function getName(name){
    let regEx=/^[A-Za-z]{3,}/
    if(!(regEx.test(name))){
        document.getElementById("nameV").textContent="invalid"
        document.getElementById("nameV").style.color="red"
    }else{
        document.getElementById("nameV").textContent="valid"
        document.getElementById("nameV").style.color="green"
    }

}

function getEmail(email){
    let regEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    if(!(regEx.test(email))){
        document.getElementById("emailV").textContent="invalid"
        document.getElementById("emailV").style.color="red"
    }else
    {
        document.getElementById("emailV").textContent="valid"
        document.getElementById("emailV").style.color="green"
    }

}

