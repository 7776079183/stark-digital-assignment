module.exports = function(app){
    //importing weather controller 
    const weather = require('../_controllers/weather-ctrl');
    
/* *********************************************** Routes  ************************************************************* */
    //Route with get request for getting weather details
    app.get('/api/weather-details',weather.weatherDetails);
   

/* // *********************************************** Routes  ************************************************************* */
}
