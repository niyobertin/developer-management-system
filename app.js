import  express  from "express";
import db from './src/connection/config.js';
import routes from "./src/rout/index.js";
const app = express();
db();
app.use(express.json());
app.use("/developer",routes)
app.get("/developer",(req,res) => {
    res.send("this is the first method.")
})
app.listen(8000,()=>console.log('Server is running on port 8000...'));