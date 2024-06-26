const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const api = require('./routes/api')

const port=3000

const app = express();

app.use(express.static(path.join(__dirname,'/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api',api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
})



app.listen(port,() => {
    console.log("Yns");
})