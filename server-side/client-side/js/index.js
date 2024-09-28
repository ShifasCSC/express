let emp;
// display employees
async function getEmp(){
    try {
        const res = await fetch(`http://localhost:3004/api/getEmps`);
        console.log(res);
        
        emp = await res.json();
        console.log(emp);

        let str = '';
        emp.map((employ) => {
            str += `<a href="./pages/details.html?id=${employ._id}">
                <div class="cardd">
                    <div class="card">
                        <img src="${employ.profile}" alt="">
                    </div>
                    <div class="emps">
                    <h4>${employ.name}</h4>
                    <h4>${employ.des}</h4>
                    </div>
                    
                </div>
            </a>`;
        });
        document.getElementById("cards").innerHTML = str;
    } catch (error) {
        console.log(error);
        
    }
}
getEmp();


//search
document.getElementById("search").addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);
    console.log(emp);

    // if (emp && emp.length > 0) {
        let fData = emp.filter((employ) =>employ.name.toLowerCase().startsWith(searchValue));
        let str = '';
        fData.map((employ) => {
            console.log(employ._id);
            
            str += `<a href="./pages/details.html">
                <div class="cardd">
                    <div class="card">
                        <img src="#" alt="">
                    </div>
                    <h4>${employ.name}</h4>
                </div>
            </a>`;
        });
        document.getElementById("cards").innerHTML = str;
    // } else {
    //     document.getElementById("cards").innerHTML = "No employees found.";
    // }
});
