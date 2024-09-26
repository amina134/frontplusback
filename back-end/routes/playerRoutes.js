const express=require("express")
const playerRoute=express.Router()

const{addPlayer,getPlayer,updatePlayer,deletePlayer,getAllPlayer}=require('../controllers/playerControllers')

playerRoute.use(express.json())


playerRoute.post('/addPlayer',addPlayer)

playerRoute.get('/getPlayer/:id',getPlayer)

playerRoute.patch('/updatePlayer/:id',updatePlayer)

playerRoute.delete('/deletePlayer/:id',deletePlayer)

playerRoute.get('/getAllPlayer',getAllPlayer)
module.exports=playerRoute