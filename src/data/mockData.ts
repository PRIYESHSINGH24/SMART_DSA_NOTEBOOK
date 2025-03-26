
// Mock data for problems
export const mockProblems = {
  leetcode: [
    { id: "1", title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], progress: 100 },
    { id: "2", title: "Add Two Numbers", difficulty: "Medium", tags: ["Linked List", "Math"], progress: 75 },
    { id: "3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"], progress: 0 },
  ],
  hackerrank: [
    { id: "1", title: "Solve Me First", difficulty: "Easy", tags: ["Basic"], progress: 100 },
    { id: "2", title: "Simple Array Sum", difficulty: "Easy", tags: ["Array"], progress: 50 },
    { id: "3", title: "Compare the Triplets", difficulty: "Easy", tags: ["Array"], progress: 0 },
  ],
  codeforces: [
    { id: "1", title: "Watermelon", difficulty: "Easy", tags: ["Math"], progress: 100 },
    { id: "2", title: "Way Too Long Words", difficulty: "Easy", tags: ["String"], progress: 0 },
    { id: "3", title: "Theatre Square", difficulty: "Easy", tags: ["Math"], progress: 0 },
  ]
};

// Mock data for solutions
export const mockSolutions = {
  "leetcode-1": `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`,
  "leetcode-2": `function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  
  while (l1 !== null || l2 !== null) {
    let x = (l1 !== null) ? l1.val : 0;
    let y = (l2 !== null) ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  
  return dummyHead.next;
}`,
  "hackerrank-1": `function solveMeFirst(a, b) {
  return a + b;
}`
};

// Mock comments data
export const mockComments = [
  { id: "1", username: "CodeMaster", avatar: "https://source.unsplash.com/random/100x100/?portrait", comment: "This is a really efficient solution. I like how you used a hashmap to reduce the time complexity to O(n).", timestamp: "2 days ago", likes: 5 },
  { id: "2", username: "AlgoExpert", avatar: "https://source.unsplash.com/random/100x100/?portrait&2", comment: "I would suggest using forEach instead of a for loop for better readability.", timestamp: "1 day ago", likes: 2 }
];
