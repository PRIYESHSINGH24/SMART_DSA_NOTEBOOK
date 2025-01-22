class Solution:
    def isSafe(self, board, row, col, dig):
        for j in range(9):
            if board[row][j] == dig:
                return False
        for i in range(9):
            if board[i][col] == dig:
                return False
        srow, scol = (row // 3) * 3, (col // 3) * 3
        for i in range(srow, srow + 3):
            for j in range(scol, scol + 3):
                if board[i][j] == dig:
                    return False
        return True

    def helper(self, board, row, col):
        if row == 9:
            return True
        nextRow, nextCol = row, col + 1
        if nextCol == 9:
            nextRow += 1
            nextCol = 0
        if board[row][col] != '.':
            return self.helper(board, nextRow, nextCol)

        for dig in '123456789':
            if self.isSafe(board, row, col, dig):
                board[row][col] = dig
                if self.helper(board, nextRow, nextCol):
                    return True
                board[row][col] = '.'
        return False

    def solveSudoku(self, board):
        self.helper(board, 0, 0)
