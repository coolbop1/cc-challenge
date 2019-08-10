import express from "express";
import {delaction,getaction,validateparam,validateinputs,savedData} from "../middleware/validateinput";
import {maketoken,showtoken,specific} from "../controllers"
import bodyParser from "body-parser";
const route = express.Router();

	route.use(express.json());
    route.use(bodyParser.text({ type: "*/*" }));
	route.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	next();
	});


route.post("/api/contact",validateinputs,savedData,maketoken);
route.delete("/api/contact/:contactid",validateparam,delaction,savedData,showtoken);

route.get("/api/contact",getaction,savedData,showtoken);

route.get("/api/contact/:contactid",validateparam,savedData,specific);

 module.exports = route;