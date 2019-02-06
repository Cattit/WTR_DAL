const db = require('./db')
const pool = db.getPool();

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}