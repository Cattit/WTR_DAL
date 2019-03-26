const db = require('./db')

function getUrlApi(id_source) {
    return db.query('SELECT url FROM "Source" WHERE id = $1 ', [id_source])
        .then(res => {
            return res.rows[0].url
        })
        .catch(e => console.error(e.stack))
}
module.exports.getUrlApi = getUrlApi;