const express = require('express')
const routerProgramacion = express.Router()
const { programacion } = require('../datos-cursos/cursos.js').infoCursos

// Middleware (se ejecuta despues de la solicitud y antes de la respuesta)
// En este caso se utilliza para manejar el cuerpo de la solicitud en formato jason
// Revisa cualquier solicitud, de cualquier metodo
routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion))
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const resultados = programacion.filter((curso) => {
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

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const { lenguaje, nivel } = req.params
  const resultados = programacion.filter(
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

routerProgramacion.post('/', (req, res) => {
  const body = req.body
  programacion.push(body)
  res.send(programacion)
})

module.exports = routerProgramacion
