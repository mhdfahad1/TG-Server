
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./Routes/route')
require('./DB/connection')
const travelGuide = express()

travelGuide.use(cors())
travelGuide.use(express.json())
travelGuide.use(router)
const PORT = 4000 || process.env.PORT

travelGuide.listen(PORT, () => {
    console.log(`Travel Guide Server Started at Port :${PORT}`);
})

travelGuide.get('/',(req,res)=>{
    res.send('<h1>Travel Guide Server Started and Waiting For client request!!!</h1>')
})
