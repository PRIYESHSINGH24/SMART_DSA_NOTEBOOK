
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { 
  Plus, 
  Search, 
  Code, 
  BookOpen, 
  Save, 
  Share, 
  Heart, 
  MessageSquare,
  Edit,
  Check,
  Copy,
  ThumbsUp,
  Eye
} from "lucide-react";
import AnimatedTransition from "@/components/AnimatedTransition";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Mock data for problems
const mockProblems = {
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

// Mock comments data
const mockComments = [
  { id: "1", username: "CodeMaster", avatar: "https://source.unsplash.com/random/100x100/?portrait", comment: "This is a really efficient solution. I like how you used a hashmap to reduce the time complexity to O(n).", timestamp: "2 days ago", likes: 5 },
  { id: "2", username: "AlgoExpert", avatar: "https://source.unsplash.com/random/100x100/?portrait&2", comment: "I would suggest using forEach instead of a for loop for better readability.", timestamp: "1 day ago", likes: 2 }
];

const difficultyColors = {
  Easy: "text-green-500 bg-green-950/30 border border-green-500/20",
  Medium: "text-yellow-500 bg-yellow-950/30 border border-yellow-500/20",
  Hard: "text-red-500 bg-red-950/30 border border-red-500/20"
};

const PlatformPage: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("problems");
  const [editMode, setEditMode] = useState(false);
  const [currentSolution, setCurrentSolution] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newProblem, setNewProblem] = useState({ 
    title: "", 
    difficulty: "Easy", 
    tags: "", 
    problem: "", 
    solution: "" 
  });

  // Filter problems based on search term
  const problems = platform ? (mockProblems[platform as keyof typeof mockProblems] || []) : [];
  const filteredProblems = problems.filter(problem => 
    problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  React.useEffect(() => {
    if (selectedProblem) {
      const solution = mockSolutions[`${platform}-${selectedProblem}`];
      if (solution) {
        setCurrentSolution(solution);
      }
    }
  }, [selectedProblem, platform]);
  
  const handleAddProblem = () => {
    if (!newProblem.title || !newProblem.problem || !newProblem.solution) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Problem added successfully!");
    setSelectedTab("problems");
    setNewProblem({ title: "", difficulty: "Easy", tags: "", problem: "", solution: "" });
    // In a real app, you would add the problem to the database here
  };

  const handleSaveSolution = () => {
    toast.success("Solution saved successfully!");
    setEditMode(false);
    // In a real app, you would save the solution to the database here
  };

  const handleShareSolution = () => {
    // In a real app, this would open a share dialog
    toast.success("Solution copied to clipboard!");
    navigator.clipboard.writeText(currentSolution);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    toast.success("Comment added successfully!");
    setNewComment("");
    // In a real app, you would add the comment to the database
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
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Tabs 
            defaultValue="problems" 
            value={selectedTab} 
            onValueChange={setSelectedTab} 
            className="w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-1 text-gradient">
                  {platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : "Platform"} <span className="text-primary">Problems</span>
                </h1>
                <p className="text-muted-foreground">Browse and solve problems or add your own solutions</p>
              </div>
              
              <TabsList className="bg-muted/50 border border-border p-1">
                <TabsTrigger value="problems" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <BookOpen className="h-4 w-4" />
                  Problems
                </TabsTrigger>
                <TabsTrigger value="add" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Plus className="h-4 w-4" />
                  Add New
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="problems" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Problems List */}
                <Card className="lg:col-span-1 overflow-hidden border border-border bg-card/50 backdrop-blur-md shadow-lg">
                  <CardHeader className="p-4 space-y-3 border-b border-border/50">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Problems
                    </CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search problems..."
                        className="pl-10 bg-background/50 border-border/50 focus-visible:ring-primary"
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
                            onClick={() => {
                              setSelectedProblem(problem.id);
                              setEditMode(false);
                              setShowComments(false);
                            }}
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{problem.title}</h3>
                              <span className={`text-xs px-2 py-1 rounded-md ${difficultyColors[problem.difficulty as keyof typeof difficultyColors]}`}>
                                {problem.difficulty}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {problem.tags.map((tag, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {/* Progress indicator */}
                            <div className="mt-2 w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  problem.progress === 100 
                                    ? "bg-green-500" 
                                    : problem.progress > 0 
                                      ? "bg-primary" 
                                      : "bg-muted"
                                }`}
                                style={{ width: `${problem.progress}%` }}
                              />
                            </div>
                            <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
                              <span>Progress</span>
                              <span>{problem.progress}%</span>
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
                <Card className="lg:col-span-2 overflow-hidden border border-border bg-card/50 backdrop-blur-md shadow-lg">
                  <CardHeader className="p-4 border-b border-border/50 flex flex-row justify-between items-center">
                    <CardTitle className="text-xl flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      Solution
                    </CardTitle>
                    {selectedProblem && (
                      <div className="flex items-center gap-2">
                        {editMode ? (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-primary/30 text-primary hover:bg-primary/10"
                              onClick={() => setEditMode(false)}
                            >
                              Cancel
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-primary hover:bg-primary/90 gap-1"
                              onClick={handleSaveSolution}
                            >
                              <Check className="h-4 w-4" />
                              Save
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-primary/30 text-primary hover:bg-primary/10 gap-1"
                              onClick={() => setShowComments(!showComments)}
                            >
                              <MessageSquare className="h-3.5 w-3.5" />
                              <span>{mockComments.length}</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/30 text-primary hover:bg-primary/10"
                              onClick={() => {
                                navigator.clipboard.writeText(currentSolution);
                                toast.success("Code copied to clipboard!");
                              }}
                            >
                              <Copy className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="border-primary/30 text-primary hover:bg-primary/10"
                              onClick={handleShareSolution}
                            >
                              <Share className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-primary hover:bg-primary/90 gap-1"
                              onClick={() => setEditMode(true)}
                            >
                              <Edit className="h-3.5 w-3.5" />
                              Edit
                            </Button>
                          </>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-0">
                    {selectedProblem ? (
                      <div className="flex flex-col h-full">
                        <div className="p-4 flex-1">
                          <div className="rounded-lg bg-background/50 border border-border/50 p-4 overflow-x-auto">
                            {editMode ? (
                              <Textarea
                                value={currentSolution}
                                onChange={(e) => setCurrentSolution(e.target.value)}
                                className="w-full min-h-[300px] font-mono text-sm bg-background/50 border-none resize-none focus-visible:ring-primary"
                              />
                            ) : (
                              <pre className="font-mono text-sm">
                                <code className="language-javascript">
                                  {currentSolution || "No solution available for this problem yet."}
                                </code>
                              </pre>
                            )}
                          </div>
                          
                          {/* Comments section */}
                          {showComments && (
                            <div className="mt-4 space-y-4">
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Comments</h3>
                                <span className="text-sm text-muted-foreground">{mockComments.length} comments</span>
                              </div>
                              
                              <div className="space-y-3">
                                {mockComments.map((comment) => (
                                  <div key={comment.id} className="p-3 rounded-lg border border-border/50 bg-background/20">
                                    <div className="flex items-start gap-3">
                                      <div className="h-8 w-8 rounded-full overflow-hidden">
                                        <img src={comment.avatar} alt={comment.username} className="w-full h-full object-cover" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                          <h4 className="font-medium text-sm">{comment.username}</h4>
                                          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                                        </div>
                                        <p className="text-sm mt-1">{comment.comment}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                                            <ThumbsUp className="h-3.5 w-3.5" />
                                            <span>{comment.likes}</span>
                                          </button>
                                          <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                                            Reply
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="pt-3 border-t border-border/50">
                                <div className="flex gap-3">
                                  <div className="h-8 w-8 rounded-full overflow-hidden">
                                    <img 
                                      src="https://source.unsplash.com/random/100x100/?portrait&me" 
                                      alt="You" 
                                      className="w-full h-full object-cover" 
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <Textarea
                                      placeholder="Add a comment..."
                                      className="w-full min-h-[80px] border-border/50 bg-background/50 focus-visible:ring-primary"
                                      value={newComment}
                                      onChange={(e) => setNewComment(e.target.value)}
                                    />
                                    <div className="flex justify-end mt-2">
                                      <Button 
                                        size="sm"
                                        onClick={handleAddComment}
                                        className="bg-primary hover:bg-primary/90"
                                      >
                                        Comment
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {!showComments && !editMode && (
                          <div className="border-t border-border/50 p-4 bg-muted/20">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">234 views</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm text-muted-foreground">56 likes</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 gap-1">
                                  <Heart className="h-3.5 w-3.5" />
                                  Like
                                </Button>
                                <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 gap-1">
                                  <MessageSquare className="h-3.5 w-3.5" />
                                  Comment
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Code className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-lg font-medium mt-3">Select a problem to view its solution</h3>
                        <p className="text-muted-foreground mt-1">Choose a problem from the list on the left</p>
                        <div className="flex justify-center mt-4">
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedTab("add")}
                            className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
                          >
                            <Plus className="h-4 w-4" />
                            Add New Problem
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="add">
              <Card className="border border-border bg-card/50 backdrop-blur-md shadow-lg">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    Add New Problem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Problem Title</label>
                      <Input 
                        placeholder="Enter problem title" 
                        value={newProblem.title}
                        onChange={(e) => setNewProblem({...newProblem, title: e.target.value})}
                        className="bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Difficulty</label>
                        <select 
                          className="w-full p-2 rounded-md border border-border/50 bg-background/50 focus:ring focus:ring-primary/50 outline-none"
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
                          className="bg-background/50 border-border/50 focus-visible:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Problem Description</label>
                    <Textarea 
                      placeholder="Enter problem description" 
                      className="min-h-32 bg-background/50 border-border/50 focus-visible:ring-primary"
                      value={newProblem.problem}
                      onChange={(e) => setNewProblem({...newProblem, problem: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Solution</label>
                    <Textarea 
                      placeholder="Enter your solution (code)" 
                      className="min-h-32 font-mono bg-background/50 border-border/50 focus-visible:ring-primary"
                      value={newProblem.solution}
                      onChange={(e) => setNewProblem({...newProblem, solution: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setNewProblem({ title: "", difficulty: "Easy", tags: "", problem: "", solution: "" })}
                      className="border-border/50 hover:bg-background/50"
                    >
                      Reset
                    </Button>
                    <Button 
                      onClick={handleAddProblem}
                      className="bg-primary hover:bg-primary/90"
                    >
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
