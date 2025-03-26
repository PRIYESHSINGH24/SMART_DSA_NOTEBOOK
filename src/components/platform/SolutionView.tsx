
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code, 
  Edit, 
  Check, 
  Copy, 
  Share, 
  Heart, 
  MessageSquare,
  Eye,
  Plus
} from "lucide-react";
import { toast } from "sonner";
import CommentSection from "./CommentSection";

interface Comment {
  id: string;
  username: string;
  avatar: string;
  comment: string;
  timestamp: string;
  likes: number;
}

interface SolutionViewProps {
  selectedProblem: string | null;
  platform: string | undefined;
  currentSolution: string;
  setCurrentSolution: (solution: string) => void;
  comments: Comment[];
  setSelectedTab: (tab: string) => void;
}

const SolutionView: React.FC<SolutionViewProps> = ({
  selectedProblem,
  platform,
  currentSolution,
  setCurrentSolution,
  comments,
  setSelectedTab
}) => {
  const [editMode, setEditMode] = useState(false);
  const [showComments, setShowComments] = useState(false);

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

  return (
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
                  <span>{comments.length}</span>
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
              {showComments && <CommentSection comments={comments} />}
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
  );
};

export default SolutionView;
