// models/Assignment.js
import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
}, { collection: 'assignments' });


export default assignmentSchema;
