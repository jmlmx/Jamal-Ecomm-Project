const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history
}

// shows the current unpaid order for a customer/user
async function cart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id)
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//add an item to the users cart
async function addToCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id)
        await cart.addItemToCart(req.params.id)
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates items qty in a cart
async function setItemQtyInCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id)
        await cart.setItemQty(req.body.itemId, req.body.newQty)
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//update the carts isPaid property to true (checking out)
async function checkout(req, res) {
    try {
        const cart = await Order.getCart(req.user._id)
        cart.isPaid = true
        await cart.save()
            res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function history(req, res) {
    try {
        const orders = await Order.find({user: req.user._id, isPaid: true })
        .sort('-updatedAt').exec()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}