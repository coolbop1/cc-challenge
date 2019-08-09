import {intoArray} from "../services";

module.exports = {
	
	maketoken : (req,res) => {
   let theObject = req.body;
   async function addToArray(){
   	try{
   	let result = await intoArray(theObject);
   	result.status = "success";
   	console.log(result)
   	res.status(201).send(result);
   	}catch(e){
   		console.log(e)
   		res.status(403).send({"error":"error occured"});
   	}
   }
  
addToArray()
	
   }
}