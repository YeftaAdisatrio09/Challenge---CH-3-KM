const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("user/dashboard");
});

module.exports = router;
