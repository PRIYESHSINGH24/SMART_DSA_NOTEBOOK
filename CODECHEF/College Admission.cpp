/*
Problem Statement:

College admissions are starting, and Chef has recently completed his high school. There are N colleges, ranked from 1 to N, and each college has only a single seat left. Students are ranked based on their exam results, and the student with the best rank gets to choose a college first. Each student has a list of preferred colleges, and they will always try to get into the highest-ranked college from their list that still has a vacant seat. If a student cannot get into any of the colleges on their list, they will not join any college that year.

Task:
Given information about M students, including their ranks and the colleges they are applying for, determine which college Chef (student with id = 1) will join, or output 0 if Chef cannot join any college.

Input Format:
1. First line contains T, the number of test cases.
2. Each test case contains M+3 lines:
   - First line: Two integers N (number of colleges) and M (number of students).
   - Second line: N distinct integers representing the ranks of colleges (1 = highest rank).
   - Third line: M distinct integers representing the ranks of students (1 = highest rank).
   - Next M lines: Each line starts with an integer K (number of colleges the student applies to), followed by K integers (college IDs).

Output Format:
For each test case, output a single line containing the college Chef joins, or 0 if he does not join any college.
*/








#include<bits/stdc++.h>
 
using namespace std;
 
const int maxt = 1e5, maxn = 1e5, maxm = 1e5, maxapp = 1e6, maxtn = 250000, maxtm = 250000;
 
int main()
{   
    ios::sync_with_stdio(0);
    cin.tie(0);
    int t; cin >> t;
    int tn = 0, tm = 0, tapp = 0;
    while(t--){
        int n, m; cin >> n >> m;
        tn += n; tm += m;
        int rank[n + 1]; set<int> urank; urank.clear();
        int prank; 
        for(int i = 1; i <= n; i++){
            cin >> prank;
            rank[i] = prank; urank.insert(prank);
        }
        assert(urank.size() == n);
        
        int mark[m + 1]; set<int> umark; umark.clear();
        int pmark;
        for(int i = 1; i <= m; i++){
            cin >> pmark;
            mark[pmark] = i; umark.insert(pmark);
        }
        assert(umark.size() == m);
        
        vector<int> app[m + 1]; bool inc[m + 1]; memset(inc, false, sizeof(inc));
        for(int i = 1; i <= m; i++){
            app[i].clear();
            int k; cin >> k;
            tapp += k;
            int id;
            for(int j = 1; j <= k; j++){
                cin >> id;
                app[i].push_back(id);
            }
            sort(app[i].begin(), app[i].end(), [&rank](int &a, int &b){return rank[a] < rank[b];});
        }
 
        int ans[m + 1]; memset(ans, 0, sizeof(ans));
        for(int i = 1; i <= m; i++){
            vector<int> papp = app[mark[i]];
            for(int x : papp){
                if(!inc[x]){
                    ans[mark[i]] = x;
                    inc[x] = true;
                    break;
                }
            }
        }
        cout << ans[1] << endl;
    }
}  