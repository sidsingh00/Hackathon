import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  TourID: {
    type: String,
    required: true,
    unique: true
  },
  DestinationID: {
    type: String,
    required: true
  },
  TourDate: {
    type: Date,
    required: true
  },
  AvailableSeats: {
    type: Number,
    required: true
  },
  Status: {
    type: String,
    enum: ['Available', 'Booked'],
    required: true
  }
});

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;