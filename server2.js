var helper = require('./helper.js')

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
  return output;
}

coolStoryBro = function(formProp) {
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

// coolStoryBro = function(formProp) {
//   var qs = require('querystring');
//   var body = [];
//   req.on( 'data', function(data) {
//     body += data;
//     console.log(body);
//   });
//   req.on( 'end', function() {
//     var form = qs.parse(body);
//     output = function(formName) {
//       newArray = [];
//       for (i = 0; i < array.length; i++) {
//         newArray[i] = "Yo " + array[i] + " that was a cool story Bro"
//       };
//       return newArray
//     };
//   })
// }

helper(3000, 'get', valueToArray(jsda));

helper(3000, 'post', coolStoryBro())
