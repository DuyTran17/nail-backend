import db from '../models/index'
import path from 'path'
import multer from 'multer'
import formidable from 'formidable';
const getproduct= async()=>{
    const list = await db.Product.findAll({
        attributes: ['id', 'productName','productImages','price']
    });
    return list
}
const deleteproduct =async (product_id) =>{
    if (typeof product_id !== "undefined")
    await db.Product.destroy({
        where: {
          id:product_id
        }
      });
    else console.log('fail',product_id)
}

const AddProduct = async (id,productname,price,file) =>{
    const add = await db.Product.create(
        {
            productName: productname,
            productImages: id+path.parse(file).ext,
            price: price,

        }, { fields: ['productName','productImages','price'] });
}   
module.exports={
    getproduct,deleteproduct,AddProduct
}