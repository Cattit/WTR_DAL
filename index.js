const db = require('./db');
const forecastDataService = require("./data-services/forecastData.js");
const realDataService = require("./data-services/realData.js");
const location = require("./data-services/location.js");
const raiting = require("./raiting.js");
const source = require("./source.js");

// таблица городов
module.exports.getIdLocationByCoords = async (lat, lon) => await location.getIdLocationByCoords(lat, lon);
module.exports.getIdLocationByUrl = async (url) => await location.getIdLocationByUrl(url);
module.exports.getIdLocationByCode = async (code) => await location.getIdLocationByCode(code);
module.exports.getAllLocationCoordsId = async () => await location.getAllLocationCoordsId();
module.exports.getAllLocationUrlId = async () => await location.getAllLocationUrlId();
module.exports.getAllLocationCodeId = async () => await location.getAllLocationCodeId();

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
module.exports.getForecastDataLeftJoin = async (id_source, date_forecast, id_location, date_start, date_end) => await forecastDataService.getForecastDataLeftJoin(id_source, date_forecast, id_location, date_start, date_end);

// таблица ячеек прогнозов
module.exports.saveForecast = async (id_source, date) => await forecastDataService.saveForecast(id_source, date);
module.exports.getIdForecast = async (id_source, date) => await forecastDataService.getIdForecast(id_source, date);

// таблица реальных данных
module.exports.saveRealData = async (dataForecast, id_location) => await realDataService.saveRealData(dataForecast, id_location);
module.exports.getweatherForHours = async (id_location, date_start, date_end) => await realDataService.getweatherForHours(id_location, date_start, date_end)

// рейтинг
module.exports.saveRaiting = async (id_source, mark, depth_forecast, date_start, id_location, date_end) => await raiting.saveRaiting(id_source, mark, depth_forecast, date_start, id_location, date_end);
module.exports.getRaitingPeriod = async (id_source, depth_forecast, date, id_location, period) => await raiting.saveRaiting(id_source, depth_forecast, date, id_location, period);
module.exports.getDepthSourceLocation = async () => await raiting.getDepthSourceLocation();
module.exports.getRaitingAvgDaily = async (id_source, depth_forecast, date_start, id_location, date_end) => await raiting.getRaitingAvgDaily(id_source, depth_forecast, date_start, id_location, date_end);
module.exports.changeRaiting = async (id_source, mark, depth_forecast, date_start, id_location, date_end) => await raiting.changeRaiting(id_source, mark, depth_forecast, date_start, id_location, date_end);

// таблица ресурсов (сайтов)
module.exports.getUrlApi = async (id_source) => await source.getUrlApi(id_source);