/* Write a
function done_or_not / DoneOrNot passing a board(list[list_lines]) as parameter.If the board is valid
return 'Finished!', otherwise
return 'Try again!' */


function doneOrNot(board) {
  let isFinished = false
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (boader[i][j] === boader[i][j + 1]) {
        return "Try again!"
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (boader[j][i] === boader[j + 1][i]) {
        return "Try again!"
      }
    }
  }
  for (let k = 3; k <= 9; k += 3) {
    for (let i = 0; i < k; i++) {
      for (let j = 0; j < k - 1; j++) {
        if (boader[i][j] === boader[i][j + 1]) {
          return "Try again!"
        }
      }
    }
  }
}
doneOrNot([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
], [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])