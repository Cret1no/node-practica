const express = require('express')
const app = express()
const { infoCursos } = require('../API-cursos/cursos.js')
const PORT = 3000
// Routers
const routerProgramacion = express.Router()
app.use('/cursos/programacion', routerProgramacion)
const routerMatematica = express.Router()
app.use('/cursos/matematicas', routerMatematica)

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi primer servidor y API creados con Node.js')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion))
})

routerMatematica.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const resultados = infoCursos.programacion.filter((curso) => {
    return curso.lenguaje === lenguaje
  })
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
  }

  // QUERY-PARAMS http://localhost:3000/cursos/programacion/python?ordenar=vistas
  if (req.query.ordenar === 'vistas') {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    )
  }
  return res.send(JSON.stringify(resultados))
})

routerMatematica.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  )

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  return res.end(JSON.stringify(resultados))
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const { lenguaje, nivel } = req.params
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  )

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(
        `No se encontraron cursos del lenguaje: ${lenguaje} de nivel: ${nivel}`
      )
  }

  return res.send(JSON.stringify(resultados))
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
