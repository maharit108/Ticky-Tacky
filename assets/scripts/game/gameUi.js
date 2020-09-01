'use strict'

const store = require('./../store.js')
const brain = require('./gameBrains.js')
const gameApi = require('./gameApi')
const gameEvent = require('./gameEvents')

const startSuccess = function (response) {
  store.gameOn = response.game
  $('.gameboard').text('')
  store.sign = ''
  store.winCond = ''

  gameApi.showAllFunc('showAll')
    .then(response => $('.overview').text(`No of Games Played= ${response.games.length}`))
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
  console.log(response.games.length)
  let displaymsg = '<ul id = `ulid`>'
  store.games.forEach(function (plays) {
    const pl = (`<br><li id = ${plays._id}>
      <div class='databox'>
        <div class='databoard'>${plays.cells[0]}</div>
        <div class='databoard'>${plays.cells[1]}</div>
        <div class='databoard'>${plays.cells[2]}</div>
        <div class='databoard'>${plays.cells[3]}</div>
        <div class='databoard'>${plays.cells[4]}</div>
        <div class='databoard'>${plays.cells[5]}</div>
        <div class='databoard'>${plays.cells[6]}</div>
        <div class='databoard'>${plays.cells[7]}</div>
        <div class='databoard'>${plays.cells[8]}</div>
      </div></li><br>`)
    displaymsg += pl
  })
  displaymsg += '</ul>'
  $('.history').html(displaymsg)
  // $('.a').on('click', gameEvent.showOne)
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
