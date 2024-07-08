const express = require('express');
const router = express.Router();
const OrderService = require('../services/order.service');

// Endpoint to create a new order
router.post('/orders', async (req, res) => {
  try {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
