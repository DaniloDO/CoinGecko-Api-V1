import express from "express" ;
import { createRequire } from "module";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mysql from "mysql";
import myconnection from "express-myconnection";

import router from "./routes/routes.js"


const app = express(); 
const port = process.env.PORT || 3000;
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
const dbconfig = {
    "host": "localhost",
    "user": "newuser",
    "password": "password",
    "port": 3306,
    "database": "TestDataBase"
};

app.use(express.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use(cookieParser());
app.use(myconnection(mysql, dbconfig, "single"));
app.use("/api_routes", router);

app.set("json spaces", 2);
app.listen(port, () => {console.log(`Listening on port:${port}`)});

app.get("/", (req, res) => {
    res.json({"action": "Welcome to Landing Page",
              "author": pkg.author,
              "description": pkg.description});
});
