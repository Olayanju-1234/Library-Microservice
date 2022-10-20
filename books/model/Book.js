const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    numberOfPages: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model("Book", BookSchema)



    
    


