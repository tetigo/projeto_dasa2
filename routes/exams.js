const init = () => {
    const router = require('express').Router()
    const exams = require("../controllers/examsController.js");

    router.post("/", exams.create);
    router.get("/", exams.findAll);
    router.get("/:exam_id", exams.findOne);
    router.put("/:exam_id", exams.update);
    router.delete("/:exam_id", exams.delete);
    router.delete("/", exams.deleteAll);

    return router
}

module.exports = init
