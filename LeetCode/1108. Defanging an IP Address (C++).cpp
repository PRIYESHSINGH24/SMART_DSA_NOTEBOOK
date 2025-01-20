class Solution {
public:
    string defangIPaddr(string address) {
        string defangedIP;

        int length = address.size();

        for (int i = 0; i < length; i++) {
            if (address[i] == '.') 
                defangedIP += "[.]";
            else 
                defangedIP += address[i];
        }
        
        return defangedIP;
    }
};
