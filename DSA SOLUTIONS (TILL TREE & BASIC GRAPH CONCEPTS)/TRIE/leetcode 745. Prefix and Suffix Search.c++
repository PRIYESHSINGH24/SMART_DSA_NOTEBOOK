class node{
public:
    char data;
    unordered_map<char, node*>children;
    int idx;
    node(char c){
        data=c;
        idx=-1;
    }
};
class WordFilter {
public:
    node*root=new node('/0');
    void insert(string s, int i){
        node*curr=root;
        for(char &ch:s){
            if(curr->children.count(ch)==0){
                node *temp=new node(ch);
                temp->idx=i;
                curr->children[ch]=temp;
                curr=curr->children[ch];
            }else{
                curr->children[ch]->idx=i;
                curr=curr->children[ch];
            }
        }
    }
    WordFilter(vector<string>& words) {
        for(int i=0;i<words.size();i++){
            string s=words[i];
            string temp="#";
            temp+=s;
            for(int j=s.size()-1;j>=0;j--){
                char ch=s[j];
                temp=ch+temp;
                insert(temp, i);
            }
        }
    }
    
    int f(string prefix, string suffix) {
        string s=suffix+"#"+prefix;
        int ans=-1;
        node*curr=root;
        for(char &ch:s){
            if(curr->children.count(ch)==0){
                return -1;
            }else{
                ans=curr->children[ch]->idx;
                curr=curr->children[ch];
            }
        }
        return ans;
    }
};

