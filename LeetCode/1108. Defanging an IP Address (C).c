char* defangIPaddr(const char* address) {
    int length = strlen(address);

    char* defangedIP = (char*)malloc((length + 3 * 4 + 1) * sizeof(char)); 
    int index = 0;

    for (int i = 0; i < length; i++) {
        if (address[i] == '.') {
          
            defangedIP[index++] = '[';
            defangedIP[index++] = '.';
            defangedIP[index++] = ']';
        } else {
            defangedIP[index++] = address[i];
        }
    }

    defangedIP[index] = '\0';
    
    return defangedIP;
}
