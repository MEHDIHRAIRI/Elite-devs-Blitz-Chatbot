const express = require("express");

const Controller = require("../controllers/course");

const router = express.Router();

router.get("/a", Controller.getCourseDb);
router.get("/temp", Controller.getTempCourseDb);
router.post("/date", Controller.setCourseAndDate);
router.get("/find", Controller.getCourseDbById);
router.delete("/:id", Controller.DeleteCourseDb);
router.route("/udemy").get(Controller.getCourseUdemy);
router.get("/:search", Controller.getCourseUdemyBySearch);

module.exports = router;
