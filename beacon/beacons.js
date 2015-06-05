var request = require('request')
  , app_id  = "5e19e75e"
  , app_key = "6398e33d6453f3dfcccb82ebb44ca473"
  ,    link = "https://cube.api.aero/atibeacon/beacons/1?airportCode=AMS&app_id="+app_id+"&app_key="+app_key+"&preservePendingNewBeacons=true"


var options = {
     url     : link
  ,  method  : 'GET'
  ,  headers : {
    'User-Agent': 'request'
  }
}


function callback(error, response, body){
  if (!error && response.statusCode == 200) {
    jsonData = JSON.parse(body)
    console.log(jsonData)
  }
}


request(options, callback)



