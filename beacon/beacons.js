var request = require('request')
  , app_id  = "5e19e75e"
  , app_key = "6398e33d6453f3dfcccb82ebb44ca473"
  ,    link = "https://cube.api.aero/atibeacon/beacons/1?airportCode=AMS&app_id="+app_id+"&app_key="+app_key+"&preservePendingNewBeacons=true"

request 
    .get(link)
    .on('response', function(response){
        console.log(response.statusCode)
    })



