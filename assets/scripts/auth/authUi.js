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
  $('#sinForm').trigger('reset')
  $('#startGame').show()
  store.user = response.user
  gameEvent.startGame()
  $('.main').show()
  $('.top').hide()
  $('header').show()
}

const signInFail = function (response) {
  $('.authMsg').text("Couldn't Sign In. Check email and Password")
  $('#sinForm').trigger('reset')
}

const changePwSuccess = function () {
  $('#pwMsg').text('Password Changed')
  $('#cpForm').trigger('reset')
}

const changePwFail = function () {
  $('#pwMsg').text("Couldn't change Password. Try Again")
  $('#cpForm').trigger('reset')
}

const soutSuccess = function () {
  $('.authMsg').text('Log In to Play')
  $('.top').show()
  $('.main').hide()
  $('header').hide()
}

const soutFail = function () {
  console.log('Error:: Sign Out')
}

module.exports = {
  signUpFail, signUpSuccess, signInSuccess, signInFail, changePwSuccess, changePwFail, soutSuccess, soutFail
}
