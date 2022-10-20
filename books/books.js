const express = require('express');
const booksRoute = require('./router/booksRoute')
// require cors
const cors = require('cors');
// add swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connect to database
const mongoose = require('mongoose');

mongoose.connect('YOUR_URI', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB!');
});
// add cors
app.use(cors());
app.use('/api/books', booksRoute)
// add swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.listen(3030, () => console.log('Server started-- Books service running on PORT 3030'));

