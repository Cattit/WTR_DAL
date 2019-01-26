const db = require('../db')
var pool = db.getPool();

function saveData(dataForecast){ 
  console.log("GET NOW DATA!")
  console.log(dataForecast.date)
//   let depth_forecast
//   for (let i = 0; i<6; i++){
//     let id = 5
 
//     pool.query('INSERT INTO "Forecast"(id, sourse, date) VALUES($1, $2, $3) RETURNING *', [id, dataForecast.get(i).sourse, dataForecast.get(i).date])
//       .then(res => {
//         console.log(res.rows[0])
//       })
//       .catch(e => console.error(e.stack))

//     depth_forecast = i;
//     if (depth_forecast%2==0) 
//       depth_forecast += 1 //1 3 5
//     pool.query('INSERT INTO "ForecastsLocation"(id, id_location, id_forecast, depth_forecast, temperature, wind_speed, wind_guest, rainfall, amount_rainfall, type_day) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', 
//     [id, id_location, id_forecast, depth_forecast, dataForecast.get(i).temperature, dataForecast.get(i).wind_speed, dataForecast.get(i).wind_gust, dataForecast.get(i).rainfall, dataForecast.get(i).amount_rainfall, dataForecast.get(i).type_day])
//       .then(res => {
//         console.log(res.rows[0])
//       })
//       .catch(e => console.error(e.stack))
//   }
} 
module.exports.saveData = saveData;