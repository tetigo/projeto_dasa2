const examsRouter = require('./exams')
const labsRouter = require('./labs')

const init = () => {
    const router = require('express').Router()

    router.use('/exams', examsRouter())
    router.use('/labs', labsRouter())

    return router
}


module.exports = init
