const init = () => {
    const labsController = require('../controllers/labsController')
    const router = require('express').Router()

    router.post("/", labsController.create);
    router.get("/", labsController.findAll);
    router.get("/:lab_id", labsController.findOne);
    router.get("/exam/:exam_name", labsController.findByExamName);
    router.put("/:lab_id", labsController.update);
    router.delete("/:lab_id", labsController.delete);
    router.delete("/", labsController.deleteAll);

    return router
}

module.exports = init
