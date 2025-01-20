int subtractProductAndSum(int n) {
    int rem = 0;         
    int sum_n = 0;       
    int product_n = 1;   

    while (n > 0) {
        rem = n % 10;       
        sum_n += rem;       
        product_n *= rem;    
        n /= 10;             
    }

    return product_n - sum_n;  
}
