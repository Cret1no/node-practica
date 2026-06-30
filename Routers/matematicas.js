const express = require('express')
const routerMatematica = express.Router()
const { matematicas } = require('../datos-cursos/cursos.js').infoCursos

routerMatematica.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMatematica.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const resultados = matematicas.filter((curso) => curso.tema === tema)

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  return res.end(JSON.stringify(resultados))
})

module.exports = routerMatematica
