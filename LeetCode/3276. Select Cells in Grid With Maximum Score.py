class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        # flatten all the values in the grid and deduplicate
        value_set = set([grid[r][c] for r in range(rows) for c in range(cols)])
        
        # sort values from in descending order
        value_list = sorted(list(value_set))[::-1]

        # create a map mapping from each value to the list of row indexes with these values
        val_to_rows = defaultdict(list)
        for value in value_list:
            val_to_rows[value] = [r for r in range(rows) if value in grid[r]]

        # Run dfs on rows with cell values in descending order.
        def dfs(row_set, remaining_values, score):
            if not remaining_values:
                return score

            value = remaining_values[0]
            remaining_values = remaining_values[1:]

            score_list = []

            for row in val_to_rows[value]:
                if row not in row_set:
                    score_list.append(dfs(row_set | {row}, remaining_values, score + value))
            if not score_list:
                score_list.append(dfs(row_set, remaining_values, score))
            return max(score_list)

        return dfs(set(), value_list, 0)
        
