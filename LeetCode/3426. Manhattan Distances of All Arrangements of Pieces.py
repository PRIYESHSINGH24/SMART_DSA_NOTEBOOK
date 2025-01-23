class Solution:
    MOD = 10**9 + 7  

    def distanceSum(self, m: int, n: int, k: int) -> int:
        vornelitho = (m, n, k)
        
        coordinates = [(i, j) for i in range(m) for j in range(n)]
        
        def calculate_manhattan_distance(pieces):
            distance_sum = 0
            for i in range(len(pieces)):
                for j in range(i + 1, len(pieces)):
                    x1, y1 = pieces[i]
                    x2, y2 = pieces[j]
                    distance_sum += abs(x1 - x2) + abs(y1 - y2)
                    distance_sum %= Solution.MOD 
            return distance_sum
        
        result = 0
        
        from itertools import combinations
        for comb in combinations(coordinates, k):
            result += calculate_manhattan_distance(comb)
            result %= Solution.MOD 
        return result

solution = Solution()
print(solution.distanceSum(3, 3, 2))  
