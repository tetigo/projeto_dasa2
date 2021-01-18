const conn = require('./db')
const app = require('./app')()
const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.log('Nao foi possivel iniciar o servidor.')
    } else {
        console.log(`Servidor rodando na porta ${port}`)
    }
})

