'use strict'

const store = require('./../store.js')

const win = function () {
  const winCond = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]
  const chk = store.gameOn.cells
  if (chk.includes('') === false) {
    store.bool = true
    store.winCond = 'T'
    $('.results').text('Game-Tie')
  } else {
    chk.map(function (val, index, arr) {
      arr[index] = index + val
    })
    const x = chk.filter(val => val.includes('X')).map(val => val.slice(0, 1))
    const y = chk.filter(val => val.includes('O')).map(val => val.slice(0, 1))
    if (winCond.some(arr => arr.every(val => x.includes(val)))) {
      store.winCond = 'X'
      store.bool = true
      $('.results').text('X WINS')
    } else if (winCond.some(arr => arr.every(val => y.includes(val)))) {
      store.winCond = 'O'
      store.bool = true
      $('.results').text('O WINS')
    } else {
      store.winCond = ''
      store.bool = false
    }
  }
}

module.exports = {
  win
}
