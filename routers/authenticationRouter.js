const express = require('express')
const authRouter = express.Router()
const customerSQL = require('../db/customerSQL')
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWTSECRET || "SHHH"
const bcrypt = require('bcrypt')

//register Route
authRouter.post('/register', async (req, res, next)=>{
    try {

        const customer = await customerSQL.getACustomerwithEmail(req.body.email)
        if(!customer){
            console.log(req.body.password, req.body.email, "adding to SQL")
            const newCustomer = await customerSQL.addACustomer(req.body.email, req.body.password)
            const token = jwt.sign(newCustomer.id, JWTSECRET)
            res.send({token, newCustomer})
        }else{
            res.send("This email is taken, try loggin in!")
        }
    } catch (error) {
        next(error)
    }
}) 

//Login Route
authRouter.post('/login', async (req, res, next)=>{
    try {

        const customer = await customerSQL.getACustomerwithEmail(req.body.email)
        if(!customer){
            res.status(500).send("Wrong email or password")
        }else if (!(await bcrypt.compare(req.body.password, customer.password))){
             res.status(500).send("Wrong email or password")
        }else{
            const token = jwt.sign(customer.id, JWTSECRET)
            res.send({token, customer})
        }
    } catch (error) {
        next(error)
    }
}) 

module.exports = authRouter