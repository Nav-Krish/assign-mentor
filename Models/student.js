import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  currentMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  prevMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;