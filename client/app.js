let formsect = document.getElementById("formsection");
let listsect = document.getElementById("listsection");
let singlesect = document.getElementById("singlesection");
const addcontact = () => {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    console.log(name)
    fetch("/api/contact",{
    method:"POST",
	body:JSON.stringify({"name" : name,"email" : email, "phone" : phone, "address" : address}),
	headers:new Headers({"Content-Type":"application/json; charset=UTF-8","Authorization":"Bearer "+localStorage.getItem('allcontacts')}),
 })
 .then((res)=>res.json())
 .then((data)=>{
 		let alertbox = document.getElementById("alert");
 	if(data.status == "success"){
	window.localStorage.setItem('allcontacts', data.token);
 	alertbox.classList.replace("splace","success");
 	alertbox.classList.replace("hide","show");
 	alertbox.innerHTML = "Contact added successfully";
 	setTimeout(()=>{
 		alertbox.classList.replace("success","splace");
 	alertbox.classList.replace("show","hide");
 	    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
 	
 	},2000)
 		
 	}else{
 		alertbox.classList.replace("splace","warn");
 	alertbox.classList.replace("hide","show");
 	alertbox.innerHTML = data.error;
 	setTimeout(()=>{
 		alertbox.classList.replace("warn","splace");
 	alertbox.classList.replace("show","hide");
 	
 	},2000)
 		
 	}
 
 })
 .catch(()=>{
	 console.log("error")
 });
 return false;
}












const getContacts = (action) =>{
	if(action == 0){
	fetch("/api/contact",{
		method:"GET",
		headers:new Headers({"Authorization":"Bearer "+localStorage.getItem('allcontacts')}),
	})
	.then((res)=>res.json())
 .then((data)=>{
 	if(data.status=="success"){
 	if(formsect.classList.contains("show"))
 		formsect.classList.replace("show","hide");
 		
 	if(singlesect.classList.contains("show"))
 		singlesect.classList.replace("show","hide");
 listsect.classList.replace("hide","show");
 document.getElementById("init").innerHTML = "";
 for(let dc = 0;dc < data.data.length; dc++ ){
 	let { id,name,email,phone,address } = data.data[dc]; 
 let populate = "<div id='listing"+id+"' class='single'><a id='list"+id+"' onclick='seeone(this.id)'>"+name+"</a><hr/>"+email+"</div><br/>";
 document.getElementById("init").innerHTML += populate;
 
 }
 		
 	}
 	
 	console.log(data)
 })
 .catch(()=>{
	 console.log("error")
 });
 }else{
 	fetch("/api/contact/"+action,{
		method:"DELETE",
		headers:new Headers({"Authorization":"Bearer "+localStorage.getItem('allcontacts')}),
	})
	.then((res)=>res.json())
 .then((data)=>{
 	if(data.status=="success"){
 		window.localStorage.setItem('allcontacts', data.newtoken);
 	if(formsect.classList.contains("show"))
 		formsect.classList.replace("show","hide");
 		
 	if(singlesect.classList.contains("show"))
 		singlesect.classList.replace("show","hide");
 listsect.classList.replace("hide","show");
 document.getElementById("init").innerHTML = "";
 for(let dc = 0;dc < data.data.length; dc++ ){
 	let { id,name,email,phone,address } = data.data[dc]; 
 let populate = "<div id='listing"+id+"' class='single'><a href='#' id='list"+id+"' onclick='seeone(this.id)'>"+name+"</a><hr/>"+email+"</div><br/>";
 document.getElementById("init").innerHTML += populate;
 
 }
 		
 	}
 	
 	console.log(data)
 })
 .catch(()=>{
	 console.log("error")
 });
 }
}



const seeone = (theid) =>{
	let searchid = theid.replace("list","");
	console.log(searchid)
	fetch("/api/contact/"+searchid,{
		method:"GET",
		headers:new Headers({"Authorization":"Bearer "+localStorage.getItem('allcontacts')}),
		
	})
	.then((res)=>res.json())
	.then((data)=>{
		console.log(data)
		 	if(data.status=="success"){
 	if(formsect.classList.contains("show"))
 		formsect.classList.replace("show","hide");
 		
 	if(listsect.classList.contains("show"))
 		listsect.classList.replace("show","hide");
 singlesect.classList.replace("hide","show");
 let { id,name,email,phone,address } = data.data;
  let populate = "<div class='single'><table><tr><td>Name </td><td> "+name+"</td></tr><tr><td>Email </td><td> "+email+"</td></tr><tr><td>Phone </td><td> "+phone+"</td></tr><tr><td>Address </td><td> "+address+"</td></tr></table></div><br/>";
 
 document.getElementById("onecontact").innerHTML = populate;
 document.getElementById("remove").addEventListener("click",()=>getContacts(id));
 }
		
	})
	.catch(()=>{
	 console.log("error")
 });
	
}



let seeContact = document.getElementById("htag");

seeContact.addEventListener("click",()=>getContacts(0));