import mysql2 from 'mysql2/promise';
import mysql from 'mysql2';
import bcrypt from "bcrypt"
import db from '../models/index'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs',
});


//hash password
const salt = bcrypt.genSaltSync(10)

const hashPassword = (password) => {
    let hashpassword = bcrypt.hashSync(password, salt)
    return hashpassword;
}
const addNewUser = (fname, lname, address, phone, username, password) => {

    let hashpassword = hashPassword(password)
    connection.query(
        'INSERT INTO users (fname,lname,address,phone,username,password) VALUES (?,?,?,?,?,?);', [fname, lname, address, phone, username, hashpassword],
        function (err, results, fields) {
            console.log(results);
            if (err) {
                console.log(err)
            }
        }
    );
}
const listUser = async () => {
    //create connection to database
    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'nodejs',
    // });
    // try {
    //     const [results, fields] = await connection.query(
    //         'SELECT * FROM users'
    //     );
    //     return results
    // } catch (err) {
    //     console.log(err);
    // }
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
    addNewUser,
    listUser,
    checkUser,
    deleteuser
}