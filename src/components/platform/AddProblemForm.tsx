
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface AddProblemFormProps {
  setSelectedTab: (tab: string) => void;
}

const AddProblemForm: React.FC<AddProblemFormProps> = ({ setSelectedTab }) => {
  const [newProblem, setNewProblem] = useState({ 
    title: "", 
    difficulty: "Easy", 
    tags: "", 
    problem: "", 
    solution: "" 
  });

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

  return (
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
  );
};

export default AddProblemForm;
