const db = require('./db')

module.exports.saveRaiting = (id_source, mark, depth_forecast, date_start, id_location, date_end) => {
    return db.query('INSERT INTO "Raiting"(id_source, mark, depth_forecast, date_start, id_location, date_end) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [id_source, mark, depth_forecast, date_start, id_location, date_end])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}

module.exports.changeRaiting = (id_source, mark, depth_forecast, date_start, id_location, date_end) => {
    return db.query('UPDATE "Raiting" SET mark = $2 WHERE id_source = $1 AND depth_forecast = $3 AND date_start = $4 AND id_location = $5 AND date_end = $6 RETURNING *', [id_source, mark, depth_forecast, date_start, id_location, date_end])
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

module.exports.getRaiting = (id_source, depth_forecast, date_start, id_location, date_end) => {
    return db.query('SELECT mark FROM "Raiting" WHERE id_location = $1 AND id_source = $2 AND depth_forecast = $3 AND date_start = $4 AND date_end = $5', [id_location, id_source, depth_forecast, date_start, date_end])
        .then(res => {
            return res.rows[0].mark
        })
        .catch(e => console.error(e.stack))
}

module.exports.getRaitingAvgDaily = (id_source, depth_forecast, date_start, id_location, date_end) => {
    return db.query('SELECT avg(mark) FROM "Raiting" WHERE id_location = $1 AND id_source = $2 AND depth_forecast = $3 AND date_start >= $4 AND date_start <= $5 AND date_start = date_end', [id_location, id_source, depth_forecast, date_start, date_end])
        .then(res => {
            return res.rows[0].avg
        })
        .catch(e => console.error(e.stack))
}