class Solution:
    def minStartingIndex(self, s: str, p: str) -> int:
        k=len(p)
        def z_func(s): # O(n+k)
            n=len(s)
            z=[0]*n
            l=r=0
            for i in range(1,n):
                if i<r:z[i]=min(r-i,z[i-l])
                while z[i]+i<n and s[z[i]]==s[z[i]+i]:z[i]+=1
                if z[i]+i>r:l,r=i,z[i]+i
            return z[k+1:]
        
        n=len(s)
        z=z_func(p+'$'+s)
        rz=z_func(p[::-1]+'$'+s[::-1])[::-1] # O(n)
        for i in range(n-k+1): # O(n-k+1)
            if z[i]+rz[i+k-1]>=k-1:return i
        return -1
