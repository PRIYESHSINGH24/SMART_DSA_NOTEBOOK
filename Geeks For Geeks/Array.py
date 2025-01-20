def count_inversions(arr):
    def merge_and_count(arr, temp_arr, left, right):
        if left >= right:
            return 0
        
        mid = (left + right) // 2
        
        inversions = merge_and_count(arr, temp_arr, left, mid)
        inversions += merge_and_count(arr, temp_arr, mid + 1, right)
        inversions += merge(arr, temp_arr, left, mid, right)
        
        return inversions

    def merge(arr, temp_arr, left, mid, right):
        i, j, k = left, mid + 1, left
        inversions = 0
        
        while i <= mid and j <= right:
            if arr[i] <= arr[j]:
                temp_arr[k] = arr[i]
                i += 1
            else:
                temp_arr[k] = arr[j]
                inversions += (mid - i + 1)
                j += 1
            k += 1
        
        while i <= mid:
            temp_arr[k] = arr[i]
            i += 1
            k += 1
        
        while j <= right:
            temp_arr[k] = arr[j]
            j += 1
            k += 1
        
        for i in range(left, right + 1):
            arr[i] = temp_arr[i]
        
        return inversions
    
    n = len(arr)
    temp_arr = [0] * n
    return merge_and_count(arr, temp_arr, 0, n - 1)

# Example Usage
arr = [8, 4, 2, 1]
result = count_inversions(arr)
print(result)  # Output: 6
