
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { Plus, Search, Code, BookOpen } from "lucide-react";
import AnimatedTransition from "@/components/AnimatedTransition";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Mock data for problems
const mockProblems = {
  leetcode: [
    { id: "1", title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"] },
    { id: "2", title: "Add Two Numbers", difficulty: "Medium", tags: ["Linked List", "Math"] },
    { id: "3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"] },
  ],
  hackerrank: [
    { id: "1", title: "Solve Me First", difficulty: "Easy", tags: ["Basic"] },
    { id: "2", title: "Simple Array Sum", difficulty: "Easy", tags: ["Array"] },
    { id: "3", title: "Compare the Triplets", difficulty: "Easy", tags: ["Array"] },
  ],
  codeforces: [
    { id: "1", title: "Watermelon", difficulty: "Easy", tags: ["Math"] },
    { id: "2", title: "Way Too Long Words", difficulty: "Easy", tags: ["String"] },
    { id: "3", title: "Theatre Square", difficulty: "Easy", tags: ["Math"] },
  ]
};

// Mock data for solutions
const mockSolutions = {
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

const difficultyColors = {
  Easy: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
  Medium: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
  Hard: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
};

const PlatformPage: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [isAddingProblem, setIsAddingProblem] = useState(false);
  const [newProblem, setNewProblem] = useState({ title: "", difficulty: "Easy", tags: "", problem: "", solution: "" });

  // Filter problems based on search term
  const problems = platform ? (mockProblems[platform as keyof typeof mockProblems] || []) : [];
  const filteredProblems = problems.filter(problem => 
    problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const currentSolution = selectedProblem ? mockSolutions[`${platform}-${selectedProblem}`] : null;
  
  const handleAddProblem = () => {
    if (!newProblem.title || !newProblem.problem || !newProblem.solution) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Problem added successfully!");
    setIsAddingProblem(false);
    setNewProblem({ title: "", difficulty: "Easy", tags: "", problem: "", solution: "" });
    // In a real app, you would add the problem to the database here
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <AnimatedTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Tabs defaultValue="problems" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-1">
                  {platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : "Platform"} Problems
                </h1>
                <p className="text-muted-foreground">Browse and solve problems or add your own solutions</p>
              </div>
              
              <TabsList>
                <TabsTrigger value="problems" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Problems
                </TabsTrigger>
                <TabsTrigger value="add" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="problems" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Problems List */}
                <Card className="lg:col-span-1 overflow-hidden border shadow-lg">
                  <CardHeader className="p-4 space-y-3">
                    <CardTitle className="text-xl">Problems</CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search problems..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </CardHeader>
                  <div className="overflow-y-auto max-h-[calc(100vh-20rem)]">
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-2 space-y-2"
                    >
                      {filteredProblems.length > 0 ? (
                        filteredProblems.map((problem) => (
                          <motion.div
                            key={problem.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className={`p-3 rounded-lg transition-all cursor-pointer border ${
                              selectedProblem === problem.id
                                ? "bg-primary/10 border-primary/50"
                                : "hover:bg-muted/50 border-transparent"
                            }`}
                            onClick={() => setSelectedProblem(problem.id)}
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{problem.title}</h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[problem.difficulty as keyof typeof difficultyColors]}`}>
                                {problem.difficulty}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {problem.tags.map((tag, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No problems found matching "{searchTerm}"
                        </div>
                      )}
                    </motion.div>
                  </div>
                </Card>

                {/* Solution */}
                <Card className="lg:col-span-2 overflow-hidden shadow-lg">
                  <CardHeader className="p-4 border-b">
                    <CardTitle className="text-xl flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {selectedProblem ? (
                      <div className="p-4">
                        <div className="rounded-lg bg-secondary/50 p-4 overflow-x-auto">
                          <pre className="font-mono text-sm">
                            <code className="language-javascript">
                              {currentSolution || "No solution available for this problem yet."}
                            </code>
                          </pre>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Edit Solution
                          </Button>
                          <Button size="sm">
                            Submit
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                          <Code className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium">Select a problem to view its solution</h3>
                        <p className="text-muted-foreground">Choose a problem from the list on the left</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="add">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Add New Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Problem Title</label>
                      <Input 
                        placeholder="Enter problem title" 
                        value={newProblem.title}
                        onChange={(e) => setNewProblem({...newProblem, title: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Difficulty</label>
                        <select 
                          className="w-full p-2 rounded-md border border-input bg-transparent"
                          value={newProblem.difficulty}
                          onChange={(e) => setNewProblem({...newProblem, difficulty: e.target.value})}
                        >
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tags</label>
                        <Input 
                          placeholder="Array, String, DP" 
                          value={newProblem.tags}
                          onChange={(e) => setNewProblem({...newProblem, tags: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Problem Description</label>
                    <Textarea 
                      placeholder="Enter problem description" 
                      className="min-h-32"
                      value={newProblem.problem}
                      onChange={(e) => setNewProblem({...newProblem, problem: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Solution</label>
                    <Textarea 
                      placeholder="Enter your solution (code)" 
                      className="min-h-32 font-mono"
                      value={newProblem.solution}
                      onChange={(e) => setNewProblem({...newProblem, solution: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setNewProblem({ title: "", difficulty: "Easy", tags: "", problem: "", solution: "" })}>
                      Reset
                    </Button>
                    <Button onClick={handleAddProblem}>
                      Add Problem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AnimatedTransition>
  );
};

export default PlatformPage;
