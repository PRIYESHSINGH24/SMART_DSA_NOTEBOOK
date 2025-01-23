class Solution {

    class Edge {
      int src;
      int dest;
      int wt;
    public Edge(int s, int d, int w) {
        this.src = s;
        this.dest = d;
        this.wt = w;
    }
    }
    class Pair implements Comparable<Pair> {
    int n;
     int path;
    public Pair(int n, int path) {
        this.n = n;
        this.path = path;
    }
    @Override
    public int compareTo(Pair p2) {
        return this.path - p2.path;
    }
}

   public int[] dijkstra(ArrayList<Edge> graph[], int src) {
    PriorityQueue<Pair> pq = new PriorityQueue<>();
    int dist[] = new int[graph.length];
    boolean vis[] = new boolean[graph.length];
    for(int i=0; i<dist.length; i++) {
        if(i != src) {
            dist[i] = Integer.MAX_VALUE;
        }
    }
    pq.add(new Pair(src, 0));
    while(!pq.isEmpty()) {
        Pair curr = pq.remove();
        if(!vis[curr.n]) {
            vis[curr.n] = true;
            for(int i=0; i<graph[curr.n].size(); i++) {
                Edge e = graph[curr.n].get(i);
                int u = e.src;
                int v = e.dest;
                if(!vis[v] && dist[u]+e.wt < dist[v]) {
                    dist[v] = dist[u] + e.wt;
                    pq.add(new Pair(v, dist[v]));
}
} }
}
    return dist;
}

    public int[] shortestDistanceAfterQueries(int n, int[][] queries) {
        ArrayList<Edge> gr[]=new ArrayList[n];
        for(int i=0;i<n;i++){
            gr[i]=new ArrayList();
        }
        for(int i=0;i<n-1;i++){
            gr[i].add(new Edge(i,i+1,1));
        }

        int ans[]=new int[queries.length];

        for(int i=0;i<queries.length;i++){

            gr[queries[i][0]].add(new Edge(queries[i][0],queries[i][1],1));
            int dis[]=dijkstra(gr,0);

            ans[i]=dis[n-1];
        }
        return ans;
    }
}