import mongoose from 'mongoose';

const bookingAddOnsSchema = new mongoose.Schema({
  BookingAddOnID: {
    type: String,
    required: true,
    unique: true
  },
  BookingID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true
  },
  AddOnID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AddOn',
    required: true
  }
});

const BookingAddOns = mongoose.model('BookingAddOns', bookingAddOnsSchema);

export default BookingAddOns;