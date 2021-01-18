const init = () => {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')

    const routes = require('./routes')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.use(routes())

    return app
}

module.exports = init



