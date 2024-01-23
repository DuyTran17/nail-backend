import bcrypt from "bcrypt"
import db from '../models/index'



//hash password
const salt = bcrypt.genSaltSync(10)

const hashPassword = (password) => {
    let hashpassword = bcrypt.hashSync(password, salt)
    return hashpassword;
}
// const addNewUser = (fname, lname, address, phone, username, password) => {

//     let hashpassword = hashPassword(password)
//     connection.query(
//         'INSERT INTO users (fname,lname,address,phone,username,password) VALUES (?,?,?,?,?,?);', [fname, lname, address, phone, username, hashpassword],
//         function (err, results, fields) {
//             console.log(results);
//             if (err) {
//                 console.log(err)
//             }
//         }
//     );
// }
const listUser = async () => {
    const list = await db.User.findAll({
        attributes: ['id', 'fname','lname','address','username']
    });
    return list

}
const checkUser = async(usernameInput, passwordInput) => {
    let hashpassword = hashPassword(passwordInput)

    const check = await db.User.findOne({
        where: {
            username: usernameInput,
        },
        raw: true,
    });
    if (bcrypt.compareSync(passwordInput, check.password))
        return check
    else return null
}
const deleteuser =async (userid) =>{
    if (typeof userid !== "undefined")
    await db.User.destroy({
        where: {
          id:userid
        }
      });
    else console.log(userid)
}

module.exports = {
    // addNewUser,
    listUser,
    checkUser,
    deleteuser
}