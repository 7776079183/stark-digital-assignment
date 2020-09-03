const config = require('../_config/config');
module.exports = {
    //Controller for getting weather of city 
    weatherDetails:function(request,response){
        try {
            var flag = 0;
            //getting current day
            var day = new Date().getDay();
            //checking given day is prime or not
            for(let i = 2; i <= day / 2; ++i){
                if (day % i == 0) {
                    flag = 1;
                    break;
                }
            }
            //added condition for day 1 because 1 is neither prime nor composite.
            if (day == 1) {
                response.status(400).send({result:"Fail", message:"Date " + day + " is neither prime nor composite."});
            }
            else {
                if (flag == 0)
                    //call function for sending weather data to client
                    sendWeatherDetails(request,response)
                else
                    response.status(400).send({result:"Fail", message:"Date " + day + " is not prime so no data"});
            }
        } catch (error) {
            response.status(500).send({result:'fail',error:error});
            
        }
    },
}

//function for Getting Data from API
async function sendWeatherDetails(request,response){
    try {
        //using async-request package for rquesting weather API
        const request = require('async-request');
        let url = config.APIBaseURL + "?q=" + config.City + "&appid="+config.APIKey;
        let data = await request(url);
        response.status(200).send({result : "Success", message:"Date is prime", Data : JSON.parse(data.body)});
    } catch (error) {
        response.status(500).send({result:'fail',error:error});
    }
    
}