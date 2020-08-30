'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const authApi = require('./authApi')
const authUi = require('./authUi')

const signUpSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const formValue = getFormFields(form)
  if (formValue.credentials.password !== formValue.credentials.password_confirmation) {
    $('.authMsg').text("Passwords don't Match")
    $('#supForm').trigger('reset')
  } else {
    authApi.signUpFunc(formValue)
      .then(authUi.signUpSuccess)
      .catch(authUi.signUpFail)
  }
}

const signInSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const formValue = getFormFields(form)
  authApi.signInFunc(formValue)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

const changePwSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const formValue = getFormFields(form)
  authApi.changePwFunc(formValue)
    .then(authUi.changePwSuccess)
    .catch(authUi.changePwFail)
}

const signOut = function (event) {
  event.preventDefault()
  authApi.signOutFunc()
    .then(authUi.soutSuccess)
    .catch(authUi.soutFail)
}

module.exports = {
  signUpSubmit, signInSubmit, changePwSubmit, signOut
}
