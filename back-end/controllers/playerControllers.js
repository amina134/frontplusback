const playerSchema=require('../model/joueur')

const addPlayer=async(req,res)=>{
    try {
        const newPlayer=new playerSchema(req.body)
        await newPlayer.save()
        res.status(200).json({msg:'u added new Player',newPlayer})
    } catch (error) {
        console.error(error);
        res.send('u have a problem')
    }
}

const getPlayer=async (req,res)=>{
  try {
    const player=await playerSchema.findById(req.params.id)
    if (player)
      {res.status(200).json(player)}
    else{
       res.status(404).json({message:"Player not found"}) 
    }
    
  } catch (error) {
    res.status(500).json({message:"error getting Player"})
  }
}

const updatePlayer=async(req,res)=>{
    try {
        const playerId=req.params.id
        const updatedPlayer =await playerSchema.findByIdAndUpdate(playerId,req.body)
        if (updatedPlayer){
            console.log("data updated")
            res.status(200).json({msg:'u added new Player',updatePlayer})
        }
        else{
            res.status(404).json({ message: 'Player not found' })
        }
    } catch (error) {
        console.error("there is an error")
    }
}

const deletePlayer=async(req,res)=>{
    try {
        const playerId=req.params.id
        const deletedPlayer= await playerSchema.findByIdAndDelete(playerId,req.body)
        if (deletePlayer){
            console.log("deleted")
        }
    } catch (error) {
        console.error("not  deleted")
    }
}

// get all 
const getAllPlayer=async(req,res)=>{
    try {
        const players=await playerSchema.find()
        res.status(200).json(players)
    } catch (error) {
        console.error("mission failed")
    }
}
module.exports={addPlayer,getPlayer,updatePlayer,deletePlayer,getAllPlayer}