const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const redoc = require('redoc-express');
const cors=require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv').config();

const api = require('./src/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
if (process.env.NODE_ENV === 'developement') {

    /**
     * Route serving Swagger UI documentation
     * @name use/api-docs
     * @function
     * @memberof module:routes/docs
     * @inner
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware
     */
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

/**
 * Route serving API
 * @name use/api
 * @function
 * @memberof module:routes/api
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
app.use('/api', api);

/**
 * Route serving index.html for all other routes
 * @name get*
 * @function
 * @memberof module:routes/other
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Starts the server and listens on the specified port
 * @function
 * @name listen
 * @memberof module:server
 * @param {number} port - The port on which the server listens
 * @param {callback} callback - The callback function
 */
app.listen(port, () => {
    console.log("PPT", process.env);
});
