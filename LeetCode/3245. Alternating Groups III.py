from sortedcontainers import SortedList
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int], queries: List[List[int]]) -> List[int]:
        n, sl = len(colors), SortedList()
        for i in range(1, n):
            if colors[i-1]==colors[i]: sl.add(i)
        if colors[0]==colors[n-1]: sl.add(n)
        def buildc():
            count=Counter()
            if len(sl)==0: return count
            prev = sl[-1]-n
            for i in sl:
                count[i-prev]+=1
                prev=i
            return count
        count = buildc()
        def getsl(ind):
            if ind<0: return sl[ind + len(sl)] - n
            if ind>=len(sl): return sl[ind - len(sl)] + n
            return sl[ind]
        def inc(v):
            count[v]+=1
        def dec(v):
            count[v]-=1
            if count[v]==0: count.pop(v)
        def toggle(i):
            ind = sl.bisect_left(i)
            if getsl(ind)==i:
                lo,hi = getsl(ind-1), getsl(ind+1)
                dec(i-lo)
                dec(hi-i)
                inc(hi-lo)
                sl.remove(i)
            else:
                lo,hi = getsl(ind-1), getsl(ind)
                inc(i-lo)
                inc(hi-i)
                dec(hi-lo)
                sl.add(i)
        def qr1(size):
            if len(sl)==0: return n
            return sum(max(0, a-size+1)*b for a,b in count.items())
        answer = []
        for q in queries:
            if q[0]==1: 
                answer.append(qr1(q[1]))
                continue
            index, color = q[1], q[2]
            if colors[index]==color: continue
            colors[index]=color
            z = [(n if index==0 else index), index+1]
            if len(sl)<=5:
                for i in z:
                    if i in sl: sl.remove(i)
                    else: sl.add(i)
                count = buildc()
            else:
                for i in z: toggle(i)
        return answer
