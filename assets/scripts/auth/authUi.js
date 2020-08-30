'use strict'

const store = require('./../store')
const gameEvent = require('./../game/gameEvents')

const signUpSuccess = function (response) {
  $('.authMsg').text("You're ready!!! \n Sign In to Play")
  $('#supForm').trigger('reset')
  $('#supForm').hide()
  $('.signup').hide()
  $('.login').show()
  $('.newuse').show()
}

const signUpFail = function (response) {
  $('.authMsg').text('Sign Up Failed. Try Again with Another Email and Password')
  $('#supForm').trigger('reset')
}

const signInSuccess = function (response) {
  $('.authMsg').text(`Let's Play!!! \n User:${response.user.email}`)
  $('#sinForm').trigger('reset')
  $('#cpForm').show()
  $('#supForm').hide()
  $('#sinForm').hide()
  $('#sout').show()
  $('#startGame').show()
  $('.newuse').hide()
  $('.startMsg').hide()
  store.user = response.user
  gameEvent.startGame()
}

const signInFail = function (response) {
  $('.authMsg').text("Couldn't Sign In. Check email and Password")
  $('#sinForm').trigger('reset')
}

const changePwSuccess = function () {
  $('.authMsg').text('Password Changed')
  $('#cpForm').trigger('reset')
}

const changePwFail = function () {
  $('.authMsg').text("Couldn't change Password. Try Again")
  $('#cpForm').trigger('reset')
}

const soutSuccess = function () {
  $('.authMsg').text('Sign In to Play')
  $('#supForm').show()
  $('#sinForm').show()
  $('#cpForm').hide()
  $('#sout').hide()
  $('#startGame').hide()
}

const soutFail = function () {
  $('.authMsg').text("Couldn't Sign Out")
}

module.exports = {
  signUpFail, signUpSuccess, signInSuccess, signInFail, changePwSuccess, changePwFail, soutSuccess, soutFail
}
