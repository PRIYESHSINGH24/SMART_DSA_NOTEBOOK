
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedTransition from "@/components/AnimatedTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Heart, MessageSquare, Share, ThumbsUp, Code, User, Clock, Filter, TrendingUp, Plus } from "lucide-react";
import { toast } from "sonner";

// Mock data for posts
const mockPosts = [
  {
    id: "1",
    username: "codemaster",
    avatar: "https://source.unsplash.com/random/100x100/?portrait&1",
    timestamp: "2 hours ago",
    title: "Optimized Solution for Two Sum Problem",
    description: "Check out my O(n) solution for the Two Sum problem using a hashmap.",
    code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    likes: 42,
    comments: 12,
    shares: 5,
    tags: ["leetcode", "arrays", "hashmap"]
  },
  {
    id: "2",
    username: "algoexpert",
    avatar: "https://source.unsplash.com/random/100x100/?portrait&2",
    timestamp: "5 hours ago",
    title: "Dynamic Programming Approach for Fibonacci",
    description: "A bottom-up DP approach to calculate Fibonacci numbers in O(n) time with O(1) space.",
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}`,
    likes: 87,
    comments: 23,
    shares: 15,
    tags: ["dynamic-programming", "algorithms", "optimization"]
  },
  {
    id: "3",
    username: "recursionmaster",
    avatar: "https://source.unsplash.com/random/100x100/?portrait&3",
    timestamp: "1 day ago",
    title: "Binary Search Implementation",
    description: "An elegant recursive binary search implementation with log(n) time complexity.",
    code: `function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  return binarySearch(arr, target, mid + 1, right);
}`,
    likes: 64,
    comments: 18,
    shares: 9,
    tags: ["binary-search", "recursion", "searching"]
  }
];

const SocialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [newPostContent, setNewPostContent] = useState({ title: "", description: "", code: "", tags: "" });
  const [showNewPost, setShowNewPost] = useState(false);

  const handleShare = (postId: string) => {
    toast.success("Post copied to clipboard!");
    // In a real app, you'd implement sharing functionality
  };

  const handleLike = (postId: string) => {
    toast.success("Post liked!");
    // In a real app, you'd update the like count in the database
  };

  const handleComment = (postId: string) => {
    // In a real app, you'd open a comment modal or navigate to comments
    toast.info("Comments feature coming soon!");
  };

  const handlePostSubmit = () => {
    if (!newPostContent.title || !newPostContent.code) {
      toast.error("Title and code are required!");
      return;
    }
    
    toast.success("Post shared successfully!");
    setNewPostContent({ title: "", description: "", code: "", tags: "" });
    setShowNewPost(false);
    // In a real app, you'd add the post to the database
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
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="text-primary">Social</span> Feed
                </h1>
                <Button 
                  className="bg-primary hover:bg-primary/90 gap-2"
                  onClick={() => setShowNewPost(!showNewPost)}
                >
                  <Plus className="h-4 w-4" />
                  {showNewPost ? "Cancel" : "Share Code"}
                </Button>
              </div>
              
              {showNewPost && (
                <Card className="mb-6 border border-border bg-card/50 backdrop-blur-md shadow-lg">
                  <CardHeader className="p-4 border-b border-border/50">
                    <h3 className="text-lg font-medium">Share Your Code</h3>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input 
                        placeholder="E.g., Efficient Binary Search Implementation"
                        value={newPostContent.title}
                        onChange={(e) => setNewPostContent({...newPostContent, title: e.target.value})}
                        className="mt-1 bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description (Optional)</label>
                      <Textarea 
                        placeholder="Describe your approach or any insights"
                        value={newPostContent.description}
                        onChange={(e) => setNewPostContent({...newPostContent, description: e.target.value})}
                        className="mt-1 bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Code</label>
                      <Textarea 
                        placeholder="Paste your code snippet here"
                        value={newPostContent.code}
                        onChange={(e) => setNewPostContent({...newPostContent, code: e.target.value})}
                        className="mt-1 font-mono bg-background/50 border-border/50 focus-visible:ring-primary min-h-[150px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Tags (Comma separated)</label>
                      <Input 
                        placeholder="E.g., algorithms, binary-search, optimization"
                        value={newPostContent.tags}
                        onChange={(e) => setNewPostContent({...newPostContent, tags: e.target.value})}
                        className="mt-1 bg-background/50 border-border/50 focus-visible:ring-primary"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border/50 flex justify-end gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setNewPostContent({ title: "", description: "", code: "", tags: "" });
                        setShowNewPost(false);
                      }}
                      className="border-border/50 hover:bg-background/50"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handlePostSubmit}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Share Post
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4">
                <TabsList className="bg-muted/50 border border-border p-1">
                  <TabsTrigger 
                    value="trending" 
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Trending
                  </TabsTrigger>
                  <TabsTrigger 
                    value="latest" 
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Clock className="h-4 w-4" />
                    Latest
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {mockPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    variants={itemVariants}
                  >
                    <Card className="border border-border futuristic-card hover:shadow-xl overflow-hidden">
                      <CardHeader className="p-4 border-b border-border/40 bg-muted/5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                            <img 
                              src={post.avatar} 
                              alt={post.username} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{post.username}</span>
                              <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full text-primary">
                                Pro
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.timestamp}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">{post.title}</h3>
                          {post.description && (
                            <p className="text-muted-foreground mt-1">{post.description}</p>
                          )}
                        </div>
                        
                        <div className="rounded-md bg-background/50 border border-border/50 p-4 overflow-x-auto">
                          <pre className="font-mono text-sm">
                            <code>{post.code}</code>
                          </pre>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-2 border-t border-border/40 flex justify-between">
                        <div className="flex items-center gap-6">
                          <button 
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => handleLike(post.id)}
                          >
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button 
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => handleComment(post.id)}
                          >
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button 
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => handleShare(post.id)}
                          >
                            <Share className="h-4 w-4" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                          onClick={() => {
                            navigator.clipboard.writeText(post.code);
                            toast.success("Code copied to clipboard!");
                          }}
                        >
                          Copy Code
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-80 shrink-0">
              <div className="sticky top-20">
                <Card className="border border-border bg-card/50 backdrop-blur-md shadow-lg">
                  <CardHeader className="p-4 border-b border-border/50">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Filter className="h-4 w-4 text-primary" />
                      Explore
                    </h3>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <Input 
                          placeholder="Search posts..."
                          className="bg-background/50 border-border/50 focus-visible:ring-primary"
                        />
                      </div>
                      
                      <h4 className="font-medium text-sm mt-4 mb-2">Trending Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {["algorithms", "leetcode", "dynamic-programming", "arrays", "hashmap", "optimization"].map((tag) => (
                          <button 
                            key={tag}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <h4 className="font-medium text-sm mb-2">Top Contributors</h4>
                      <div className="space-y-3">
                        {[
                          { username: "codemaster", posts: 123, avatar: "https://source.unsplash.com/random/100x100/?portrait&1" },
                          { username: "algoexpert", posts: 87, avatar: "https://source.unsplash.com/random/100x100/?portrait&2" },
                          { username: "pythonista", posts: 64, avatar: "https://source.unsplash.com/random/100x100/?portrait&3" },
                        ].map((user) => (
                          <div key={user.username} className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                              <img 
                                src={user.avatar} 
                                alt={user.username} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{user.username}</div>
                              <div className="text-xs text-muted-foreground">{user.posts} posts</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedTransition>
  );
};

export default SocialPage;
