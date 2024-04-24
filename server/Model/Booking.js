import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  BookingID: {
    type: String,
    required: true,
    unique: true
  },
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  TourID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    required: true
  },
  BookingDate: {
    type: Date,
    required: true
  },
  TotalPrice: {
    type: Number,
    required: true
  },
  Status: {
    type: String,
    required: true,
    enum: ['Pending', 'Confirmed'],
    default: 'Pending'
  },
  AddOnID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AddOn',
    default: null
  },
  Name: {
    type: String,
    default: null
  },
  Description: {
    type: String,
    default: null
  },
  Price: {
    type: Number,
    default: null
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;