let express = require('express')
const app = express() //when we invoke it creates an express application which helps to build a web server

const defaultRoute = require("./route/defaultRoute")

globalThis.rootPath = __dirname

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert_info.js

app.use("/", defaultRoute) //redirecting all requests to default route to get served


//wild card operator
// app.get('*', (req, res) => {
//   res.send("__dirname+/Public/index.html")
// })

console.log("Rest API is listening at 9000")
app.listen(9000)