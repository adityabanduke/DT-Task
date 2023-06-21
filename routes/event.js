import express from "express";
import { getEvent , getEvents , createEvent , updateEvent , deleteEvent } from "../controllers/event.controller.js";
const router = express.Router();
router.get("/events/:id" , getEvent);
router.get("/events" , getEvents);
router.post("/events" , createEvent);
router.put("/events/:id" , updateEvent);
router.delete("/events/:id" , deleteEvent);
export default router;