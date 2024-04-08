const express = require('express')
const app = express()
const client = require('./db/client')
client.connect()
const {createTables, addBird, addCustomer} = require('./db/seed')
const rawBirds = require('./db/productData')
const {faker} = require('@faker-js/faker')
const cors = require('cors')
app.use(cors())
app.use(express.json())
//faker.faker
app.use("/auth", require('./routers/authenticationRouter'))
app.use("/customers", require('./routers/customerRouter'))
app.use("/birds", require('./routers/productRouter'))

const init= async()=>{
    //create tables
    await createTables()
    //create birds
    //unresolved promises
    const unresolvedBirds = rawBirds.map(bird=>addBird(bird))
    const processedBirds = await Promise.all(unresolvedBirds)
    //console.log(processedBirds)
    //create customers
    for(let i=0;i<10;i++){
        const newCustomer = {
            email: faker.internet.email(),
            password : "password"
        }
       const processedCustomer= await addCustomer(newCustomer)
    }
    app.listen(3000, ()=>{
        console.log("The server is running and we are connected to the database")
    })
}

init()