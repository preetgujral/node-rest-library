var express = require('express');
var helper = require('./helper.js')

var app = express();

//allows us to serve up static files in this directory

app.get('/post', function(req, res) {
  // res.write('you are a boss!');
  // res.json({"class": "javascript"}
    res.send('["this", "is", "a", "test"]')
})

coolStoryBro = function(array) {
  var qs = require('querystring');
  var body = [];
  req.on( 'data', function(data) {
    body += data;
    console.log(body);
  });
  req.on( 'end', function() {
    var form = qs.parse(body);
    output = function(formName) {
      newArray = [];
      for (i = 0; i < array.length; i++) {
        newArray[i] = "Yo " + array[i] + " that was a cool story Bro"
      };
      return newArray
    };
  })
}


app.listen(3000, function(){
  console.log('***listening on port 3000***');
});
