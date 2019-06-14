const db = require('./db')

function getUrlApi(id_source) {
    return db.query('SELECT url FROM "Source" WHERE id = $1 ', [id_source])
        .then(res => {
            return res.rows[0].url
        })
        .catch(e => console.error(e.stack))
}
module.exports.getUrlApi = getUrlApi;

function getDepthSource() {
    return db.query('SELECT "Source".name, "Depth".id_source, "Depth".depth FROM "Depth" LEFT JOIN "Source" ON "Source".id = "Depth".id_source ORDER BY "Source".name, depth')
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}
module.exports.getDepthSource = getDepthSource;