// /**
//  * @param {character[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */

var board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

var solveSudoku = function(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] != ".") { continue; }
            var possibles = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
            for (var h = 0; h < 9; h++) { 
                // Vérifier horizontal :
                possibles.delete(board[i][h]); 
                // Vérifier vertical :
                possibles.delete(board[h][j]); 
            }
            // Vérifier cube :

            if (possibles.size == 1) { board[i][j] = possibles.values().next().value; }
            // else {
            //     console.log("board[i][j] " + board[i][j]);
            //     console.log("i (horizontal) = " + i);
            //     console.log("j (vertical) = " + j);
            //     console.log("possibles = " + Array.from(possibles.values()));
            // }
            // return;
        }
    }
}

solveSudoku(board);

// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]


// Tests :
// const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log("set = " + Array.from(set.values()));
// console.log("premier = " + set.values().next().value);