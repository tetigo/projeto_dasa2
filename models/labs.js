const sql = require('../db')

const Labs = (lab) => {
    this.nome = lab.nome;
    this.endereco = lab.endereco;
    this.ativo = lab.ativo;
    this.exam_id = exam_id
}

Labs.create = (newLab, result) => {
    sql.query("INSERT INTO labs SET ?", newLab, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created lab: ", { id: res.insertId, ...newLab });
        result(null, { id: res.insertId, ...newLab });
    });
};


Labs.findById = (lab_id, result) => {
    sql.query(`SELECT * FROM labs WHERE id = ${lab_id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found lab: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Labs.findByExamName = (exam_name, result) => {
    sql.query(`SELECT l.nome FROM labs l inner join exams e on l.exam_id = e.id 
                WHERE e.nome = '${exam_name}' and l.ativo = true and e.ativo= true`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found labs: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};



Labs.getAll = result => {
    sql.query("SELECT * FROM labs", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("labs: ", res);
        result(null, res);
    });
};


Labs.updateById = (id, lab, result) => {
    sql.query(
        "UPDATE labs SET nome = ?, endereco = ?, ativo = ?, exam_id = ? WHERE id = ?",
        [lab.nome, lab.endereco, lab.ativo, lab.exam_id, id],
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

            console.log("updated lab: ", { id: id, ...lab });
            result(null, { id: id, ...lab });
        }
    );
};


Labs.remove = (id, result) => {
    sql.query("DELETE FROM labs WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted lab with id: ", id);
        result(null, res);
    });


    Labs.removeAll = result => {
        sql.query("DELETE FROM labs", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log(`deleted ${res.affectedRows} labs`);
            result(null, res);
        });
    };

};

module.exports = Labs;