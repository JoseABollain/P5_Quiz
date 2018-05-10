var express = require('express');
var router = express.Router();

const {models} = require('../models/index.js');
const Sequelize = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', créditos: 'http://localhost:3000/credits', quizzes: 'http://localhost:3000/quizzes' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'P5_Quiz', autor: 'José Antonio Bollaín González', imagen: 'images/image.jpg', alt: 'Imagen Proyecto Quiz'});
});

router.get('/quizzes', function(req, res, next) {
  let lista = [];		
  models.quiz.findAll()
  .each(quiz => {
  	 lista.push(quiz);
  })
  .then(() => {
  	 res.render('quizzes', {title: 'Lista de Quizzes', quizzes: lista});
  })
});

module.exports = router;
