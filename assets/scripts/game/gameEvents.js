'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./../store.js')

const startGame = function () {
  $('.btn').show()
  $('.pl1-show').hide()
  $('.pl2-show').hide()
  store.sign = ''
  $('.pl1-show').text('')
  $('.results').text('Select Your Sign')
  gameApi.newGame()
    .then(gameUi.startSuccess)
    .catch(gameUi.startFail)
}

const showGames = function (event) {
  $(`#${event.target.id}`).css('background-color', 'rgba(195, 195, 195,0.5)')
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
  $('.results').text('')
}

const gamePlay = function () {
  if ($('.pl1-show').text() !== '') {
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
}

const deleteGame = function () {
  gameApi.deleteGameFunc()
    .then(gameUi.deleteGameSuccess)
    .catch(gameUi.deleteGameFail)
}

const showOne = function (event) {
  const gameid = event.target.parentElement.parentElement.parentElement.id
  store.gameid = gameid
  gameApi.showGameFunc(gameid)
    .then(gameUi.showoneSuccess)
    .catch(gameUi.showoneFail)
}
module.exports = {
  startGame, showGames, gamePlay, deleteGame, signSelect, showOne
}
