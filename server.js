const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoriesData = require('./data/categories.js')
const citiesData = require('./data/cities.js')
const itemsData = require('./data/items.js')

// create the express app
const app = express();

// create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')));

//all api
//shows all the cities available
app.get('/api/cities', function (req, res) {
    res.json(citiesData)
});
//shows all the categories for a city
app.get('/api/:city', function (req, res) {
    res.json(categoriesData)
});
//show all the items for that listing
app.get('/api/:city/:category/:listings', function (req, res) {
    let newData;
    if (req.query.model != '' && req.query.make != 'all' && req.query.min_price != undefined) {
        newData = itemsData.filter((item) => {
            return item.city == req.params.city && item.category == req.params.category && item.listings == req.params.listings &&
                item.price >= req.query.min_price && item.price <= req.query.max_price &&
                item.extras.make == req.query.make && item.extras.model == req.query.model
        })
        console.log('filter')
    } else if ( req.query.make != undefined && req.query.make != 'all' && req.query.min_price != undefined) {
        newData = itemsData.filter((item) => {
            return item.city == req.params.city && item.category == req.params.category && item.listings == req.params.listings &&
                item.price >= req.query.min_price && item.price <= req.query.max_price &&
                item.extras.make == req.query.make
        })
        console.log('make')
    } else if (req.query.min_price != undefined) {
        newData = itemsData.filter((item) => {
            return item.city == req.params.city && item.category == req.params.category && item.listings == req.params.listings &&
                item.price >= req.query.min_price && item.price <= req.query.max_price
        })
        console.log('price')
    } else if(req.query.make == 'all'){
        newData = itemsData.filter((item) => {
            return item.city == req.params.city && item.category == req.params.category && item.listings == req.params.listings
        })
        console.log('all')
    } else {
        newData = itemsData.filter((item) => {
            return item.city == req.params.city && item.category == req.params.category && item.listings == req.params.listings
        })
        console.log('ok')
    }
    res.json(newData)
});
//show the item that was selected
app.get('/api/:city/:category/:listings/:item', function (req, res) {
    let newData;
    newData = itemsData.filter((item) => {
        return item.city == req.params.city && item.category == req.params.category &&
            item.listings == req.params.listings && item.extras.vin == req.params.item
    })
    res.json(newData)
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

//create default port to serve the app
const port = process.env.PORT || 5000

app.listen(port);

console.log('server on port' + port)