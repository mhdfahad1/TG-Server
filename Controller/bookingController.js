const bookings = require('../Models/bookingSchema')
const users = require('../Models/UseSchema')

exports.BookaPackage=async(req,res)=>{
    const userId=req.payload
    // console.log(userId);
    const {_id,packagename,description,image,foodimage,foodDescription,stayimage,stayDescription,activityimages,activityDescription,placename,price,adults,datefrom,dateto,phone,custId}=req.body
    try{
        const existingPackage=await bookings.findOne({_id})
        if(existingPackage){
            res.status(406).json("Package already Added to your Booking ")

        }else{
            const newBooking=new bookings({
                _id,packagename,description,image,foodimage,foodDescription,stayimage,stayDescription,activityimages,activityDescription,placename,price,adults,datefrom,dateto,phone,custId,userId
            })
            await newBooking.save()
            res.status(200).json(newBooking)
        }
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getbookedPackages = async (req, res) => {
    const userId = req.payload
    try {
        const result = await bookings.find({ userId })
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)
        console.log(err);

    }
}


exports.getAgencybookedPackage = async (req, res) => {
    const {custId} = req.body
    try {
        const result = await bookings.find({ custId })
        const userDetails=await users.findOne({})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)
        console.log(err);

    }
}
exports.deleteBooking=async(req,res)=>{
    // const {userId}=req.payload
    const {_id}=req.params
    try{
        const result=await bookings.deleteOne({_id})
        res.status(200).json(result)
    }catch (err) {
        res.status(401).json(err)
        console.log(err);

    }
}
