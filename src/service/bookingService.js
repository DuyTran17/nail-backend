import db from '../models/index'

const addBooking= async(booking)=>{
    const add = await db.Booking.create(
        {
            name: booking.name,
            phone: booking.phone,
            service: booking.service,
            date: booking.date,
            time: booking.time,
        }, { fields: ['name', 'phone', 'service', 'date', 'time'] });
}
const getBooking = async (req, res) => {

    let list = await db.Booking.findAll({
        attributes: ['id','name', 'phone', 'service', 'date', 'time'],
        raw: true,
    });
    return list
}

module.exports={
    addBooking,
    getBooking
    
}