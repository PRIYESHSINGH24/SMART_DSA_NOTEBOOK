# <div align="Center">Traveling Salesman Problem (TSP)</div>
## The Traveling Salesman Problem (TSP) involves finding the shortest route that allows a salesman to visit all given cities exactly once and return to the starting city. It is a popular optimization problem with real-world applications in logistics and transportation.
<hr>

### For Example :

```
#include <stdio.h>
#include <limits.h>

#define V 4
#define INF INT_MAX

int tsp(int graph[V][V], int visited[], int currPos, int n, int count, int cost, int *ans) {
    if (count == n && graph[currPos][0]) {
        if (*ans > cost + graph[currPos][0])
            *ans = cost + graph[currPos][0];
        return *ans;
    }

    for (int i = 0; i < n; i++) {
        if (!visited[i] && graph[currPos][i]) {
            visited[i] = 1;
            tsp(graph, visited, i, n, count + 1, cost + graph[currPos][i], ans);
            visited[i] = 0;
        }
    }
    return *ans;
}

int main() {
    int graph[V][V] = {
        {0, 10, 15, 20},
        {10, 0, 35, 25},
        {15, 35, 0, 30},
        {20, 25, 30, 0}
    };
    int visited[V] = {0};
    visited[0] = 1;
    int ans = INF;

    printf("The minimum cost of visiting all cities is: %d\n", tsp(graph, visited, 0, V, 1, 0, &ans));
    return 0;
}

```
