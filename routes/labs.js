const init = () => {
    const labs = require('../controllers/labsController')
    const router = require('express').Router()

    router.post("/", labs.create);
    router.get("/", labs.findAll);
    router.get("/:lab_id", labs.findOne);
    router.get("/exam/:exam_name", labs.findByExamName);
    router.put("/:lab_id", labs.update);
    router.delete("/:lab_id", labs.delete);
    router.delete("/", labs.deleteAll);

    return router
}

module.exports = init
