const db = require('./db')

module.exports.saveRaiting = (id_source, mark, depth_forecast, date, id_location) => {
    return db.query('INSERT INTO "Raiting"(id_source, mark, depth_forecast, date, id_location) VALUES($1, $2, $3, $4, $5) RETURNING *', [id_source, mark, depth_forecast, date, id_location])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}

module.exports.getDepthSourceLocation = () => {
    return db.query('SELECT "Depth".id_source, "Depth".depth, "Location".id AS id_location FROM "Depth" CROSS JOIN "Location"')
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}
