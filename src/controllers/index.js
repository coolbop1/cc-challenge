import {intoArray} from "../services";
import jwt from "jsonwebtoken";

module.exports = {
	
	maketoken : (req,res) => {
	let theObject = req.body;
	let existingContact =  req.token.user;
	//thebody.id = existingContact.contact.length + 1;
   async function addToArray(){
   	try{
		let result = await intoArray(theObject,existingContact);
		let results = {
			status : "success",
			token : result
		}
   	
   	//console.log(results)
   	res.status(201).send(results);
   	}catch(e){
   		console.log(e)
   		res.status(403).send({"error":"error occured"});
   	}
   }
  
addToArray()
	
   },
   showtoken : (req,res) => {
   	let {contact} =  req.token.user;
  // console.log(contact);
  if(req.action == "del"){
   		let found = contact.find(u => {return u.id == req.search;});
   		let index = contact.indexOf(found); if (index > -1) { 
   		contact.splice(index, 1);
   		for(let it = 0; it < contact.length;it++){
			let resetId = it + 1;
			contact[it].id = resetId; 
		}
		let contactss = {
					contact : contact
				}
		let newToken = jwt.sign({user : contactss}, "ourlittlesecret", { expiresIn: "24h" });//expires in 24 hours }
   		res.status(200).send({
   		status:"success",
   		newtoken : newToken,
   		data:contact
   		
   		});
   		}
   		 }else{
   	res.status(200).send({
   		status:"success",
   		data:contact
   		
   		});
   		}
   },
   specific : (req,res) => {
   	
   	let {contact} =  req.token.user;
   	let found = contact.find(u => {return u.id == req.search;});
if(found){
  if(req.action && req.action == "edit"){
  	
  	found.name = req.body.name;
  	found.email = req.body.email;
  	found.phone = req.body.phone;
  	found.address = req.body.address;
  	
  	let contactss = {
					contact : contact
				}
		let newToken = jwt.sign({user : contactss}, "ourlittlesecret", { expiresIn: "24h" });//expires in 24 hours }
  	res.status(200).send({
   		status:"success",
   		data:found,
   		newtoken : newToken
   		})
  }else{
   res.status(200).send({
   		status:"success",
   		data:found
   		
   		});	
   		}
   		
   		}
   
   }
}