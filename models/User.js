const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema({
  city: {
      type: String,
      required: true
  },
  street:{
      type: String,
      required: true
  },
})


const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address:AddressSchema
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    },
  }
);
//
const User = mongoose.model('User', UserSchema);


UserSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
