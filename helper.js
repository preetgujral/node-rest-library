
var exports = module.exports = function(port, method, func){
  var http = require('http');
  var portNum = port;
  var url = '/'+ method

  var server = http.createServer (function (req, res) {
    if (req.url === '/get') {
      //pass output of a function to a get
        var output = func;
        res.write(JSON.stringify(output));
        res.end()
    }
  })

  //   if (req.url === '/post') {
  //     //take array posted at a route and pass it to a function
  //     var output = func;
  //     res.write = JSON.stringify(output)
  //     res.end();
  //   }
  // })

  server.listen(portNum, function(err){
    if (err) console.log(err);
    console.log("listening on port " + portNum + "...")
  });
};
