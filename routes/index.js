const examsRouter = require('./exams')
const labsRouter = require('./labs')

const init = () => {
    const router = require('express').Router()

    router.use('/exams', examsRouter())
    router.use('/labs', labsRouter())

    router.use('/', (req, res) => {
        res.status(200).send({
            msg: "OK! Agora para ver os exames e laboratorios digite: https://dasa-project.herokuapp.com/exams ou https://dasa-project.herokuapp.com/labs",
            email: "tetigo@gmail.com",
            project: "DASA - Labs and Exams"
        })
    })

    return router
}


module.exports = init
