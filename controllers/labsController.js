
const Labs = require("../models/labs");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const lab = new Labs({
        nome: req.body.nome,
        endereco: req.body.endereco,
        ativo: req.body.ativo,
        exam_id: req.body.exam_id
    });

    Labs.create(lab, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Lab."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Labs.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving labs."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Labs.findById(req.params.lab_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Lab with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Lab with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

exports.findByExamName = (req, res) => {
    Labs.findByExamName(req.params.exam_name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Lab with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Lab with id " + req.params.customerId
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

    Labs.updateById(
        req.params.lab_id,
        { ...req.body },
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.labs_id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.labs_id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Labs.remove(req.params.lab_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.lab_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.lab_id
                });
            }
        } else res.send({ message: `Lab was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Labs.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all customers."
            });
        else res.send({ message: `All Customers were deleted successfully!` });
    });
};