const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const routes = require('./settings/routes')
routes(app)

app.listen(port,() =>{
    console.log('app listen on port 3000');
})