import Destination from '../models/Destination';

// Create a new destination
export const createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a destination
export const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a destination
export const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    await destination.remove();
    res.status(200).json({ message: 'Destination deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};