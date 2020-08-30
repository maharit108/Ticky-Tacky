'use strict'

const store = require('./../store.js')
const brain = require('./gameBrains.js')

const startSuccess = function (response) {
  store.gameOn = response.game
  $('.gameboard').text('')
  store.sign = 'X'
  store.winCond = ''
}

const startFail = function (response) {
  console.log('Nooo', response)
}

const deleteGameFail = function (response) {
  console.log('Nooo', response)
}

const deleteGameSuccess = function (response) {
  $('.history').text(`${store.games[0]._id} is deleted`)
  store.games.shift()
}

const showallSuccess = function (response) {
  store.games = response.games
  $('.history').text('')
  let displaymsg = ''
  if (store.games.length !== 0) {
    for (let i = 0; i < store.games.length; i++) {
      displaymsg += '\n' + store.games[i]._id + '\n'
    }
    $('.history').text(displaymsg)
  }
}

const showallFail = function (response) {
  console.log('Fail', response)
}

const upSuccess = function (response) {
  store.gameOn = response.game
  console.log(store.gameOn.cells)
  brain.win()
}


module.exports = {
  startFail, startSuccess, showallSuccess, showallFail, deleteGameFail, deleteGameSuccess, upSuccess
}
