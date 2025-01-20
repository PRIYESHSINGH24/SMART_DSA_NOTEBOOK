int minBitFlips(int start, int goal) {
    int count = 0;
    while (start || goal) {

      if ((start & 1) != (goal & 1)) {
          count += 1;
      }
      start = start / 2; 
      goal = goal / 2; 
    }

    return count; 
}
