const Order = require('../models/Order');

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  await order.save();
  return order;
};

module.exports = {
  createOrder
};
