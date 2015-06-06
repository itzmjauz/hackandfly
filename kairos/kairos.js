var request = require('request')
  , fs      = require('fs')
  , app_id  = "4985f625"
  , app_key = "4423301b832793e217d04bc44eb041d3"

// we gotta load the image before specifiying our post data

if(process.argv[3] == null ) {
  "not enough arguments , cmd = npm test [r/d/e] [file]"
} else if(process.argv[2] == "r") {
  var img = fs.readFile(process.argv[3], function(err, data) {
    recognize(data)
  })
} else if(process.argv[2] == "d") {
  var img = fs.readFile(process.argv[3], function(err, data) {
    detect(data)
  })
} else if(process.argv[2] == "e") {
  var img = fs.readFile(process.argv[3], function(err, data) {
    if(process.argv[4] == null){
      console.log("no subject id given (arg[4])")
    } else {
      enroll(data, process.argv[4])
    }
  })
} else {
  console.log("no valid argument r/d/e [filename]")
}

// we can predefine our callback for every request
function callback(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(JSON.stringify(JSON.parse(body), null, 4))
  }
}


function enroll(img, id){
  var link    = "https://api.kairos.com/enroll"
    , postjson= {
         "image"        : img.toString('base64')
      ,  "selector"     : "SETPOSE"
      ,  "gallery_name" : "gallery1"
      ,  "symmetricFill": "true"
      ,  "subject_id"   : id
    }


  options = {
     url     : link
  ,  body    : JSON.stringify(postjson)
  ,  method  : 'POST'
  ,  headers : {
     'Content-Type' : 'application/json'
  ,  'app_id'    : app_id
  ,  'app_key'   : app_key
  ,  'User-Agent': 'request'
    }
  }

  request(options, callback)
}

function detect(img){
  var link    = "https://api.kairos.com/detect"
    , postjson= {
         "image"        : img.toString('base64')
      ,  "selector"     : "SETPOSE"
    }


  options = {
     url     : link
  ,  body    : JSON.stringify(postjson)
  ,  method  : 'POST'
  ,  headers : {
     'Content-Type' : 'application/json'
  ,  'app_id'    : app_id
  ,  'app_key'   : app_key
  ,  'User-Agent': 'request'
    }
  }

  request(options, callback)
}

function recognize(img){
  var link    = "https://api.kairos.com/recognize"
    , postjson= {
         "image"        : img.toString('base64')
      ,  "gallery_name" : "gallery1"
    }


  options = {
     url     : link
  ,  body    : JSON.stringify(postjson)
  ,  method  : 'POST'
  ,  headers : {
     'Content-Type' : 'application/json'
  ,  'app_id'    : app_id
  ,  'app_key'   : app_key
  ,  'User-Agent': 'request'
    }
  }

  request(options, callback)
}

