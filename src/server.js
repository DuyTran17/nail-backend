import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
require('dotenv').config({path: './src/.env'});
import bodyParser from "body-parser"
import checkConnection from './config/connectdb'
var cors = require('cors');
import path from 'path'
import check from './config/config'
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENTURL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
configViewEngine(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')))

initWebRoutes(app)

checkConnection();
check
const PORT = process.env.PORT||8080 ;

app.listen(PORT,()=>{
    console.log("Server is running on port:"+PORT)

})