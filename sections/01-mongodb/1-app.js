// USE DATABASE playground1
use('playground1');

// INSERT INTO sales(item, price, quantity, date)
// VALUES ('abc', 10, 2, new Date('2014-03-01T08:00:00Z')), ...
db.getCollection('sales').insertMany([
    { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
    { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
    { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
    { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
    { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
    { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
    { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
    { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// SELECT *
// FROM sales
// WHERE date >= '2014-04-04' AND date < '2014-04-05'
const salesOnApril4th = db.getCollection('sales').find({
    date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// SELECT item, SUM(price * quantity) AS totalSaleAmount
// FROM sales
// WHERE date >= '2014-01-01' AND date < '2015-01-01'
// GROUP BY item
db.getCollection('sales').aggregate([
    { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
    { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
