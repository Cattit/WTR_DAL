const db = require('./db')

module.exports.saveRaiting = (source, mark, depth_forecast, date, id_location) => {
    return db.query('INSERT INTO "Raiting"(source, mark, depth_forecast, date, id_location) VALUES($1, $2, $3, $4, $5) RETURNING *', [source, mark, depth_forecast, date, id_location])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}