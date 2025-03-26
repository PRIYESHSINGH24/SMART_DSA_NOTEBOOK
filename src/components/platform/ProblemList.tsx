
import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  tags: string[];
  progress: number;
}

interface ProblemListProps {
  problems: Problem[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedProblem: string | null;
  setSelectedProblem: (id: string) => void;
}

const difficultyColors = {
  Easy: "text-green-500 bg-green-950/30 border border-green-500/20",
  Medium: "text-yellow-500 bg-yellow-950/30 border border-yellow-500/20",
  Hard: "text-red-500 bg-red-950/30 border border-red-500/20"
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

const ProblemList: React.FC<ProblemListProps> = ({
  problems,
  searchTerm,
  setSearchTerm,
  selectedProblem,
  setSelectedProblem
}) => {
  // Filter problems based on search term
  const filteredProblems = problems.filter(problem => 
    problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
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
                onClick={() => setSelectedProblem(problem.id)}
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
  );
};

export default ProblemList;
