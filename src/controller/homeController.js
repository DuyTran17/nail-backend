import userService from '../service/userService'




const handleUserController = (req, res) => {
    return res.render("user.ejs")
}
const handleCreateUser =async (req, res) => {
    await console.log(req.body)
    // let fname = req.body.fname
    // let lname = req.body.lname
    // let address = req.body.address
    // let phone = req.body.phone
    // let password = req.body.password
    // let username = req.body.username
    // userService.addNewUser(fname,lname,address,phone,username,password)
    return res.send("OK")
}
const handleUploadController = (req, res) => {
    return res.render("upload.ejs")
}
module.exports = {
    handleUserController,
    handleCreateUser,
    handleUploadController
}