/* Graph Algorithms

Problem: Shortest Path (Codeforces 20C)
Topic: Graphs, Dijkstra's Algorithm */

import java.util.*;

public class ShortestPath {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();

        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            int u = scanner.nextInt();
            int v = scanner.nextInt();
            int w = scanner.nextInt();
            graph.get(u).add(new int[]{v, w});
            graph.get(v).add(new int[]{u, w});
        }

        scanner.close();

        long[] dist = new long[n + 1];
        int[] parent = new int[n + 1];
        Arrays.fill(dist, Long.MAX_VALUE);
        Arrays.fill(parent, -1);
        dist[1] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[1]));
        pq.add(new int[]{1, 0});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int u = current[0];
            long d = current[1];

            if (d > dist[u]) continue;

            for (int[] edge : graph.get(u)) {
                int v = edge[0];
                long weight = edge[1];
                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    parent[v] = u;
                    pq.add(new int[]{v, (int) dist[v]});
                }
            }
        }

        if (dist[n] == Long.MAX_VALUE) {
            System.out.println("-1");
            return;
        }

        List<Integer> path = new ArrayList<>();
        for (int at = n; at != -1; at = parent[at]) {
            path.add(at);
        }
        Collections.reverse(path);
        for (int node : path) {
            System.out.print(node + " ");
        }
    }
}


/*
Explanation:
Input:

The number of nodes n and edges m.
Each edge has two nodes u and v, and a weight w.
Graph Representation:

Use an adjacency list (List<List<int[]>>) to represent the graph.
Each node has a list of connected nodes with their weights.
Algorithm:

Use Dijkstra's algorithm to find the shortest path.
Maintain a dist array for minimum distances and a parent array to reconstruct the path.
Output:

If there's no path to the last node, output -1.
Otherwise, reconstruct the path using the parent array and print it.
This solution efficiently handles large graphs with O((n + m) log n) complexity due to the priority queue. Let me know if you need further assistance!

 */