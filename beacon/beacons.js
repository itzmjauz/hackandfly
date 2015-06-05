var request = require('request')
  , app_id  = "5e19e75e"
  , app_key = "6398e33d6453f3dfcccb82ebb44ca473"


if(process.argv[2] == "list") {

  var link = "https://cube.api.aero/atibeacon/beacons/1?airportCode=AMS&app_id="+app_id+"&app_key="+app_key+"&preservePendingNewBeacons=true"
    , options = {
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

} else if(process.argv[2] == "status") { 
  if(process.argv.length < 4) { 
    console.log("more arguments")

  }
  var major = process.argv[3]
    , minor = process.argv[4]
    , link = "https://cube.api.aero/atibeacon/beacons/1/AMS/B233860B-5F9D-44EF-B657-C2966D89BBFA/"+major+"/"+minor+"?app_id="+app_id+"&app_key="+app_key+"&flightNumber=BA123&flightDate=2015-06-05&passengerIdentifier=kevin"
    , options = {
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

} else {
  console.log("Pass npm test [arguments]")
  console.log("Possible arguments : list")
}



