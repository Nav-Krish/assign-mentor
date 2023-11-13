const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
  name: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Mentor = mongoose.model("Mentor", MentorSchema);

module.exports=Mentor