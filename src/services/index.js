
module.exports = {
	intoArray : (theobject)=>{
		let contact = [];
		return new Promise(function(resolve,reject	){
			if(typeof theobject === undefined){
			reject("error occured")
			}else{
				contact.push(theobject);
				resolve(theobject)
			}
		})
	}
}