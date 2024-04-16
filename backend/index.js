const { Reviewer } = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/reviewers", async function(req, res) {
    try {
        const allReviewers = await Reviewer.find({});
        
        res.json({ status: "ok", data: allReviewers });
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

app.get("/reviewers/:id", async function(req, res) {
    try {
        const reviewerId = req.params.id;

        const reviewer = await Reviewer.findById(reviewerId);

        if (reviewer) {
            res.json({ status: "ok", data: reviewer });
        } else {
            res.status(404).json({ status: "error", message: "Reviewer not found" });
        }
    } catch (error) {
        console.error("Error fetching reviewer:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});