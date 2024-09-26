const express=require("express")
const app=express()
const cors = require('cors')
require("dotenv").config()
const port =process.env.port
app.use(cors());
const connectBb=require("./config/connectDb")

const Player=require('./model/joueur')
const playerRoute=require('./routes/playerRoutes')

app.use(express.json())

connectBb()
app.use('/api/players',playerRoute)



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})