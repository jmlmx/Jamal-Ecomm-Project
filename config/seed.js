require('dotenv').config()
require('./database')

const Category = require('../models/category')
const Item = require('../models/item')

(async function() {

    await Category.deleteMany({})
    const categories = await Category.create([
        {name: 'Tropical Blends', sortOrder: 10},
        {name: 'Energy Blends', sortOrder: 20},
        {name: 'Wellness Blends', sortOrder: 30},
        {name: 'Bowls', sortOrder: 40}
    ])
    await Item.deleteMany({})
    const items = await Item.create([
        // Tropical ------------
        {name: 'Strawberry Shindig', emoji: '', category: categories[0], price: 3.99},
        {name: 'Banana Berry Blitz', emoji: '', category: categories[0], price: 3.99},
        {name: 'Mango Madness', emoji: '', category: categories[0], price: 3.99},
        {name: 'Krazy Kiwi', emoji: '', category: categories[0], price: 3.99},
        {name: 'Pineapple Power', emoji: '', category: categories[0], price: 3.99}, 
        // Energy -------------
        {name: 'Mocha-Mania Coffee Blend', emoji: '', category: categories[1], price: 5.99},
        {name: 'Viva Vanilla Coffee Blend', emoji: '', category: categories[1], price: 5.99},
        {name: 'Espresso Engage Coffee Blend', emoji: '', category: categories[1], price: 5.99},
        {name: 'Almond Mocha Alliance Coffee Blend', emoji: '', category: categories[1], price: 5.99},
        // Wellness -------------
        {name: 'Kiwi Kale Kudos', emoji: '', category: categories[2], price:7.99},
        {name: 'Cherry Berry Charm', emoji: '', category: categories[2], price:7.99},
        {name: 'Pineapple Spinach Peace', emoji: '', category: categories[2], price:7.99},
        {name: 'Ginger Mango Generosity', emoji: '', category: categories[2], price:7.99},
        // Bowls -----------------
        {name: 'Peanut Butter Berry Bash', emoji: '', category: categories[3], price: 10.99},
        {name: 'Goji Banana Blast', emoji: '', category: categories[3], price: 10.99},
        {name: 'Mango Berry Masterpiece', emoji: '', category: categories[3], price: 10.99},
        {name: 'Strawberry Banana Select', emoji: '', category: categories[3], price: 10.99},

    ])

    console.log(items)
    process.exit()
})()
