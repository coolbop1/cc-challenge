import express from "express";
import {validateinputs} from "../middleware/validateinput"
import jwt from "jsonwebtoken";
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

let contact = [];

route.post("/api/contact",validateinputs,(req,res)=>{
	//console.log(req.body);
	contact.push(req.body);
	res.send({"data":req.body})
 });

 module.exports = route;


