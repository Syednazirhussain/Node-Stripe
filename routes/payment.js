const express = require('express')
const router = express.Router()

const { 
    payments, 
    attachCustomer, 
    createPaymentMethod, 
    createPaymentIntent, 
    findPaymentMethod, 
} = require('./../controllers/paymentController');


router.route('/').get(payments)
router.route('/attach_customer/:id').post(attachCustomer)
router.route('/create').post(createPaymentMethod)
router.route('/create/paymentIntent').post(createPaymentIntent)
router.route('/:id').get(findPaymentMethod)

module.exports = router