
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
 console.log(data.data)
 })
 .catch((e)=>console.log(e));
 return false;
}