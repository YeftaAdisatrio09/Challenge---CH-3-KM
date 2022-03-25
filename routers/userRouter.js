const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    req.app.set("layout", "layouts/user");
    next();
});

router.get("/", userController.default);
router.get("/cars", userController.cars);
router.get("/cars/add", userController.carAdd);

module.exports = router;
