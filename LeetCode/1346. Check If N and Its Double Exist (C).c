bool checkIfExist(int* arr, int arrSize) {
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] == 0) {
            int countZero = 0;
            for (int j = 0; j < arrSize; j++) {
                if (arr[j] == 0) {
                    countZero++;
                }
            }
            if (countZero == 1) {
                continue;
            }
        }

        for (int j = 0; j < arrSize; j++) {
            if (arr[i] * 2 == arr[j] && i != j) {
                return true;
            }
        }
    }
    
    return false;
}
