const checkifClicked = function(get){
  //if yes return error
  // else call attempt
}

const playerTurn = function(get) {
  let num = get.join('').length
  let sign ='X'
  if(num % 2 !== 0) {
    sign = 'O'
  }
  return sign
}

const attempt = function(event) {
  event.preventDefault()
  let get = ['','','','','','','','',''] //get function here--api.js

  let index = $(this).data('num')

  // let sign = sign() //X or O
  get[index] = playerTurn(get)
  //update PATCH function here--api.js
}
