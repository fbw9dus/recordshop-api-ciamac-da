const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
  
});
const Record = mongoose.model(Record, RecordSchema)


const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: {
    type: Number,
    required: true
  },
  records:{
    ref:"Record",
    type: mongoose.Schema.Types.ObjectId,
  }
});
const Order = mongoose.model('Order', OrderSchema)

const recordorder =  Order.findById().populate('records')
console.log(recordorder)

module.exports = mongoose.model("recordorder", OrderSchema);