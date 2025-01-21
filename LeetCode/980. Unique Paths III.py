class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        def get_map_info():
            mi = {1: None, 2: None, -1: 0, 0: 0}
            for r_pos, r in enumerate(grid):
                for c_pos, c in enumerate(r):
                    if grid[r_pos][c_pos] in [1,2]:
                        mi[grid[r_pos][c_pos]] = [r_pos, c_pos]
                    else:
                        mi[grid[r_pos][c_pos]] +=1
                    

            return mi
        mi = get_map_info()
        start = mi[1]   
        free_cells_cnt = mi[0]
        explored_map = set([ (start[0], start[1])])
        cnt_paths = 0
        m = len(grid)
        n = len(grid[0])
        #print(mi)

        def traverse(i, j, cnt_steps_made):
            nonlocal cnt_paths
            #print(f"{i}, {j} {cnt_steps_made}, {explored_map}")
            
            if grid[i][j] == -1: # obstacle
                return False

            if grid[i][j] == 2: # done
                if cnt_steps_made == free_cells_cnt+1:
                    cnt_paths+=1
                #print(f"{i}, {j} Done with {cnt_steps_made}")
                return True

            moves = []
            if i>0:
                moves.append([i-1, j])
            if i<m-1:
                moves.append([i+1, j])
            if j>0:
                moves.append([i, j-1])
            if j<n-1:
                moves.append([i, j+1])
            
            for x, y in moves:
                if not (x, y) in explored_map:
                    explored_map.add((x, y))
                    traverse(x, y, cnt_steps_made+1)
                    explored_map.remove((x, y))

        traverse(*start, 0)
        return cnt_paths
        
