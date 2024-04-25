import BookingAddOns from '../models/BookingAddOns';

// Create a new booking add-on
export const createBookingAddOn = async (req, res) => {
  try {
    const newBookingAddOn = new BookingAddOns(req.body);
    const savedBookingAddOn = await newBookingAddOn.save();
    res.status(201).json(savedBookingAddOn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all booking add-ons
export const getAllBookingAddOns = async (req, res) => {
  try {
    const bookingAddOns = await BookingAddOns.find().populate('BookingID AddOnID');
    res.status(200).json(bookingAddOns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single booking add-on by ID
export const getBookingAddOnById = async (req, res) => {
  try {
    const bookingAddOn = await BookingAddOns.findById(req.params.id).populate('BookingID AddOnID');
    if (!bookingAddOn) {
      return res.status(404).json({ message: 'Booking add-on not found' });
    }
    res.status(200).json(bookingAddOn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a booking add-on
export const updateBookingAddOn = async (req, res) => {
  try {
    const bookingAddOn = await BookingAddOns.findById(req.params.id);
    if (!bookingAddOn) {
      return res.status(404).json({ message: 'Booking add-on not found' });
    }
    const updatedBookingAddOn = await BookingAddOns.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedBookingAddOn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a booking add-on
export const deleteBookingAddOn = async (req, res) => {
  try {
    const bookingAddOn = await BookingAddOns.findById(req.params.id);
    if (!bookingAddOn) {
      return res.status(404).json({ message: 'Booking add-on not found' });
    }
    await bookingAddOn.remove();
    res.status(200).json({ message: 'Booking add-on deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};