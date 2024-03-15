const catchAsyncError = require("../util/catchAsyncError");
const ErrorHandler = require("../util/ErrorHandler");
const Room = require("../model/roomsModel");

exports.createRoom = catchAsyncError(async (req, res, next) => {
  try {
    const { roomNumber } = req.body;
    const isExist = await Room.findOne({ roomNumber });
    if (isExist) return next(new ErrorHandler("Room already exist", 400));
    const roomData = req.body;
    const room = await Room.create(roomData);

    res.status(201).json({
      success: true,
      message: "Room successfully created",
      room,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

exports.getAllRooms = catchAsyncError(async (req, res, next) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      results: rooms.length,
      message: "Rooms retrieved successfully",
      rooms,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

exports.updateRoom = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
    const { roomNumber, roomType, price, guest } = req.body;
    const updatedRoom = {};
    if (roomNumber) updatedRoom.roomNumber = roomNumber;
    if (roomType) updatedRoom.roomType = roomType;
    if (price) updatedRoom.price = price;
    if (guest) updatedRoom.guest = guest;

    const room = await Room.findByIdAndUpdate(id, updatedRoom, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      room,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

exports.deleteRoom = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
    await Room.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
