import db from '../models/index'
const addneworder = async (order) => {
    const add = await db.Order.create(
        {
            order_id: order.order_id,
            guest_name: order.guest_name,
            address: order.address,
            phone: order.phone,
            payment: order.payment,
            total: order.total,
        }, { fields: ['order_id', 'guest_name', 'address', 'phone', 'payment', 'total'] });
}
const addneworderdetail = async (order) => {

    const add = await db.CartDetail.create(
        {
            order_id: order.order_id,
            product_id: order.product_id,
            quanity: order.quanity,
            unit_price: order.unit_price,
            total_price: order.total_price,
        }, { fields: ['order_id', 'product_id', 'quanity', 'unit_price', 'total_price'] });
}
const getorder = async (req, res) => {

    let listorder = await db.Order.findAll({
        attributes: ['order_id', 'guest_name', 'address', 'phone', 'payment', 'total'],
        raw: true,
    });
    
    return getorderdetail(listorder)
}
const getorderdetail = async (listorder) => {
    let list = []
    for (let i = 0;i<listorder.length; i++) {
        listorder[i].listProduct = await db.CartDetail.findAll({
            attributes: ['order_id', 'product_id', 'quanity', 'unit_price', 'total_price'],
            where: {
                order_id: listorder[i].order_id
            },
            raw: true,
        })
        list.push(listorder[i])

    }
    console.log(list)
    return list
}
module.exports = {
    addneworder, addneworderdetail, getorder
}