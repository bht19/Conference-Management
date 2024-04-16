const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Bharatserver:Bharat7885@bharatserver.jow40zq.mongodb.net/reviewers")

const reviewerSchema = mongoose.Schema({
    name: String,
    qualification: String,
    papersAssigned: Number,
    university: String,
    address: String,
    contact: Number,
    email: String 
});

const Reviewer = mongoose.model("Reviewer", reviewerSchema);

module.exports = { Reviewer };