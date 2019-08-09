import jwt from "jsonwebtoken";

module.exports = {
    validateinputs : (req,res,next) => {
   let reqBody = Object.keys(req.body);
   let inputFields = req.body;
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
   req.body = req.body;	
       next();
   }}
   ,
   savedData: function (req, res, next) { 
		const bearerHeader = req.headers["authorization"];
		if (typeof bearerHeader !== "undefined") {  
		const berarer = bearerHeader.split(" "); 
		const bearerToken = berarer[1]; 
		req.token = bearerToken;
		jwt.verify(req.token, "ourlittlesecret", function(err, data) {
			if (err) {
				req.token={user:{contact:[]}};
                next();
		}else{
            req.token=data;
			next();
		}; });
        } else {  req.token={user:{contact:[]}};
        next();
    }
	}
}
   