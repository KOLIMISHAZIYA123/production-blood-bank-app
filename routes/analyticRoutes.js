
const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
    bloodGroupDetailsController,
} = require("../controllers/analyticController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsController);

module.exports = router;
