'use strict'
// require/import files
const config = require('./../config.js')
const store = require('./../store.js')

// AJAX post call for new game; API game documentation referred
const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: '{}'
  })
}

// AJAX get call for show games
const showAllFunc = function (btnId) {
  let link = config.apiUrl + '/games'
  if (btnId === 'showAll') {
    link += ''
  } else if (btnId === 'showFin') {
    link += '?over=true'
  } else {
    link += '?over=false'
  }
  return $.ajax({
    url: link,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

// AJAX call for delete games
const deleteGameFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameid,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

// AJAX call for show games by id
const showGameFunc = function (gameid) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameid,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

// AJAX call for game update patch request
const updateGame = function (indx, mark, bool) {
  let link = config.apiUrl + '/games/' + store.gameOn._id
  return $.ajax({
    url: link,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: indx,
          value: mark
        },
        over: bool
      }
    }
  })
}

// export all functions from this file
module.exports = {
  newGame, showAllFunc, updateGame, deleteGameFunc, showGameFunc
}
