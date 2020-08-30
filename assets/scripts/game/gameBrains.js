'use strict'

const store = require('./../store.js')

const win = function () {
  const winCond = ['abc', 'aaa', 'bbb', 'ccc']
  const chk = store.gameOn.cells
  chk.map(function (val, index, arr) {
    if ([0, 1, 2].includes(index)) {
      arr[index] = 'a' + val
    } else if ([3, 4, 5].includes(index)) {
      arr[index] = 'b' + val
    } else {
      arr[index] = 'c' + val
    }
  })
  const x = chk.filter(val => val.includes('X')).map(val => val.slice(0, 1))
  const y = chk.filter(val => val.includes('O')).map(val => val.slice(0, 1))
  if (winCond.includes(x.sort().join('')) === true) {
    store.winCond = 'X'
  } else if (winCond.includes(y.sort().join('')) === true) {
    store.winCond = 'O'
  } else {
    store.winCond = ''
  }
  console.log('Ui', store.winCond)
}

// const checkifClicked = function(get){
//   //if yes return error
//   // else call attempt
// }
//
// const playerTurn = function(get) {
//   let num = get.join('').length
//   let sign ='X'
//   if(num % 2 !== 0) {
//     sign = 'O'
//   }
//   return sign
// }
//
// const attempt = function(event) {
//   event.preventDefault()
//   let get = ['','','','','','','','',''] //get function here--api.js
//
//   let index = $(this).data('num')
//
//   // let sign = sign() //X or O
//   get[index] = playerTurn(get)
//   //update PATCH function here--api.js
// }

module.exports = {
  win
}
