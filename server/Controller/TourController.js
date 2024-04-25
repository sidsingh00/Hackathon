import Tour from '../models/Tour';

// Create a new tour
export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tours
export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('DestinationID');
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single tour by ID
export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('DestinationID');
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a tour
export const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a tour
export const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    await tour.remove();
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};