var express = require('express'); 
var bodyParser = require('body-­parser') ;
var port = process.env.PORT || 8080; 
 
var app = express(); 
app.use( express.json() );
app.use( bodyParser.json() ); // to support JSON­encoded bodies 
app.use( bodyParser.urlencoded( { extended: true  } ) );  
 
//Accessible at localhost:8080/ 
app.get('/', function (req, res) { 
res.send('Hello World!'); 
}); 
 
//Accessible at localhost:8080/get/tasks/ 
app.get('/get/tasks/', function (req, res) { 
res.send('This is a task.'); 
// Extend this later to return tasks from the database. 
}); 
 
app.listen(port, function () { 
console.log('Example app listening on port 8080!'); 
}); 

