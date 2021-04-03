const express = require("express")
const router = express.Router();
var students_controller = require("../controllers/students_controller")

router.get("/test", students_controller.test)

router.post("/create", students_controller.create)

router.delete("/:id/delete", students_controller.delete)

router.get("/:id", students_controller.details)

router.put("/:id/update", students_controller.update)

module.exports = router;
