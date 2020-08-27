'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvent = require('./auth/authEvents')

$(() => {
  $('#supForm').on('submit', authEvent.signUpSubmit)
  $('#sinForm').on('submit', authEvent.signInSubmit)
  $('#cpForm').on('submit', authEvent.changePwSubmit)
  $('#sout').on('click', authEvent.signOut)
  $('#cpForm').hide()
  $('#sout').hide()
})

// $('#0').add('#1').add('#2').add('#3').add('#4').add('#5').add('#6').add('#7').add('#8').on('click', authEvents.attempt)
