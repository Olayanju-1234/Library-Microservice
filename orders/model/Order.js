const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true},
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true},
    orderDate: {
        type: Date,
        required: true},
    deliveryDate: {
        type: Date,
        required: true},
    // status: {
    //     type: String,
    //     required: true},
    // items: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Item',
    //     required: true}]
})

module.exports = mongoose.model('Order', OrderSchema)