
module.exports = {
    validateinputs : (req,res,next) => {
   let reqBody = Object.keys(JSON.parse(req.body));
   let inputFields = JSON.parse(req.body);
console.log(req.body);
   
   let errorMessage =[]
   for(let bt = 0; bt < reqBody.length && errorMessage.length < 1; bt++){
       //let inputFields = reqBody[bt];
      // console.log( inputFields.reqBody[bt]);

       if(typeof req.body.reqBody[bt] === "undefined" || req.body.reqBody[bt].trim() == "")
           errorMessage.push(reqBody[bt].replace("_"," ")+" is required");
       
   }		
   if(errorMessage.length > 0){
       let reply = {"status":409,"error" : errorMessage[0]};res.status(409).send(reply);return;
   }else{			
       for(let te = 0; te < reqBody.length; te++){
           let inputFields = reqBody[te];
           if(inputFields != "password")
           req[inputFields] = req.body[inputFields].trim().toLowerCase();
           else
           req[inputFields] = req.body[inputFields];
       }
       next();
   }}
}
   