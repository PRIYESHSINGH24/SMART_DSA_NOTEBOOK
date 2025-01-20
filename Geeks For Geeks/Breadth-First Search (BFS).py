from collections import deque

def bfs(graph, start):
    visited = [False] * len(graph)
    queue = deque([start])
    visited[start] = True
    bfs_order = []

    while queue:
        node = queue.popleft()
        bfs_order.append(node)

        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)
    return bfs_order

# BFS Example
graph = [[1, 2], [0, 3, 4], [0], [1], [1]]
start_node = 0
print("BFS Traversal:", bfs(graph, start_node))
