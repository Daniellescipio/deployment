const express = require('express')
const birdRouter = express.Router()
const productSQL = require('../db/productSQL')

//get all birds
birdRouter.get("/", async(req,res,next)=>{
    try {
        const birds = await productSQL.getAllBirds()
        res.send(birds)
    } catch (error) {
        next(error)
    }
})

//get a bird
birdRouter.get("/:id", async(req,res,next)=>{
    try {
        const bird = await productSQL.getABird(req.params.id)
        res.send(bird)
    } catch (error) {
        next(error)
    }
})

module.exports = birdRouter