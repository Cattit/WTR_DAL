const db = require('./db');
const forecastDataService = require("./data-services/forecastData.js");
const realDataService = require("./data-services/realData.js");
const searchLocation = require("./data-services/searchLocation.js");
const raiting = require("./raiting.js");

// таблица городов
module.exports.getIdLocationByCoords = async (lat, lon) => await searchLocation.getIdLocationByCoords(lat, lon);
module.exports.getIdLocationByUrl = async (url) => await searchLocation.getIdLocationByUrl(url);
module.exports.getIdLocationByCode = async (code) => await searchLocation.getIdLocationByCode(code);

// таблица прогнозируемых данных
/**
 * сохранить данные прогноза
 * @param {{filed1: string; field2: number}} dataForecast 
 * @returns {Promiise<{resultCode: number; message?: string}>}
 */
module.exports.saveForecastData = async (dataForecast, id_forecast, id_location) => {
  return forecastDataService.saveForecastData(dataForecast, id_forecast, id_location);
};
module.exports.getForecastData = async (id_forecast, id_location, start_data, end_data) => await forecastDataService.getForecastData(id_forecast, id_location, start_data, end_data);

// таблица ячеек прогнозов
module.exports.saveForecast = async (source, date) => await forecastDataService.saveForecast(source, date);
module.exports.getIdForecast = async (source, date) => await forecastDataService.getIdForecast(source, date);

// таблица реальных данных
module.exports.saveRealData = async (dataForecast, id_location) => await realDataService.saveRealData(dataForecast, id_location);
module.exports.getweatherForHours = async (id_location, date_start, date_end) => await realDataService.getweatherForHours(id_location, date_start, date_end)

// рейтинг
module.exports.saveRaiting = async (source, mark, depth_forecast, date, id_location) => await raiting.saveRaiting(source, mark, depth_forecast, date, id_location);