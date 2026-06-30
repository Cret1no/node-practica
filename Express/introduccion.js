const express = require('express')
const app = express()
const { infoCursos } = require('../datos-cursos/cursos.js')
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi primer servidor y API creados con Node.js')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

// Routers

const routerProgramacion = require('../Routers/programacion.js')
app.use('/cursos/programacion', routerProgramacion)

const routerMatematica = require('../Routers/matematicas.js')
app.use('/cursos/matematicas', routerMatematica)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
