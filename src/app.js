import express from "express" ;
import { createRequire } from "module";
import router from "./routes/routes.js"

const app = express(); 
const port = process.env.PORT || 3000;
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

app.use(express.json());
app.set("json spaces", 2);
app.listen(port, () => {console.log(`Listening on port:${port}`)});

app.use("/api_routes", router);

app.get("/", (req, res) => {
    res.json({"action": "Welcome to Landing Page",
              "author": pkg.author,
              "description": pkg.description});
})

