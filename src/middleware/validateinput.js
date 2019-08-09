
module.exports = {
    validateinputs : (req,res,next) => {
   let reqBody = Object.keys(JSON.parse(req.body));
   let inputFields = JSON.parse(req.body);
//console.log(reqBody[0]);
   
   let errorMessage =[]
   for(let bt = 0; bt < reqBody.length && errorMessage.length < 1; bt++){
       let inputs = reqBody[bt]  

       if(typeof reqBody[bt] === "undefined" || reqBody[bt].trim() == "")
           errorMessage.push(reqBody[bt].replace("_"," ")+" is required");
       
   }		
   if(errorMessage.length > 0){
       let reply = {"status":409,"error" : errorMessage[0]};res.status(409).send(reply);
       //console.log(reply);
       return;
   }else{	
   req.body = JSON.parse(req.body);	
       next();
   }}
}
   