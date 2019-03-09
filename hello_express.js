var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello, world!');
})

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})

// express routing --> 
// app.method(path, callback);
//      method is an all-lowercase HTTP request method
//      path is the visited path in the URL
//      callback is the function that takes 2-3 param
//      -> req- request object
//      -> res- response object
//      -> next- optional callback function
