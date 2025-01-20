public class Solution {
    static boolean check = false;

    private boolean isSafe(char[][] board, int row, int col, char num) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num)
                return false;
        }
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == num)
                return false;
        }
        int sRow = row / 3 * 3;
        int sCol = col / 3 * 3;

        for (int i = sRow; i < sRow + 3; i++) {
            for (int j = sCol; j < sCol + 3; j++) {
                if (board[i][j] == num)
                    return false;
            }
        }
        return true;
    }

    private void solve(char[][] board, int row, int col) {
        if (row == 9) {
            check = true;
        } else if (board[row][col] != '.') {
            if (col == 8)
                solve(board, row + 1, 0);
            else
                solve(board, row, col + 1);
        } else {
            for (char i = '1'; i <= '9'; i++) {
                if (isSafe(board, row, col, i)) {
                    board[row][col] = i;
                    if (col == 8)
                        solve(board, row + 1, 0);
                    else
                        solve(board, row, col + 1);
                    if (!check)
                        board[row][col] = '.';
                }
            }
        }
    }

    public void solveSudoku(char[][] board) {
        solve(board, 0, 0);
        check = false;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Sample Sudoku board with '.' representing empty cells
        char[][] board = {
            {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
            {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
            {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
            {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
            {'4', '.', '3', '.', '.', '.', '.', '.', '1'},
            {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
            {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
            {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
            {'.', '.', '.', '.', '8', '.', '.', '7', '9'}
        };

        // Print the board before solving
        System.out.println("Original Sudoku Board:");
        printBoard(board);

        // Solve the Sudoku
        solution.solveSudoku(board);

        // Print the solved board
        System.out.println("\nSolved Sudoku Board:");
        printBoard(board);
    }

    // Helper function to print the Sudoku board
    private static void printBoard(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }
}
