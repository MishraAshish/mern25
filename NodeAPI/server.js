let express = require('express')

const app = express() //when we invoke it creates an express application which helps to build a web server

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/new', (req, res) => {
    res.send("<h2>I know Express is very powerful</h2>")
  })

  app.get('/test', (req, res) => {

    console.log(req)
    console.log(req.query)
    res.json({
        server : "Express",
        endpoint : "Test",
        api : "RestFul"
    })
  })


  //route param
  //http://localhost:9000/test/2500?name=test&type=queryString
  app.get('/test/:id', (req, res) => {
    console.log(req.params["id"])
    console.log(req.query)
    res.json({
        server : "Express",
        endpoint : "Test",
        api : "RestFul"
    })
  })

  //http://localhost:9000/queryString?name=test&session=queryString
  app.get('/queryString', (req, res) => {    
    console.log(req.query)
    res.json({
        name : req.query["Name"],
        session : req.query["session"],
        api : "RestFul"
    })
  })

console.log("Rest API is listening at 9000")

app.listen(9000)