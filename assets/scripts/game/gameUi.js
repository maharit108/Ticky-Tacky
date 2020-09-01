'use strict'

const store = require('./../store.js')
const brain = require('./gameBrains.js')
const gameApi = require('./gameApi')

const startSuccess = function (response) {
  store.gameOn = response.game
  $('.gameboard').text('')
  store.sign = ''
  store.winCond = ''
}

const startFail = function (response) {
  console.log('Error: Start Fail')
}

const deleteGameFail = function (response) {
  console.log('Error: Delete Game')
}

const deleteGameSuccess = function (response) {
  $('.history').text(`${store.games[0]._id} is deleted`)
  store.games.shift()
}

const showallSuccess = function (response) {
  store.games = response.games
  let displaymsg = ''
  store.games.forEach(function (plays) {
    const pl = (`
    <ul id='game'>
      <li id = ${plays._id}>[${plays.cells}]</li>
    </ul>`)
    displaymsg += pl
  })
  $('.history').html(displaymsg)
}

const showallFail = function (response) {
  console.log('Error: Show All')
}

const upSuccess = function (response) {
  store.gameOn = response.game
  brain.win()
  if (store.winCond === 'X' || store.winCond === 'O' || store.winCond === 'T') {
    gameApi.updateGame(store.index, store.sign, store.bool)
  }
}

module.exports = {
  startFail, startSuccess, showallSuccess, showallFail, deleteGameFail, deleteGameSuccess, upSuccess
}
