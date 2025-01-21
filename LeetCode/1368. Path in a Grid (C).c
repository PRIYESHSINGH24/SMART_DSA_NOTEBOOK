#include <stdio.h>
#include <stdbool.h>
#include <limits.h>

#define ROWS 100
#define COLS 100

int directions[4][2] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

int minPathCost(int grid[ROWS][COLS], int gridSize, int gridColSize) {
    int m = gridSize, n = gridColSize;
    int cost[m][n];
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cost[i][j] = INT_MAX;
        }
    }
    
    cost[0][0] = grid[0][0];
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (i == 0 && j == 0) continue;
            for (int d = 0; d < 4; d++) {
                int ni = i + directions[d][0];
                int nj = j + directions[d][1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    cost[i][j] = fmin(cost[i][j], cost[ni][nj] + grid[i][j]);
                }
            }
        }
    }
    
    return cost[m-1][n-1];
}

int main() {
    int grid[3][3] = {{5, 3, 2}, {1, 4, 5}, {3, 2, 1}};
    int gridSize = 3;
    int gridColSize = 3;
    
    int minCost = minPathCost(grid, gridSize, gridColSize);
    printf("Minimum cost to make a valid path: %d\n", minCost);
    return 0;
}
