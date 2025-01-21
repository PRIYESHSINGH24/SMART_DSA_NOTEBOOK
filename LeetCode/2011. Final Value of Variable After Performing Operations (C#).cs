public class Solution {
    public int FinalValueAfterOperations(string[] operations) {

        int length = operations.Length; 

        int x = 0;
        for (int i = 0; i < length; i++){
            if (operations[i] == "--X") x -= 1;
            else if (operations[i] == "X--") x -= 1;
            else if (operations[i] == "++X") x += 1;
            else if (operations[i] == "X++") x += 1;
        };
    return x;
        
    }
}
