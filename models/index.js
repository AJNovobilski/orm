// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.hasOne(Category, { constraints: false});

// Categories have many Products

Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)

Product
.belongsToMany(Tag, { through: ProductTag, constraints: false });


// Tags belongToMany Products (through ProductTag)

Tag
.belongsToMany(Product, { through: ProductTag, constraints: false });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
