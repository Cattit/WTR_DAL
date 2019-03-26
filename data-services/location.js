const db = require('../db')

function getIdLocationByCoords(lat, lon) {
    return db.query('SELECT id FROM "Location" WHERE lat = $1 AND lon = $2', [lat, lon])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}
module.exports.getIdLocationByCoords = getIdLocationByCoords;

function getIdLocationByUrl(url) {
    return db.query('SELECT id FROM "Location" WHERE url_gismeteo = $1', [url])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}
module.exports.getIdLocationByUrl = getIdLocationByUrl;

function getIdLocationByCode(code) {
    return db.query('SELECT id FROM "Location" WHERE code_accuweather = $1', [code])
        .then(res => {
            return res.rows[0].id
        })
        .catch(e => console.error(e.stack))
}
module.exports.getIdLocationByCode = getIdLocationByCode;

function getAllLocationCoordsId() {
    return db.query('SELECT id, lat, lon FROM "Location"')
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}
module.exports.getAllLocationCoordsId = getAllLocationCoordsId;

function getAllLocationUrlId() {
    return db.query('SELECT id, url_gismeteo FROM "Location"')
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}
module.exports.getAllLocationUrlId = getAllLocationUrlId;

function getAllLocationCodeId() {
    return db.query('SELECT id, code_accuweather FROM "Location"')
        .then(res => {
            return res.rows
        })
        .catch(e => console.error(e.stack))
}
module.exports.getAllLocationCodeId = getAllLocationCodeId;