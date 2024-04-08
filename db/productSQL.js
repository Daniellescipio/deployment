const client = require('./client')

const getAllBirds = async ()=>{
    SQL = `
        SELECT * FROM birds;
    `
    const response = await client.query(SQL)
    return response.rows
}
const getABird = async (id)=>{
    SQL = `
    SELECT * FROM birds
    Where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}

module.exports = {getAllBirds, getABird}