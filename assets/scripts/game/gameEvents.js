'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')

const startGame = function () {
  gameApi.newGame()
    .then(gameUi.startSuccess)
    .catch(gameUi.startFail)
}

module.exports = {
  startGame
}
