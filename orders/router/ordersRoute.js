const router = require('express').Router()
const Order = require('../model/Order')
const axios = require('axios')
const { response } = require('express')

// create new order
router.post('/create', async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get order by id
router.get('/order/:id', async (req, res) => {
    const orderId = req.params.id
    const getOrder = await Order.findById(orderId)

    try {
        if (getOrder) {
            axios.get('http://localhost:5050/api/customers/customer/' + getOrder.customerId).then((response) => {
                let orderObject = {customerName : response.data.name, bookTitle : ""}

                axios.get('http://localhost:3030/api/books/book/' + getOrder.bookId).then((response) => {
                    orderObject.bookTitle = response.data.title

                res.json(orderObject)
                })
            })  
       
        }
        else {

        }
        
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = router