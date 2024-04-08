const express = require('express')
const customerRouter = express.Router()
const customerSQL = require('../db/customerSQL')
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWTSECRET || "SHHH"


//get current customer
customerRouter.get("/current", async(req,res,next)=>{
    try {
        console.log(jwt.verify(jwt,req.headers.authorization.split(" ")[1] ))
       // console.log(req.headers.authorization && req.headers.authorization.split(" ")[1])
        res.send("testing")
    } catch (error) {
        next(error)
    }
})
//get all customers
customerRouter.get("/", async(req,res,next)=>{
    try {
        const customers = await customerSQL.getAllCustomers()
        res.send(customers)
    } catch (error) {
        next(error)
    }
})
customerRouter.get("/:id", async(req,res,next)=>{
    try {
        const customer = await customerSQL.getACustomer(req.params.id)
        res.send(customer)
    } catch (error) {
        next(error)
    }
})

//adds to cart
customerRouter.post("/:id/cart/add")

module.exports = customerRouter