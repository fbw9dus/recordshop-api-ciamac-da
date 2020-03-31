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
    }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    },
AddressSchema:AddressSchema
  }
);


const User = mongoose.model('User', Userschema);
(async() => {
  const address = await User.create({
      city: 'Düsseldorf',
      street: "Hauptbahnhof",
  })
  const userdaten = await User.find()
  console.log(userdaten)
})()


UserSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
