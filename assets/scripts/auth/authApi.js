'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const signUpFunc = function (formValue) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formValue
  })
}

const signInFunc = function (formValue) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formValue
  })
}

const changePwFunc = function (formValue) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formValue
  })
}

const signOutFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUpFunc, signInFunc, changePwFunc, signOutFunc
}
