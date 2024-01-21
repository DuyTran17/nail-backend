import express from "express"
const fs = require('fs');
const path = require('path')
import formidable from "formidable";
const router = express.Router();
var bodyParser = require('body-parser')
import homeController from '../controller/homeController'
import upload from '../middleware/uploadMiddleware'
import apiController from '../controller/apiController'
const initWebRoutes = (app) => {
    var jsonParser = bodyParser.json()
    router.get("/", (req, res) => {
        return res.send("Hello world")
    })
    router.get("/user", homeController.handleUserController)
    router.post("/user/create-user", jsonParser,homeController.handleCreateUser)
    router.post('/api/login', apiController.login)
    router.get('/api/getuser', apiController.getuser)
    router.post('/api/deleteuserbyid', apiController.deleteuserbyid)
    router.get('/api/getproduct', apiController.getproduct)
    router.post('/api/deleteproductbyid', apiController.deleteproductbyid)
    router.post('/api/addorder', apiController.addorder)
    router.post('/api/addorderdetail', apiController.addorderdetail)
    router.post('/api/addbooking', apiController.addNewBooking)
    router.post('/api/addproduct',upload.single('file'), apiController.addProduct)
    router.get('/api/getorder', apiController.getorder)
    router.get('/api/getBooking', apiController.getBooking)
    router.get('/upload', homeController.handleUploadController);
    return app.use("/", router);

}
export default initWebRoutes