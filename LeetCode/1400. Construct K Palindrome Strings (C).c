bool canConstruct(char *s, int k) {
    int len = strlen(s);
  
    if (len < k) {
        return false;
    }

    int odd = 0;
    int count[256] = {0}; 

    for (int i = 0; i < len; i++) {
        count[s[i]]++;
    }

    for (int i = 0; i < 256; i++) {
        if (count[i] % 2 != 0) {
            odd++;
        }
    }

    return odd <= k;
}
