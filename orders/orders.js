const express = require('express')
const app = express()
// require dotenv
const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
require('dotenv').config 
// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// Routes
const ordersRoutes = require('./router/ordersRoute')
// require cors
const cors = require('cors');
// add swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


// Connect to database
const mongoose = require('mongoose')
mongoose.connect('YOUR_URI', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB! --- Orders service running');
});

// add cors
app.use(cors());

// add swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Load routes
app.use('/api/orders', ordersRoutes)



app.listen(4040, () => console.log('Server started-- Orders service running on PORT 4040'));