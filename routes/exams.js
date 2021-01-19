const init = () => {
    const router = require('express').Router()
    const examsController = require("../controllers/examsController.js");

    router.post("/", examsController.create);
    router.get("/", examsController.findAll);
    router.get("/:exam_id", examsController.findOne);
    router.put("/:exam_id", examsController.update);
    router.delete("/:exam_id", examsController.delete);
    router.delete("/", examsController.deleteAll);

    return router
}

module.exports = init
