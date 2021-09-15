const express = require('express');


function home(req, res, next) {
  res.render('index', { title: 'Buenas' });
}

module.exports = {
  home
}
