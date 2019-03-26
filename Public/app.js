var express = require ('express')
var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/stylesheets', express.static('./views/static/stylesheets'))
app.use('/images', express.static('./views/static/images'))


app.get('/index', function (req, res) {
  res.render('index')
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.get('/searchEvent', function (req, res) {
  res.render('searchEvent')
})

app.listen(8080)



/*var http = require ('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  var myReadStream = fs.createReadStream('fblogin.html','utf8');
  myReadStream.pipe(response);
});

server.listen(3000,'localhost');*/
