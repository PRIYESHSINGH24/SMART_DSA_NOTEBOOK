int minSwapsCouples(vector<int>& row) {
    int res = 0, N = row.size();
        
    vector<int> ptn(N, 0);
    vector<int> pos(N, 0);
        
    for (int i = 0; i < N; i++) {
        ptn[i] = (i % 2 == 0 ? i + 1 : i - 1);
        pos[row[i]] = i;
    }
    
    for (int i = 0; i < N; i++) {
        for (int j = ptn[pos[ptn[row[i]]]]; i != j; j = ptn[pos[ptn[row[i]]]]) {
			swap(row[i], row[j]);
            swap(pos[row[i]], pos[row[j]]);
			res++;
		}
    }
        
    return res;
}