
const Exams = require("../models/exams");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const exam = new Exams({
        nome: req.body.nome,
        tipo: req.body.tipo,
        ativo: req.body.ativo,
    });

    Exams.create(exam, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Exam."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Exams.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving exams."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Exams.findById(req.params.exam_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Exam with id ${req.params.exam_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Exam with id " + req.params.exam_id
                });
            }
        } else res.send(data);
    });
};

exports.findByExamName = (req, res) => {
    Exams.findByExamName(req.params.exam_name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Exam with name ${req.params.exam_name}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Exam with name " + req.params.exam_name
                });
            }
        } else res.send(data);
    });

}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Exams.updateById(
        req.params.exam_id,
        new Exams(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.exams_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.exams_id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Exams.remove(req.params.exam_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.exam_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.exam_id
                });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Exams.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all customers."
            });
        else res.send({ message: `All Customers were deleted successfully!` });
    });
};