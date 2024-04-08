const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL||'postgres://admin:doYBTuRVdG2ICaeBaLO2QHmuqYYcfXLn@dpg-cnu88qljm4es73cok3ag-a.oregon-postgres.render.com/test_ktqz')

module.exports = client