import {intoArray} from "../services";

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
	
   }
}