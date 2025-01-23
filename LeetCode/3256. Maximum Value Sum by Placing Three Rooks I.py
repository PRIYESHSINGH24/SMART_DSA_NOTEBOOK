class Solution:
    def maximumValueSum(self, board: List[List[int]]) -> int:
        m = len(board)
        n = len(board[0])
        valuesList = []
        #Get max 3 row values for all rows
        for i in range(m):
            rowValues = []
            max1 = -1
            max2 = -1
            max3 = -1
            for j in range(n):
                value = []
                value.append(board[i][j])
                value.append(i)
                value.append(j)
                
                rowValues.append(value)
                if(max1 == -1 or board[i][j] >= rowValues[max1][0]):
                    max3 = max2
                    max2 = max1
                    max1 = j
                elif(max2 == -1 or board[i][j] >= rowValues[max2][0]):
                    max3 = max2
                    max2 = j
                elif(max3 == -1 or board[i][j] >= rowValues[max3][0]):
                    max3 = j
            valuesList.append(rowValues[max1])
            valuesList.append(rowValues[max2])
            valuesList.append(rowValues[max3])

        def sortFunc(val):
            return val[0]
        #Sort all the possible values    
        valuesList.sort(key=sortFunc, reverse=True)

        rows = [False] * m
        cols = [False] * n

        maxval = -10e9

        def backtrack(idx, curSum, nums, valuesList, rows, cols):
            nonlocal maxval

            if nums == 3:
                if curSum > maxval:
                    maxval = curSum
                return
            if idx >= len(valuesList):
                return
            value = valuesList[idx][0]

            #Check if it is possible to get new max from here. If not, return.
            if (curSum + value * (3 - nums)) < maxval:
                return
            
            #Pick
            row = valuesList[idx][1]
            col = valuesList[idx][2]
            if(not(rows[row]) and not(cols[col])):
                rows[row] = True
                cols[col] = True
                backtrack(idx+1, curSum+value, nums+1, valuesList, rows, cols)
                rows[row] = False
                cols[col] = False

            #Dont pick
            backtrack(idx+1, curSum, nums, valuesList, rows, cols)

        backtrack(0, 0, 0, valuesList, rows, cols)

        return maxval
