const users = require('../Models/UseSchema')
const jwt = require('jsonwebtoken')
// signup

exports.userSighnup = async (req, res) => {
    console.log('inside contrller');
    const { name, phone, email, password } = req.body
    // console.log(name, phone, email, password);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exist ...please login!!!")

        } else {
            const newUser = new users({
                name, phone, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch (err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}
// login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    // console.log(email, password);
    try {
        const existingUser = await users.findOne({ email,password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "superSecretKey123")
            res.status(200).json({
                existingUser,
                "role": "User",
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

