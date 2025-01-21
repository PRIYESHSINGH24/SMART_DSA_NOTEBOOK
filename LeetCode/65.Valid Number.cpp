class Solution {
public:
    bool is_digit(char ch) {
        return ch >= '0' && ch <= '9';
    }
    
    bool isNumber(string s) {
        int n = s.size();
        int sign = 0, e = 0, deci = 0, digit = 0;
        bool digitAfterE = false;

        for (int i = 0; i < n; i++) {
            if (is_digit(s[i])) {
                digit++;
                if (e > 0) digitAfterE = true;
            } 
            else if (s[i] == '.') {
                deci++;
                if (deci > 1 || e > 0) return false;
                if (!(i + 1 < n && is_digit(s[i + 1])) && !(i - 1 >= 0 && is_digit(s[i - 1]))) return false;
            } 
            else if (s[i] == 'e' || s[i] == 'E') {
                e++;
                if (e > 1 || i == 0 || i == n - 1) return false;
                if (!(is_digit(s[i - 1])) && s[i - 1] != '.') return false;
            } 
            else if (s[i] == '+' || s[i] == '-') {
                if (i > 0 && s[i - 1] != 'e' && s[i - 1] != 'E') return false;
                if (i == n - 1) return false;
            } 
            else {
                return false;
            }
        }
        return digit > 0 && (e == 0 || digitAfterE);
    }
};