class Solution:
    def maxScoreWords(
        self, words: List[str], letters: List[str], score: List[int]
    ) -> int:
        lettersCounter = Counter(letters)
        totalScore = 0

        def explore(index, letterCounter, currScore):
            nonlocal totalScore

            totalScore = max(totalScore, currScore)
            if index == len(words):
                return

            for i in range(index, len(words)):
                tmpCounter = copy.deepcopy(letterCounter)
                word = words[i]
                wordScore = 0
                isValid = True

                for ch in word:
                    if ch in tmpCounter and tmpCounter[ch] > 0:
                        tmpCounter[ch] -= 1
                        wordScore += score[ord(ch) - ord("a")]
                    else:
                        isValid = False
                        break
                if isValid:
                    explore(i + 1, tmpCounter, currScore + wordScore)

        explore(0, lettersCounter, 0)
        return totalScore
