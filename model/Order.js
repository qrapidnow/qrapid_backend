const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  cartItems: [
    {
      itemName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true, default: 1 }
    }
  ],
  orderTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
