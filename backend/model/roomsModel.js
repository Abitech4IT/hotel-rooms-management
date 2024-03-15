const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: [true, "pls enter the room number"],
  },
  roomType: {
    type: String,
    required: [true, "pls enter the room type"],
  },
  price: {
    type: Number,
    required: [true, "pls enter the room price"],
  },
  guest: {
    type: Number,
    required: [true, "pls enter the room guest number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
