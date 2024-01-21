import express from "express"
const router = express.Router();

import apiController from '../controller/apiController'
const initWebRoutes =(app) =>{
    router.get("/api",(req,res)=>{
        return res.send("This is api route")
    })

    router.get('/api',apiController.getdata)
    router.post('/api/login',apiController.login)
    router.post('/api/getuser',apiController.login)
    return app.use("/",router);

}
export default initWebRoutes