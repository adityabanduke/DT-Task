import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    tagline: {
      type: String,
    },
    schedule: { type: Date, default: Date.now },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    moderator: {
      type: String,
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    rigorRank: {
      type: String,
    },
    attendees: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
