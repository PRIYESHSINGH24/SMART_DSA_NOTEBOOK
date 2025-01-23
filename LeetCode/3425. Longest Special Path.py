class Solution:
    def longestSpecialPath(self, edges: List[List[int]], nums: List[int]) -> List[int]:
        res = [0, 1]
        graph = defaultdict(list)
        for a,b,c in edges:
            graph[a].append((b, c))
            graph[b].append((a, c))

        costs = []
        last = defaultdict(lambda: -1)
        
        def dfs(node, curr_cost, prev, left):
            node_color_index_prev = last.get(nums[node], -1)
            last[nums[node]] = len(costs)
            costs.append(curr_cost)

            if curr_cost - costs[left] > res[0]:
                res[0] = curr_cost - costs[left]
                res[1] = len(costs) - left
            elif curr_cost - costs[left] == res[0]:
                res[1] = min(res[1], len(costs) - left)
            
            for next_node, next_cost in graph[node]:
                if next_node == prev:
                    continue
                
                next_left = left
                if last[nums[next_node]] != -1 and left <= last[nums[next_node]]:
                    next_left = last[nums[next_node]] + 1
                dfs(next_node, curr_cost + next_cost, node, next_left)
            
            last[nums[node]] = node_color_index_prev
            costs.pop()
        
        dfs(0, 0, -1, 0)
        return res
        
