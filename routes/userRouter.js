const express = require("express");
const router = express.Router();

//// Import Controllers
const userController = require("../controllers/userController");

//// Routes
router
  .route("/")
  .get(userController.getAll)
  .post(userController.signup)
  .delete(userController.deleteAll);

module.exports = router;
