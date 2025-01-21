class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        li = nums1 + nums2
        li.sort()
        n = len(li)
        mid = n//2
        if n%2!=0:
            return li[mid]
        else:
            sum = float(li[mid] + li[mid-1])
            return sum/2
        
