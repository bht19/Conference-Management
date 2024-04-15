const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/reviewerdDB")

const reviewerSchema = mongoose.Schema({
    name: String,
    email: String,
    affiliation: String
});

const Reviewer = mongoose.model("Reviewers", reviewerSchema);

module.exports = { Reviewer };