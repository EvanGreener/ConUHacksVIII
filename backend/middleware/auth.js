const express = require('express')
var router = express.Router();

const auth = function (req, res, next) {
    console.log('LOGGED')
    next()
  }