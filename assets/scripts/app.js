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

  $('.main').hide()
  $('header').hide()
  $('#supForm').hide()

  $('.newuse').on('click', () => {
    $('.signup').show()
    $('.login').hide()
    $('.newuse').hide()
    $('.startMsg').css({ border: '1px solid black', width: 'calc(175px + 2em)', height: '35px', 'text-align': 'center', 'margin-bottom': '15px' })
  })

  $('.startMsg').on('click', () => {
    $('.signup').hide()
    $('.login').show()
    $('.newuse').show()
    $('.startMsg').css('border', '0px')
  })

  $('#startGame').on('click', gameEvent.startGame)
  $('.gameboard').on('click', gameEvent.gamePlay)
  $('#del').on('click', gameEvent.deleteGame)

  $('#startGame').hide()
  $('#del').add('#edit').hide()

  $('.X').add('.O').on('click', gameEvent.signSelect)
  $('#showAll').add('#showFin').add('#showNotFin').on('click', gameEvent.showGames)
  $('.history').on('click', '.databoard', gameEvent.showOne)
})
