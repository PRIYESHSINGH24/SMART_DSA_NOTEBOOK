#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF INT_MAX

struct Edge {
    int src, dest, weight;
};

void bellmanFord(int vertices, int edges, struct Edge edgeList[], int src) {
    int dist[vertices];
    for (int i = 0; i < vertices; i++) dist[i] = INF;
    dist[src] = 0;

    for (int i = 1; i <= vertices - 1; i++) {
        for (int j = 0; j < edges; j++) {
            int u = edgeList[j].src;
            int v = edgeList[j].dest;
            int weight = edgeList[j].weight;
            if (dist[u] != INF && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    for (int i = 0; i < edges; i++) {
        int u = edgeList[i].src;
        int v = edgeList[i].dest;
        int weight = edgeList[i].weight;
        if (dist[u] != INF && dist[u] + weight < dist[v]) {
            printf("Graph contains a negative-weight cycle\n");
            return;
        }
    }

    printf("Vertex\tDistance from Source\n");
    for (int i = 0; i < vertices; i++) {
        printf("%d\t\t%d\n", i, dist[i]);
    }
}

int main() {
    int vertices = 5, edges = 8;
    struct Edge edgeList[] = {
        {0, 1, -1}, {0, 2, 4}, {1, 2, 3},
        {1, 3, 2},  {1, 4, 2}, {3, 2, 5},
        {3, 1, 1},  {4, 3, -3}
    };
    bellmanFord(vertices, edges, edgeList, 0);
    return 0;
}
