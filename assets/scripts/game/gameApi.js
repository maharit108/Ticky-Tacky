'use strict'

const config = require('./../config.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: ''
  })
}

module.exports = {
  newGame
}
