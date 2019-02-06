const db = require('../db')

function getIdForecast(source, date) {  // получить id ячейки прогноза по ресурсу и дате
  return db.query('SELECT id FROM "Forecast"  WHERE source = $1 AND date = $2', [source, date])
    .then(res => {
      return res.rows[0].id
    })
    .catch(e => console.error(e.stack))
}
module.exports.getIdForecast = getIdForecast;

module.exports.saveForecast = (source, date) => { //сохранение данных в таблицу ячейки проноза
  return db.query('INSERT INTO "Forecast"(source, date) VALUES($1, $2) RETURNING *', [source, date])
    .then(res => {
      // console.log(res.rows[0].id);
      return res.rows[0].id
    })
    .catch(e => console.error(e.stack))
}

module.exports.saveForecastData = (dataForecast, id_forecast, id_location) => { // сохранение данных в таблицу прогноза
  return db.query('INSERT INTO "ForecastsLocation"(id_location, id_forecast, depth_forecast, temperature, wind_speed_from, wind_speed_to, wind_gust, amount_rainfall, type_day, date_start, date_end, snow, rain, sand, squall, mist, storm, drizzle, rainsnow) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
    [id_location, id_forecast, dataForecast.depth_forecast, dataForecast.temperature, dataForecast.wind_speed.from, dataForecast.wind_speed.to, dataForecast.wind_gust, dataForecast.amount_rainfall, dataForecast.date.type_day, dataForecast.date.date_start, dataForecast.date.date_end, dataForecast.rainfall.snow, dataForecast.rainfall.rain, dataForecast.rainfall.sand, dataForecast.rainfall.squall, dataForecast.rainfall.mist, dataForecast.rainfall.storm, dataForecast.rainfall.drizzle, dataForecast.rainfall.rainsnow])
    .then(res => {
      // console.log(res.rows[0])
      return res.rows.map(r => r.id)
    })
    .catch(e => console.error(e.stack))
}

module.exports.getForecastData = (id_forecast, id_location, date_start, date_end) => {  // поиск прогноза по id ячейки, id города, датам
  return db.query('SELECT * FROM "ForecastsLocation" WHERE id_forecast = $1 AND id_location = $2 AND date_start = $3 AND date_end = $4', [id_forecast, id_location, date_start, date_end])
    .then(res => {
      // console.log(res.rows)
      return res.rows
    })
    .catch(e => console.error(e.stack))
}
