const client = require('./client')
const bcrypt = require('bcrypt')

const createTables = async ()=>{
    const SQL = `
        DROP TABLE IF EXISTS birds CASCADE;
        DROP TABLE IF EXISTS customers CASCADE;

        CREATE TABLE birds(
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(255) NOT NULL UNIQUE,
            species VARCHAR(255),
            price INTEGER NOT NULL,
            migration BOOLEAN NOT NULL
        );
        CREATE TABLE customers(
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            cart VARCHAR(255)[],
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now()
        );
    `
    await client.query(SQL)
}
const addBird = async ({name, species, price, migration})=>{
    const SQL = `
        INSERT INTO birds(name, species, price, migration)
        VALUES($1,$2,$3,$4)
        RETURNING *;
    `
    const newBird = await client.query(SQL,[name, species, price, migration])
    return newBird.rows[0]
}

const addCustomer = async ({email, password})=>{
    const SQL = `
        INSERT INTO customers(email, password)
        VALUES($1,$2)
        RETURNING *;
    `
    const newCustomer = await client.query(SQL,[email, await bcrypt.hash(password, 5)])
    return newCustomer.rows[0]
}




module.exports = {createTables, addBird, addCustomer}