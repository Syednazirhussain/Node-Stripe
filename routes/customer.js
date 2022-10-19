const express = require('express')
const router = express.Router()

const { 
    customers, 
    createCustomer, 
    findCustomer,
    updateCustomer,
    deleteCustomer 
} = require('./../controllers/customerController');


router.route('/').get(customers)
router.route('/').post(createCustomer)
router.route('/:id').get(findCustomer)
router.route('/:id').patch(updateCustomer)
router.route('/:id').delete(deleteCustomer)

module.exports = router