'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvent = require('./auth/authEvents')
const gameEvent = require('./game/gameEvents')

$(() => {
  $('#supForm').on('submit', authEvent.signUpSubmit)
  $('#sinForm').on('submit', authEvent.signInSubmit)
  $('#cpForm').on('submit', authEvent.changePwSubmit)
  $('#sout').on('click', authEvent.signOut)
  $('#cpForm').hide()
  $('#sout').hide()

  $('#startGame').on('click', gameEvent.startGame)
  $('#startGame').hide()
  $('#showAll').add('#showFin').add('#showNotFin').on('click', gameEvent.showGames)
  $('#showById').on('click', gameEvent.deleteGame)

  $('.gameboard').on('click', gameEvent.gamePlay)
})

//
