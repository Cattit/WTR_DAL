const db = require('../db')

function saveRealData(dataForecast, id_location) {
  return db.query('INSERT INTO "ActualWeather"(id_location, source, temperature, wind_speed_from, wind_speed_to, wind_gust, snow, rain, sand, squall, mist, storm, drizzle, rainsnow, rainfall_from, rainfall_to, type_day, date_start, date_end) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
    [id_location, dataForecast.source, dataForecast.temperature, dataForecast.wind_speed.from, dataForecast.wind_speed.to, dataForecast.wind_gust, dataForecast.rainfall.snow, dataForecast.rainfall.rain, dataForecast.rainfall.sand, dataForecast.rainfall.squall, dataForecast.rainfall.mist, dataForecast.rainfall.storm, dataForecast.rainfall.drizzle, dataForecast.rainfall.rainsnow, dataForecast.amount_rainfall.from, dataForecast.amount_rainfall.to, dataForecast.date.type_day, dataForecast.date.date_start, dataForecast.date.date_end])
    .then(res => {
      // console.log(res.rows[0])
      return res.rows[0].id
    })
    .catch(e => console.error(e.stack))
}
module.exports.saveRealData = saveRealData;

function search(date_start, date_end, id_location) {  // поиск прогноза по датам и городу
  return db.query('SELECT id FROM "ActualWeather" WHERE date_start = $1 AND date_end = $2 AND id_location = $3', [date_start, date_end, id_location])
    .then(res =>
      res.rows[0].id)
    .catch(e => console.error(e.stack))
}
module.exports.search = search;

module.exports.getweatherForHours = (id_location, date_start, date_end) => {  // поиск прогноза по id ячейки, id города, датам
  return db.query('SELECT * FROM "ActualWeather" WHERE id_location = $1 AND date_start >= $2 AND date_end <= $3', [id_location, date_start, date_end])
    .then(res => {
      return res.rows
    })
    .catch(e => console.error(e.stack))
}