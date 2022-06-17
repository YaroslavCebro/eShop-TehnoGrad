const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lname: {type: DataTypes.STRING(60)},
    name: {type: DataTypes.STRING(60)},
    mail: {type: DataTypes.STRING(60), allowNull: false, unique: true},
    password: {type: DataTypes.STRING(60), allowNull: false},
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(60), allowNull: false, unique: true},
    country: {type: DataTypes.STRING(60), allowNull: false}
})

const Supplier = sequelize.define('supplier', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(60), allowNull: false},
    phone: {type: DataTypes.STRING(60), allowNull: false},
    mail: {type: DataTypes.STRING(60), allowNull: false, unique: true}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(60), allowNull: false, unique: true},
    price: {type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: "0.0"},
    weight: {type: DataTypes.DECIMAL(12, 3), allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false},
    warranty: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING(50)},
    description: {type: DataTypes.STRING(500)},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lname: {type: DataTypes.STRING(60), allowNull: false},
    name: {type: DataTypes.STRING(60), allowNull: false},
    phone: {type: DataTypes.STRING(20), allowNull: false, unique: true},
    post: {type: DataTypes.ENUM("manager", "admin"), allowNull: false},
    password: {type: DataTypes.STRING(60), allowNull: false}
})

const Intend = sequelize.define('intend', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    startDate: {type: DataTypes.DATE, allowNull: true},
    endDate: {type: DataTypes.DATE, allowNull: true},
    condition: {type: DataTypes.ENUM("new", "paid", "delivered", "denied", "finished"), allowNull: true, defaultValue: "new"},
})

const ProductReturn = sequelize.define('productReturn', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER(10), allowNull: false},
    product_price: {type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: "0.0"},
    date: {type: DataTypes.DATE, allowNull: false},
    reason: {type: DataTypes.STRING(250)}
})

const ListIntend = sequelize.define('listIntend', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER(10), allowNull: false}
})

const Supplies = sequelize.define('supplies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false}
})

const ListSupplies = sequelize.define('listSupplies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER(10), allowNull: false}
})

const Characteristic = sequelize.define('characteristic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(50), allowNull: false}
})

const Compatibility = sequelize.define('compatibility', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const ProductCharacteristic = sequelize.define('productCharacteristic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value:  {type: DataTypes.STRING(50)}
})

const Photo = sequelize.define('photo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:  {type: DataTypes.STRING(50), allowNull: false}
})

const AllPrices = sequelize.define('allPrices', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_price:  {type: DataTypes.DECIMAL(10, 2), allowNull: false},
    end_date: {type: DataTypes.DATE, allowNull: false},
})
//===============================================
Product.hasMany(Photo);
Photo.belongsTo(Product);

Product.hasMany(ProductReturn);
ProductReturn.belongsTo(Product);

Product.hasMany(ListSupplies);
ListSupplies.belongsTo(Product);

Product.hasMany(AllPrices);
AllPrices.belongsTo(Product);

Product.hasMany(ListIntend);
ListIntend.belongsTo(Product);

Product.hasMany(ProductCharacteristic);
ProductCharacteristic.belongsTo(Product);
//===============================================
Category.hasMany(Product);
Product.belongsTo(Category);

Company.hasMany(Product);
Product.belongsTo(Company);
//===============================================
Supplies.hasMany(ListSupplies);
ListSupplies.belongsTo(Supplies);

Supplier.hasMany(Supplies);
Supplies.belongsTo(Supplier);

Employee.hasMany(Supplies);
Supplies.belongsTo(Employee);
//===============================================
Employee.hasMany(Intend);
Intend.belongsTo(Employee);

Intend.hasMany(ListIntend);
ListIntend.belongsTo(Intend);

Users.hasMany(Intend);
Intend.belongsTo(Users);
//===============================================   
Compatibility.hasMany(ProductCharacteristic);
ProductCharacteristic.belongsTo(Compatibility);

Characteristic.hasMany(Compatibility);
Compatibility.belongsTo(Characteristic);

Category.hasMany(Compatibility);
Compatibility.belongsTo(Category);
//===============================================   


module.exports = {
    Users,
    Company,
    Supplier,
    Category,
    Product,
    Employee,
    Intend,
    ProductReturn,
    ProductReturn,
    ListIntend,
    Supplies,
    ListSupplies,
    Characteristic,
    Compatibility,
    ProductCharacteristic,
    Photo,
    AllPrices,
}