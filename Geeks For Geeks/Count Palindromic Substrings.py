def count_palindromic_substrings(s):
    n = len(s)

    # Step 1: Initialization
    # Count of palindromic substrings
    total_count = 0

    # 2D DP table for tracking palindromes
    dp = [[False] * n for _ in range(n)]

    print("Initial DP Table:")
    for row in dp:
        print(row)

    # Step 2: Process Single-Character Palindromes
    for i in range(n):
        dp[i][i] = True  # Single-character substrings are palindromes
        total_count += 1  # Increment count for each single character

    print("\nAfter Marking Single-Character Palindromes in DP Table:")
    for row in dp:
        print(row)

    # Step 3: Process Two-Character Palindromes
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            total_count += 1  # Increment count for two-character palindromes

    print("\nAfter Marking Two-Character Palindromes in DP Table:")
    for row in dp:
        print(row)

    # Step 4: Process Longer Substrings
    for length in range(3, n + 1):  # Length of substring
        for i in range(n - length + 1):  # Start index
            j = i + length - 1  # End index

            # Check if the substring is a palindrome
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                total_count += 1  # Increment count for valid palindromes

    print("\nAfter Processing All Substrings in DP Table:")
    for row in dp:
        print(row)

    print("\nTotal Palindromic Substrings (using DP):", total_count)

    # Step 5: Two-Pointer Expansion Method
    def expand_around_center(left, right):
        nonlocal total_count
        count = 0
        while left >= 0 and right < n and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
        return count

    # Reset total_count and calculate again using two-pointer method
    total_count = 0
    for center in range(2 * n - 1):  # There are 2*n - 1 possible centers
        left = center // 2
        right = left + center % 2
        total_count += expand_around_center(left, right)

    print("\nTotal Palindromic Substrings (using Two-Pointer Expansion):", total_count)

    return total_count


# Input: String
s = input("Enter the string: ")

# Function call to count palindromic substrings
result = count_palindromic_substrings(s)

print("\nFinal Result: Total Palindromic Substrings =", result)
