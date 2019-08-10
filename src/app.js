import express from "express";

const port = process.env.PORT || 5000;
const app = express();


app.use("/",express.static("client"));


app.listen(port,()=>{
	console.log("listening on :"+port);
})
import  route  from "./routes";
app.use("/", route);