'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./../store.js')

const startGame = function () {
  gameApi.newGame()
    .then(gameUi.startSuccess)
    .catch(gameUi.startFail)
}

const showGames = function (event) {
  gameApi.showAllFunc(event.target.id)
    .then(gameUi.showallSuccess)
    .catch(gameUi.showAllFail)
}

const gamePlay = function () {
  if ($(`#${event.target.id}`).html() === '') {
    if (store.winCond === '') {
      $(`#${event.target.id}`).text(store.sign)
      const indx = event.target.id
      store.index = indx
      gameApi.updateGame(indx, store.sign, false)
        .then(gameUi.upSuccess)
        .catch(() => console.log('fail'))
    }
  }
  store.sign === 'O' ? store.sign = 'X' : store.sign = 'O'
}

const deleteGame = function () {
  gameApi.deleteGameFunc()
    .then(gameUi.deleteGameSuccess)
    .catch(gameUi.deleteGameFail)
}
module.exports = {
  startGame, showGames, gamePlay, deleteGame
}
