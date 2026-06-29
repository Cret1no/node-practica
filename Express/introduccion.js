const express = require('express')
const app = express()
const { infoCursos } = require('../API-cursos/cursos.js')
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi primer servidor y API creados con Node.js')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

app.get('/cursos/programacion', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion))
})

app.get('/cursos/matematicas', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
