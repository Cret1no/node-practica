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

app.get('/cursos/programacion/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const resultados = infoCursos.programacion.filter((curso) => {
    return curso.lenguaje === lenguaje
  })
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
  }
  return res.send(JSON.stringify(resultados))
})

app.get('/cursos/matematicas/:tema', (req, res) => {
  const tema = req.params.tema
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema,
  )

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  return res.end(JSON.stringify(resultados))
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
