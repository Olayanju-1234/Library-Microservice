const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const customersRoute = require('./router/customersRoute')
// require cors
const cors = require('cors');
// add swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Body parser
app.use(bodyParser.json())
// customers route


// Connect to database
mongoose.connect('YOUR_URI', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB! --- Customers service running');
});
// add cors
app.use(cors());

// add swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Route middlewares
app.use('/api/customers', customersRoute)

app.listen("5050", () => {
    console.log('Listening on Port 5050 --- Customers service');
})