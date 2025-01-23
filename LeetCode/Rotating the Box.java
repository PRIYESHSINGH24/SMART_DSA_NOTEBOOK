class Solution {
    public char[][] rotateTheBox(char[][] box) {
        int ROWS = box.length;
        int COLS = box[0].length;
        
        char[][] res = new char[COLS][ROWS];
        for(char[] row : res) {
            Arrays.fill(row, '.');
        }
        
        for (int r = 0; r < ROWS; r++) {
            int i = COLS - 1;
            for (int c = COLS - 1; c >= 0; c--) {
                if (box[r][c] == '#') {
                    res[i][ROWS - r - 1] = '#';
                    i--;
                } else if (box[r][c] == '*') {
                    res[c][ROWS - r - 1] = '*';
                    i = c - 1;
                }
            }
        }
        return res;
    }
}