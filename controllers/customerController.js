const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.customers = async (req, res) => {
    
    try {
    
        const customers = await stripe.customers.list();
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.findCustomer = async (req, res) => {
    
    try {
    
        const customer = await stripe.customers.retrieve(
            req.params.id
        );

        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createCustomer = async (req, res) => {
    
    try {

        const customer = await stripe.customers.create({
            email: req.body.email
        });

        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateCustomer = async (req, res) => {
    
    try {

        const customer = await stripe.customers.update(
            req.params.id,
            {
                email: req.body.email,
                name: req.body.name,
            }
        );

        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCustomer = async (req, res) => {
    
    try {

        const deleted = await stripe.customers.del(
            req.params.id
        );

        res.status(200).json(deleted)
    } catch (error) {
        res.status(500).json(error)
    }
}

