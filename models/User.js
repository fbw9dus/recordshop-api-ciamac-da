const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

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
const Adresses = mongoose.model('Adresses', AddressSchema);
(async() => {
  const address = await Addresses.create({
      city: 'Düsseldorf',
      street: "Hauptbahnhof",
  })
  const collectionData = await Addresses.find()
  console.log(collectionData)
})()


UserSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
