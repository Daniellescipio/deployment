const client = require('./client')
const bcrypt = require('bcrypt')

const getAllCustomers = async ()=>{
    SQL = `
        SELECT * FROM  customers;
    `
    const response = await client.query(SQL)
    return response.rows
}
const getACustomer = async (id)=>{
    SQL = `
    SELECT * FROM customers
    Where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const getACustomerwithEmail = async (email)=>{
    SQL = `
    SELECT * FROM customers
    Where email = $1;
    `
    const response = await client.query(SQL, [email])
    console.log(response.rows, "here")
    return response.rows[0]
}

const addACustomer = async (email, password)=>{
    SQL = `
    INSERT INTO customers(email, password)
    Values($1, $2)
    Returning *;
    `
    const response = await client.query(SQL, [email, await bcrypt.hash(password, 5) ])
                                                    //await bcrypt.hash(password, 5)
    return response.rows[0]
}

module.exports = {getAllCustomers, getACustomer, addACustomer, getACustomerwithEmail}