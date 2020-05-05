const Order = require('../models/Order')

exports.getOrders = async (req, res, next) => {
  // Schreib hier code um alle Bestellungen aus der orders-Collection zu holen
  const orders = await Order.find().populate("record", "-price -year")
  res.status(200).send(orders);
};

exports.getOrder = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu holen
  const order = await Order.findById(id).populate("record", "-price -year")
  res.status(200).send(order);
};

exports.deleteOrder = (req, res, next) => {
  const { id } = req.params;
}