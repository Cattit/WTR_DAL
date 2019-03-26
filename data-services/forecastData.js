const db = require('../db')

function getIdForecast(id_source, date) {  // получить id ячейки прогноза по ресурсу и дате
  return db.query('SELECT id FROM "Forecast"  WHERE id_source = $1 AND date = $2', [id_source, date])
    .then(res => {
      return res.rows[0].id
    })
    .catch(e => console.error(e.stack))
}
module.exports.getIdForecast = getIdForecast;

module.exports.saveForecast = (id_source, date) => { //сохранение данных в таблицу ячейки проноза
  return db.query('INSERT INTO "Forecast"(id_source, date) VALUES($1, $2) RETURNING *', [id_source, date])
    .then(res => {
      return res.rows[0].id
    })
    .catch(e => console.error(e.stack))
}

module.exports.saveForecastData = (dataForecast, id_forecast, id_location) => { // сохранение данных в таблицу прогноза
  return db.query('INSERT INTO "ForecastsLocation"(id_location, id_forecast, depth_forecast, temperature, wind_speed_from, wind_speed_to, wind_gust, amount_rainfall, type_day, date_start, date_end, snow, rain, sand, squall, mist, storm, drizzle, rainsnow, grad, hard_wind, hard_heat, hard_frost, hard_rainfall) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) RETURNING *',
    [id_location, id_forecast, dataForecast.depth_forecast, dataForecast.temperature, dataForecast.wind_speed.from, dataForecast.wind_speed.to, dataForecast.wind_gust, dataForecast.amount_rainfall, dataForecast.date.type_day, dataForecast.date.date_start, dataForecast.date.date_end, dataForecast.rainfall.snow, dataForecast.rainfall.rain, dataForecast.rainfall.sand, dataForecast.rainfall.squall, dataForecast.rainfall.mist, dataForecast.rainfall.storm, dataForecast.rainfall.drizzle, dataForecast.rainfall.rainsnow, dataForecast.rainfall.grad, dataForecast.rainfall.hard_wind, dataForecast.rainfall.hard_heat, dataForecast.rainfall.hard_frost, dataForecast.rainfall.hard_rainfall])
    .then(res => {
      return res.rows.map(r => r.id)
    })
    .catch(e => console.error(e.stack))
}

module.exports.getForecastData = (id_forecast, id_location, date_start, date_end) => {  // поиск прогноза по id ячейки, id города, датам
  return db.query('SELECT * FROM "ForecastsLocation" WHERE id_forecast = $1 AND id_location = $2 AND date_start = $3 AND date_end = $4', [id_forecast, id_location, date_start, date_end])
    .then(res => {
      return res.rows
    })
    .catch(e => console.error(e.stack))
}

module.exports.getForecastDataLeftJoin = (id_source, date_forecast, id_location, date_start, date_end) => {  // поиск прогноза через left_join с таблицей forecast
  return db.query('SELECT * FROM "ForecastsLocation" fl LEFT OUTER JOIN "Forecast" f ON f.id = fl.id_forecast WHERE f.id_source = $1 AND f.date = $2 AND fl.id_location = $3 AND fl.date_start = $4 AND fl.date_end = $5', [id_source, date_forecast, id_location, date_start, date_end])
    .then(res => {
      return res.rows
    })
    .catch(e => console.error(e.stack))
}