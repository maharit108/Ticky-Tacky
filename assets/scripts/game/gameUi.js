'use strict'

const store = require('./../store.js')
const brain = require('./gameBrains.js')
const gameApi = require('./gameApi')

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
  $('.history').text('Delete complete')
  $('#del').hide()
}

const showallSuccess = function (response) {
  store.games = response.games
  let displaymsg = '<ol id = olid>'
  store.games.forEach(function (plays) {
    const pl = (`<br><li id = ${plays._id}>
    <div class='in'>
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
      </div>
      </div></li><br>`)
    displaymsg += pl
  })
  displaymsg += '</ol>'
  $('.history').html(displaymsg)
  $('ol').css('list-style-type', 'none')
  $('#del').hide()
}

const showallFail = function (response) {
  console.log('Error: Show All')
  $('#del').hide()
}

const showoneFail = function (response) {
  console.log('Error: Show One')
  $('#del').hide()
}

const upSuccess = function (response) {
  store.gameOn = response.game
  brain.win()
  if (store.winCond === 'X' || store.winCond === 'O' || store.winCond === 'T') {
    gameApi.updateGame(store.index, store.sign, store.bool)
  }
}

const showoneSuccess = function (response) {
  let displaymsg = ''
  displaymsg += (
    `<div class='in1'>
    <div class='databox1'>
        <div class='databoard1'>${response.game[0].cells[0]}</div>
        <div class='databoard1'>${response.game[0].cells[1]}</div>
        <div class='databoard1'>${response.game[0].cells[2]}</div>
        <div class='databoard1'>${response.game[0].cells[3]}</div>
        <div class='databoard1'>${response.game[0].cells[4]}</div>
        <div class='databoard1'>${response.game[0].cells[5]}</div>
        <div class='databoard1'>${response.game[0].cells[6]}</div>
        <div class='databoard1'>${response.game[0].cells[7]}</div>
        <div class='databoard1'>${response.game[0].cells[8]}</div>
      </div>
      </div>`)
  $('.history').html(displaymsg)
  $('#del').show()
}

module.exports = {
  startFail, startSuccess, showallSuccess, showallFail, deleteGameFail, deleteGameSuccess, upSuccess, showoneSuccess, showoneFail
}
