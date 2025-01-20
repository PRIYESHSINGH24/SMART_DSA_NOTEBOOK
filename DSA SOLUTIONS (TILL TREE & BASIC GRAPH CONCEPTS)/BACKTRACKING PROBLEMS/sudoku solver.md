#LEETCODE PROBLEM 37
Problem statement :- Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

EXAMPLE :
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]


SOLUTION :- 

Intuition
This implementation optimizes the traditional backtracking approach by incorporating pre-computed constraints and heuristic decision-making, such as selecting the cell with the fewest valid candidates first. This strategy dramatically reduces unnecessary recursive calls and improves efficiency.

Approach
Pre-compute Constraints:

Maintain bitmasks (row, col, box) for each row, column, and 3x3 subgrid to track which numbers are already used.
Collect the coordinates of all empty cells (R and C).
Candidate Computation:

Use a helper function cand to compute valid numbers for a given cell using bitwise operations.
Calculate the number of valid candidates for each empty cell and store this information in cc.
Dynamic Candidate Recalculation:

Recalculate the number of valid candidates whenever a number is placed or removed during the backtracking process. This ensures the constraints are always up to date.
Optimized Backtracking:

Select the next cell to fill based on the cell with the fewest valid candidates (best), minimizing the branching factor.
Use a bitmask to generate possible numbers efficiently and iterate through them.
Perform recursive backtracking to fill cells.
Pruning:

If no valid candidates exist for any cell during the process, backtrack immediately.
Complexity
Time Complexity:

The optimization significantly reduces the effective branching factor. While the theoretical worst-case time complexity remains O(9ᵐ), where m is the number of empty cells, the heuristic often lowers the practical complexity to much more manageable levels.
Space Complexity:

O(m) for storing empty cell positions (R and C) and candidate counts (cc), where m is the number of empty cells.




CODE IN CPP :-
class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        int row[9]{}, col[9]{}, box[9]{};
        vector<int> R, C, cc;
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    R.push_back(i);
                    C.push_back(j);
                } else {
                    int d = board[i][j] - '1', m = 1 << d, b = (i / 3) * 3 + j / 3;
                    row[i] |= m; col[j] |= m; box[b] |= m;
                }
            }
        }
        cc.resize(R.size());
        auto countBits = [&](int x) { int c = 0; while (x) { x &= x - 1; c++; } return c; };
        function<int(int)> cand = [&](int idx) {
            int r = R[idx], c = C[idx], b = (r / 3) * 3 + c / 3;
            return countBits((~(row[r] | col[c] | box[b])) & 0x1ff);
        };
        auto recalc = [&]() {
            for (int i = 0; i < (int)R.size(); i++) {
                if (board[R[i]][C[i]] == '.') cc[i] = cand(i);
            }
        };
        for (int i = 0; i < (int)R.size(); i++) cc[i] = cand(i);
        function<bool(int)> dfs = [&](int filled) {
            if (filled == (int)R.size()) return true;
            int best = -1, bc = 10;
            for (int i = 0; i < (int)R.size(); i++) {
                if (board[R[i]][C[i]] == '.' && cc[i] < bc) {
                    bc = cc[i]; best = i;
                    if (!bc) return false;
                    if (bc < 2) break;
                }
            }
            int r = R[best], c = C[best], b = (r / 3) * 3 + c / 3;
            int mask = (~(row[r] | col[c] | box[b])) & 0x1ff;
            while (mask) {
                int pick = mask & -mask, d = __builtin_ctz(pick);
                board[r][c] = d + '1'; row[r] |= pick; col[c] |= pick; box[b] |= pick;
                recalc();
                if (dfs(filled + 1)) return true;
                board[r][c] = '.'; row[r] ^= pick; col[c] ^= pick; box[b] ^= pick;
                recalc();
                mask &= mask - 1;
            }
            return false;
        };
        dfs(0);
    }
};