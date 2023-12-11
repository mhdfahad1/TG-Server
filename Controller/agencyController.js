const agencies = require('../Models/agencySchema')
const jwt=require('jsonwebtoken')

exports.registeragency = async (req, res) => {
    const {image,name,phone,email,address,password}=req.body
    // console.log(image,name,phone,email,address,password);
    try {
        const existingUser = await agencies.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exist ...please login!!!")

        } else {
            const newAgency = new agencies({
                image,name,phone,email,address,password
            })
            await newAgency.save()
            res.status(200).json(newAgency)

        }
    }
    catch (err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}
exports.agencyLogin = async (req, res) => {
    const { email, password } = req.body
    // console.log(email, password);
    try {
        const existingUser = await agencies.findOne({ email ,password})
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "superSecretKey123")
            res.status(200).json({
                existingUser,
                "role": "Agency",
                token
            })
        }else{
            res.status(404).json("incorrect email or password")

        }
    }
    catch(err) {
        res.status(401).json(`error transaction failed :${err}`)

    }

}

exports.getAllAgencies=async(req,res)=>{
    try{
       const result= await agencies.find()
        res.status(200).json(result)

    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}