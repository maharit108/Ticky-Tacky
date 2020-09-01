'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./../store.js')

const startGame = function () {
  $('.btn').show()
  $('.pl1-show').hide()
  $('.pl2-show').hide()
  $('.disbox').hide()
  store.sign = ''
  gameApi.newGame()
    .then(gameUi.startSuccess)
    .catch(gameUi.startFail)
}

const showGames = function (event) {
  gameApi.showAllFunc(event.target.id)
    .then(gameUi.showallSuccess)
    .catch(gameUi.showAllFail)
}

const signSelect = function (event) {
  $('.pl1-show').show()
  $('.pl2-show').show()
  $('.btn').hide()
  if (`${event.target.id}` === 'X1' || `${event.target.id}` === 'O2') {
    store.sign = 'X'
    $('.pl1-show').text('X')
    $('.pl2-show').text('O')
  } else {
    store.sign = 'O'
    $('.pl1-show').text('O')
    $('.pl2-show').text('X')
  }
}

const gamePlay = function () {
  if (store.sign !== '') {
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
  }
  store.sign === 'O' ? store.sign = 'X' : store.sign = 'O'
}

const deleteGame = function () {
  gameApi.deleteGameFunc()
    .then(gameUi.deleteGameSuccess)
    .catch(gameUi.deleteGameFail)
}
module.exports = {
  startGame, showGames, gamePlay, deleteGame, signSelect
}
