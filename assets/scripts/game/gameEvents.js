'use strict'

const gameApi = require('./game/gameApi')
const gameUi = require('./game/gameUi')

const startGame = function () {
  gameApi.newGame()
    .then(gameUi.startSuccess)
    .catch(gameUi.startFail)
}

module.exports = {
  startGame
}
