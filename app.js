const { json, urlencoded } = require('express')

const init = () => {
    const express = require('express')
    const cors = require('cors')
    const app = express()

    const routes = require('./routes')

    app.use(urlencoded({ extended: true }))
    app.use(json())

    app.use(routes())

    const options = {
        methods: 'GET, POST, PUT, DELETE, OPTIONS',
        origin: '*'
    }
    app.use(cors(options))

    return app
}

module.exports = init



