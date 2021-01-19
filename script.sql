CREATE DATABASE IF NOT EXISTS `db_exam_lab`; 

CREATE TABLE IF NOT EXISTS `db_exam_lab`.`exams` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    tipo ENUM('analise clinica', 'imagem'),
    ativo BOOLEAN DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `db_exam_lab`.`labs` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    endereco varchar(255) NOT NULL,
    ativo BOOLEAN DEFAULT true,
    exam_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `db_exam_lab`.`labs` ADD CONSTRAINT fk_lab_exam_id FOREIGN KEY (exam_id) REFERENCES exams(id);

INSERT INTO `db_exam_lab`.`exams`(nome, tipo) VALUES('ultrassom', 'imagem');
INSERT INTO `db_exam_lab`.`exams`(nome, tipo) VALUES('sangue', 'analise clinica');
INSERT INTO `db_exam_lab`.`exams`(nome, tipo) VALUES('urina', 'analise clinica');

INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 01', 'rua dos jequitibas', 1);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 01', 'rua dos jequitibas', 2);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 02', 'rua vitoria', 1);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 02', 'rua vitoria', 2);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 02', 'rua vitoria', 3);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 03', 'rua vitoria', 3);
INSERT INTO `db_exam_lab`.`labs`(nome, endereco, exam_id) VALUES('lab 03', 'rua vitoria', 2);
