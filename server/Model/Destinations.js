import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  DestinationID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  ImageURL: {
    type: String,
    required: true
  },
  Duration: {
    type: Number,
    required: true
  },
  Price: {
    type: Number,
    required: true
  }
});

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;