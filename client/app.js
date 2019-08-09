
const addcontact = () => {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    console.log(name)
    fetch("/api/contact",{
    method:"POST",
    body:JSON.stringify({"name" : name,"email" : email, "phone" : phone, "address" : address})
 })
 .then((res)=>res.json())
 .then((data)=>{
 		let alertbox = document.getElementById("alert");
 	if(data.status == "success"){
 	alertbox.classList.replace("splace","success");
 	alertbox.classList.replace("hide","show");
 	alertbox.innerHTML = "Contact added successfully";
 	setTimeout(()=>{
 		alertbox.classList.replace("success","splace");
 	alertbox.classList.replace("show","hide");
 	
 	},2000)
 		
 	}
 
 })
 .catch((e)=>console.log(e));
 return false;
}