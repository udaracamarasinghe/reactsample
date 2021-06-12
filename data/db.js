var ordersRoute = require('./orders_db.json');
var itemsRoute = require('./items_db.json');
// and so on

module.exports = function () {
    return {
        orders: ordersRoute,
        items: itemsRoute
        // and so on
    }
}