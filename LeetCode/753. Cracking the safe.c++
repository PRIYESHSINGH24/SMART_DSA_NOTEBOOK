/*
    
    TC: O(n * k ^ n), 
        there are total k^n combinations and for each combo it takes 
        iterating the n length string
    SC: O(k ^ n)
    
    With n length and k chars, we can have k ^ n combinations. All these are
    possible passwords, the problems asks for the shortest length string which has all
    the possible string combos.
    
    Points to note:
    1. Since we are talking of all possible combinations, that means there will be overlapping between
        strings and we can find strings that differ only at one position.
        E.g 110, 111, these differ at the last position
        
        Now to get the shortest length string, we need to find and arrange these overlapping strings in 
        such a manner that each adjacent string only differs by the last char. Arranging the strings such that
        ith string's last n-1 chars are the prefix of i+1th string ensures max compression of strings. And with that
        suffix add each of the k chars one by one to get to other nodes (these k chars act like edges). So with that in
        mind we it is possible to have the final string of length:
        (n-1)(Initial string's n-1 chars) + k^n (diff string's differentiating char)

        E.g
        n = 2, k = 2
        Possible combos: 00, 01, 10, 11
        
        If they are arranged as described above (notice how each node has the n-1 chars from prev node as prefix):
        00 -> 01 -> 11 -> 10
        
        To get 01: n-1 chars suffix[00] = 0 and edge=1 => 01
        To get 11: n-1 chars suffix[01] = 1 and edge=1 => 11
        To get 10: n-1 chars suffix[11] = 1 and edge=0 => 10
        
    2.  Now if we draw all the possible k edges from each of the nodes, we will notice that it can take us to different nodes, which can
        be different from the path shown above.
        E.g, On following edge = 0 after 2nd node 01, we get 10 and not 11. Now if we go to 10, then if we follow either 0 or 1 edge
        we will again go to a seen node
        10 --0--> 00 
        10 --1--> 01
        So this edge path would have been of no use since this would have only resulted in redundant ans string
        00101...
        
        So the idea is to find the optimal path which can cover all the nodes only once ( To ensure the final string is shortest), 
        which is nothing but a hamiltonian path (path such that all the nodes are visited only once).
        
    3. We start with n length starting node comprising of 0s. Then we follow the rule of getting the next node by using the last n-1 chars and following
        one of the k edges. Then with this new node, we do dfs further till we are able to cover all the nodes. We do this with backtracking.
        
*/
class Solution {
public:
    bool dfs(int n, int k, string& ans, 
            unordered_set<string>& visited) {
        // base case, all the possible passwords (k^n combos) have been found
        // in the current hamiltonian path
        if(visited.size() == pow(k, n))
            return true;
        
        // take the last n-1 chars
        string suffix = ans.substr(ans.size() - (n-1), n-1);
        
        // now with this suffix=pwd[1:n-1], we try adding all the possible
        // k chars at the end to get the new node and perform dfs from there.
        // We only add the new node value for which it is possible to traverse further
        // and get the remaining nodes (hamiltonian path)
        
        // Add a dummy char at the end, this is the position where all the other k chars 
        // will be placed
        string nextNode = suffix + '0';
        for(int i = 0; i < k; i++) {
            nextNode[n-1] = (i + '0');
                
            if(!visited.count(nextNode)) {
                visited.insert(nextNode);
                // ans = xxxxo, add the current char with the suffix which creates the new pwd node
                //       ____ --> pwd 1 (current node)
                //        ____ --> pwd 2 (next node)
                ans += (i + '0');
                
                // hamiltonian path found
                if(dfs(n, k, ans, visited))
                    return true;

                visited.erase(nextNode);
                ans.pop_back();
            }
        }
        
        return false;
    }
    
    string crackSafe(int n, int k) {
        // tracks the visited password combinations
        unordered_set<string> visited;
        
        // shortest string that contains all the possible passwords
        // initial starting node is a n length str comprising of 0s
        string ans = string(n, '0');
        visited.insert(ans);
        
        dfs(n, k, ans, visited);
        return ans;
    }
};