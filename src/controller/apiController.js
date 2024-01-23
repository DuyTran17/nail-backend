import { request } from 'express';
import userService from '../service/userService'
import productService from "../service/productService"
import orderService from "../service/orderService"
import bookingService from "../service/bookingService"

import fs from "fs"
import path from 'path'


const getuser = async (req, res) => {
    let list = await userService.listUser();
    console.log(list)
    return res.status(200).json(
        list
    )
    // let list = []
    // connection.query(
    //     'SELECT * FROM users ',
    //     function (err, results, fields) {
    //         list = results
    //         return list
    //         console.log(list)
    //         if (err) {
    //             console.log(err)
    //         }
    //     }
    //   );

}
const login = async (req, res) => {
    try {
        const check = await userService.checkUser(req.body.username, req.body.password)
        console.log(check)
        if (check !== null) {
            return res.status(200).json(
                {
                    id: check.id,
                    username: check.username,
                    status: true
                }
            )
        }
        else {
            return res.status(200).json(
                {
                    message: "Nhap sai mat khau hoac username"
                }
            )
        }
    } catch (error) {
        return res.status(200).json(
            {
                Error: error
            }
        )
    }
}
const deleteuserbyid = async (req, res) => {
    try {
        console.log('check req body', req.body.id)
        userService.deleteuser(req.body.id)
        return res.status(200).json(
            {
                message: "Delete succeed",
                id: req.body.id
            }
        )
    } catch (error) {
        return res.status(200).json(
            {
                Error: error
            }
        )
    }
}
const getproduct = async (req, res) => {
    try {
        let list = await productService.getproduct()
        console.log(list)
        return res.status(200).json(
            list
        )
    } catch (error) {
        return res.status(500).json(
            error
        )
    }

}
const deleteproductbyid = async (req, res) => {
    try {
        fs.unlinkSync(`src/public/images/${req.body.img}`);
        productService.deleteproduct(req.body.id)
        return res.status(200).json(
            {
                message: "Delete succeed",
                id: req.body.id
            }
        )
    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const addorder = async (req, res) => {
    try {
        // console.log(req.body)
        await orderService.addneworder(req.body)
        return res.status(200).json(
            {
                message: "add order success",
                info: req.body
            }
        )
    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const addorderdetail = async (req, res) => {
    try {
        console.log('check req', req.body)
        await orderService.addneworderdetail(req.body)
        return res.status(200).json(
            {
                message: "add order detail success",
                info: req.body
            }
        )
    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const getorder = async (req, res) => {
    try {
        const list = await orderService.getorder()
        return res.status(200).json(
            list
        )

    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const addNewBooking = async (req, res) => {
    try {
        console.log(req)
        // const list = await bookingService.addBooking(req.body)
        return res.status(200).json(
            {
                message: "add booking success",
                info: req
            }
        )

    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const getBooking = async (req, res) => {
    try {
        const list = await bookingService.getBooking()
        return res.status(200).json(
            list
        )

    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}
const addProduct = async (req, res) => {
    try {
        productService.AddProduct(req.body.id,req.body.productname,req.body.price,req.file.originalname)
        return res.status(200).json({
            message:'sucess',
        }
        )

    } catch (error) {
        return res.status(500).json(
            error
        )
    }
}

module.exports = {
    getuser, login, deleteuserbyid, getproduct, deleteproductbyid, addorder, addorderdetail, getorder, addNewBooking, getBooking, addProduct
}