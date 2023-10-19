const { User } = require('./user.model');
const { Order } = require('./order.model');

User.hasMany(Order, { onDelete : "CASCADE" });
Order.belongsTo(User, { onDelete : "CASCADE" });

module.exports = {
    User,
    Order
}