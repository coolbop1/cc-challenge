import jwt from "jsonwebtoken";

module.exports = {
	intoArray : (theobject,existingContact)=>{
		console.log(existingContact)
		let { contact } = existingContact;
		for(let it = 0; it < contact.length;it++){
			let resetId = it + 1;
			contact[it].id = resetId; 
		}
		theobject.id = contact.length + 1;
		
		return new Promise(function(resolve,reject	){
			if(typeof theobject === undefined){
			reject("error occured")
			}else{
				
				contact.push(theobject);
				let contactss = {
					contact : contact
				}
				let newContacts = jwt.sign({user : contactss}, "ourlittlesecret", { expiresIn: "24h" });//expires in 24 hours }
				//console.log(newContacts)
				resolve(newContacts)
			}
		})
	}
}