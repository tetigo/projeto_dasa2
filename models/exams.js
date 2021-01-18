const sql = require('../db')

const Exams = (exam) => {
    this.nome = exam.nome;
    this.tipo = exam.tipo;
    this.ativo = exam.ativo;
}

Exams.create = (newExam, result) => {
    sql.query("INSERT INTO exams SET ?", newExam, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created exam: ", { id: res.insertId, ...newExam });
        result(null, { id: res.insertId, ...newExam });
    });
};


Exams.findById = (exam_id, result) => {
    sql.query(`SELECT * FROM exams WHERE id = ${exam_id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found exam: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};


Exams.getAll = result => {
    sql.query("SELECT * FROM exams", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("exams: ", res);
        result(null, res);
    });
};


Exams.updateById = (id, exam, result) => {
    sql.query(
        "UPDATE exams SET nome = ?, tipo = ?, ativo = ? WHERE id = ?",
        [exam.nome, exam.endereco, exam.ativo, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated exam: ", { id: id, ...exam });
            result(null, { id: id, ...exam });
        }
    );
};


Exams.remove = (id, result) => {
    sql.query("DELETE FROM exams WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted exam with id: ", id);
        result(null, res);
    });


    Exams.removeAll = result => {
        sql.query("DELETE FROM exams", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log(`deleted ${res.affectedRows} exams`);
            result(null, res);
        });
    };

};

module.exports = Exams;