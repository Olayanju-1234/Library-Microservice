const router = require('express').Router()
const Customer = require('../model/Customer')

// Create new customer
router.post('/create', async (req, res) => {
    const newCustomer = new Customer(req.body)
    try {
        const savedCustomer = await newCustomer.save()
        res.status(200).json(savedCustomer)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all customers
router.get('/find', async (req, res) => {
    try {
        const allCustomers = await Customer.find()
        res.status(200).json(allCustomers)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get one customer
router.get('/customer/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        // Check if customer exists
        if (!customer) {
            res.status(404).json("Customer not found")
        }
        else{
            res.status(200).json(customer)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete a customer
router.delete('/delete/:id', async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json("Customer deleted")
    } catch (error) {
        res.send(500).json(error)
    }
})




module.exports = router