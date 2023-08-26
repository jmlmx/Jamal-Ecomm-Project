require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');


(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Doughnuts', sortOrder: 10},
    {name: 'Beer', sortOrder: 20},
    {name: 'Coffee', sortOrder: 30},
    {name: 'Pastries', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'White "Dragon" Cinnamon Doughnut', imgUrl: 'https://i2.wp.com/tidymom.net/blog/wp-content/uploads/2021/08/cinnamon-donuts-horiz-pic.jpg'
    , category: categories[0], price: 3.95},
    {name: '"Chosen One" Chocolate Doughnut', imgUrl: 'https://images.unsplash.com/photo-1639710743625-c1a254dc79fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80', category: categories[0], price: 2.95},
    {name: 'Glaze "Of Glory" Doughnut', imgUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/216049306/glazed-donut-doughnut.jpg?quality=82&strip=1', category: categories[0], price: 3.95},
    {name: 'Bearded Dwarf Stout', imgUrl: 'https://mybartender.com/wp-content/uploads/2023/05/glass-of-dark-stout-beer.jpg', category: categories[1], price: 4.95},
    {name: 'Bards Delight Ale', imgUrl: 'https://mybartender.com/wp-content/uploads/2023/06/glass-of-Pale-ale-beer-on-the-wooden-table.jpg', category: categories[1], price: 6.95},
    {name: 'Ogres Bile Lager', imgUrl: 'https://www.datocms-assets.com/75079/1656649634-vienna-lager-2006_cbb_issue40.jpg?w=1600', category: categories[1], price: 6.95},
    {name: '"Hastened" Espresso', imgUrl: 'https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg', category: categories[2], price: 7.95},
    {name: 'Journey-mans Latte', imgUrl: 'https://www.allrecipes.com/thmb/Wh0Qnynwdxok4oN0NZ1Lz-wl0A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9428203-9d140a4ed1424824a7ddd358e6161473.jpg', category: categories[2], price: 6.95},
    {name: 'Black "Dragon" Coffee', imgUrl: 'https://images.absolutdrinks.com/drink-images/Raw/Kahlua/8317f0a2-a13e-4eeb-954a-ae1d603537a6.jpg', category: categories[2], price: 4.95},
    {name: 'Gold-horn Sweet Buns', imgUrl: 'https://1.bp.blogspot.com/-pP_Nt-Vder4/XeZb8-zYf8I/AAAAAAAAUsQ/qa7ubfrpOx0vqQ2HJZFx4BPcXDuFS7wygCLcBGAsYHQ/s1600/imgUrl20191128171309.jpg', category: categories[3], price: 5.95},
    {name: 'Drake Cake', imgUrl: 'https://thisdelicioushouse.com/wp-content/uploads/2022/10/cinnamon-coffee-cake-13.jpg', category: categories[3], price: 7.95},
    {name: 'Manticore Sweet Bread', imgUrl: 'https://thetoughcookie.com/wp-content/uploads/2014/03/Sweet-Honey-and-Saffron-Bread-3.jpg', category: categories[3], price: 4.95}
  ]);

  console.log(items)

  process.exit();

})();