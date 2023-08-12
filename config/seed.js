require('dotenv').config()
require('./database')

const Category = require('../models/category')
const Item = require('../models/item')

(async function() {

    await Category.deleteMany({})
    const categories = await Category.create([
        {name: 'Fit Blends', sortOrder: 10},
        {name: 'Energy Blends', sortOrder: 20},
        {name: 'Wellness Blends', sortOrder: 30},
        {name: 'Bowls', sortOrder: 40}
    ])
    await Item.deleteMany({})
    const items = await Item.create([
        {name: 'Basic Sword', emoji: '', category: categories[0], price: '500G'},
    ])

    console.log(items)
    process.exit()
})()
