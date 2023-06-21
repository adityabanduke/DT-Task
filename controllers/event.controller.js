import event from "../models/event.js";
import Event from "../models/event.js";


export const createEvent = async (req, res) => {
  try {

    
    const newEvent = new Event({
      name: req.body.username,
      tagline: req.body.email,
      schedule: req.body.schedule,
      description: req.body.description,
      images: req.body.images,
      moderator: req.body.moderator,
      category: req.body.category,
      subcategory: req.body.subcategory,
      rigorRank: req.body.rigorRank,
      attendees: req.body.attendees,
    });
    await newEvent.save();
    res.status(200).json(`Event created sucsessully with id ${newEvent._id}`);
  } catch (error) {
    res.send(error)
  }
};

export const updateEvent = async (req, res) => {
  try {
    console.log(req.params.id);
    const updateEvent = await Event.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    console.log(updateEvent);
    return res.status(200).json(updateEvent);
  } catch (error) {
    console.log(error);
    return res.status(404).send("error");
  }
};
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    return res.status(200).json("Event deleted sucsessully");
  } catch (error) {
    return res.status(404).send("error");
  }
};
export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    return res.status(200).json(event);
  } catch (error) {
    return res.status(404).send("error hai");
  }
};
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(404).send("error");
  }
};
