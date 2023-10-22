const {Pool} = require('../server/node_modules/pg')

const pool = new Pool(
    {
        user : process.env.PGUSER,
        database : process.env.PGDATABASE,
        host : process.env.PGHOST,
        port : process.env.PGPORT,
        password : process.env.PGPASSWORD
    }
)

module.exports = {
    query : (text , params)=>pool.query(text , params),
}