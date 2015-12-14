var helper = require('./helper.js')

//allows us to serve up static files in this directory
//app.use(express.static(__dirname + '/public'));

//test code for GET
var jsda = {
    length: 8,
    teachers: ['brian', 'marty'],
    students: ['preet', 'javier', 'tara', 'laura', 'jeff', 'peter']
  };

valueToArray = function (object){
  var output = [];
  for (key in object) {
    //console.log(object[key]);
    output = output.concat(object[key])
  }
  console.log(output);
  return output;
}

helper(3000, 'get', valueToArray(jsda));


//test code for post

// formFunc = function(formName) {
//   newArray = [];
//   for (i = 0; i < array.length; i++) {
//     newArray[i] = "Yo " + array[i] + " that was a cool story Bro"
//   };
//   console.log(newArray);
// }

// coolBro(jsda.students);

// var http = require('http');
// var fs = require('fs');
// var qs = require('querystring');

// var server = http.createServer(function (req,res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});

//   //route for submitting name page and posting return greeting
//   if (req.url === '/post') {
//     if (req.method === 'GET') {
//       //serve form
//       fs.readFile ( __dirname + '/yourname.html', function(err, data) {
//         res.write(data);
//         res.end();
//       });

//     }
//     if (req.method === 'POST') {
//       function(formProp) {
//         var qs = require('querystring');
//         var body = [];
//         req.on( 'data', function(data) {
//           body += data;
//           console.log(body);
//         });
//         req.on( 'end', function() {
//           var form = qs.parse(body);
//           output = function(formName) {
//             newArray = [];
//             for (i = 0; i < array.length; i++) {
//               newArray[i] = "Yo " + array[i] + " that was a cool story Bro"
//             };
//             return newArray

//       helper(3000, 'post', )
//     }
//   }
// });

// server.listen (3000, function (err) {
//   if (err) throw err;
//   console.log('*****listening on port 3000*****');
// });
