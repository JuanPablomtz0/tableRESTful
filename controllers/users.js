const express = require('express');

function sumar(req, res, next) {
  var cal = parseFloat(req.params.n1) + parseFloat(req.params.n2);
  res.send(`Resultado de sumar: ${cal}`);
}

function multiplicar(req, res, next) {
  var cal = parseFloat(req.params.n1) * parseFloat(req.params.n2);
  res.send(`Resultado de multiplicar: ${cal}`);
}

function dividir(req, res, next) {
  var cal = 0;
  if(parseFloat(req.params.n2) != 0)
    cal = parseFloat(req.params.n1) / parseFloat(req.params.n2);
  res.send(`Resultado de dividir: ${cal}`);
}

function potencia(req, res, next) {
  var cal = Math.pow(parseFloat(req.params.n1),parseFloat(req.params.n2));
  res.send(`Resultado de potencia: ${cal}`);
}

function restar(req, res, next) {
  var cal = req.params.n1 - req.params.n2;
  res.send(`Resultado de restar: ${cal}`);
}

module.exports = {
  sumar, multiplicar, dividir, potencia, restar
}
