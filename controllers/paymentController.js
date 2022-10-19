const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.payments = async (req, res) => {
    
    try {
        
        const paymentMethods = await stripe.paymentMethods.list({
            customer: req.query.customer_id,
            type: 'card',
        });

        res.status(200).json(paymentMethods)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.attachCustomer = async (req, res) => {
    
    try {

        const paymentMethod = await stripe.paymentMethods.attach(
            req.params.id,
            { customer: req.body.customer_id }
        );

        res.status(200).json(paymentMethod)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createPaymentMethod = async (req, res) => {
    
    try {

        const paymentMethod = await stripe.paymentMethods.create({
            type: req.body.type,
            card: {
                number: req.body.number,
                exp_month: req.body.exp_month,
                exp_year: req.body.exp_year,
                cvc: req.body.cvc,
            },
        });

        res.status(200).json(paymentMethod)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.findPaymentMethod = async (req, res) => {
    
    try {

        const paymentMethod = await stripe.paymentMethods.retrieve(
            req.params.id
        );

        res.status(200).json(paymentMethod)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createPaymentIntent = async (req, res) => {

    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
            payment_method_types: ['card'],
        });

        res.status(200).json(paymentIntent)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

} 


