
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedTransition from "@/components/AnimatedTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Plus, 
  Search, 
  FileText, 
  Edit, 
  Trash, 
  Star, 
  StarOff,
  Calendar,
  Tag,
  Save,
  Filter,
  Clock,
  LayoutGrid,
  LayoutList,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Mock data for notes
const mockNotes = [
  {
    id: "1",
    title: "Binary Search Implementation",
    content: "Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.\n\nTime complexity: O(log n)\n\nKey points to remember:\n1. The array must be sorted\n2. Calculate the middle point\n3. If target is equal to middle element, return\n4. If target is less than middle element, search left half\n5. If target is greater than middle element, search right half",
    tags: ["algorithms", "searching", "interview"],
    createdAt: "2023-06-15T12:00:00Z",
    updatedAt: "2023-06-15T14:30:00Z",
    isFavorite: true
  },
  {
    id: "2",
    title: "Dynamic Programming Patterns",
    content: "Common DP patterns to identify:\n\n1. Fibonacci sequence style problems (e.g., climbing stairs)\n2. Longest/Shortest subsequence problems\n3. Min/Max path to reach a target\n4. Ways to divide a set into subsets\n5. Game theory (predict winner)\n\nRemember to identify:\n- The state variables\n- Recurrence relation\n- Base cases\n- State initialization",
    tags: ["dynamic-programming", "algorithms", "patterns"],
    createdAt: "2023-06-20T09:15:00Z",
    updatedAt: "2023-06-21T11:20:00Z",
    isFavorite: false
  },
  {
    id: "3",
    title: "Graph Traversal Techniques",
    content: "Graph Traversal Basics:\n\n1. BFS (Breadth-First Search)\n   - Uses a queue\n   - Finds shortest path in unweighted graphs\n   - Good for level-by-level exploration\n\n2. DFS (Depth-First Search)\n   - Uses a stack (or recursion)\n   - Good for exploring all paths\n   - Used for cycle detection, topological sorting\n\n3. Dijkstra's Algorithm\n   - For weighted graphs with non-negative weights\n   - Uses a priority queue\n   - Finds shortest path\n\n4. Bellman-Ford\n   - Can handle negative weights\n   - Detects negative cycles",
    tags: ["graphs", "algorithms", "traversal"],
    createdAt: "2023-07-05T15:45:00Z",
    updatedAt: "2023-07-05T16:30:00Z",
    isFavorite: true
  },
  {
    id: "4",
    title: "System Design Interview Checklist",
    content: "System Design Interview Preparation:\n\n1. Requirements Clarification\n   - Functional requirements\n   - Non-functional requirements (scalability, reliability, etc.)\n\n2. Back-of-the-envelope Calculations\n   - Traffic estimates\n   - Storage estimates\n   - Bandwidth estimates\n\n3. System Interface Definition\n   - Define APIs\n\n4. Data Model\n   - Database schema\n   - SQL vs NoSQL considerations\n\n5. High-level Design\n   - Basic components\n   - Service interactions\n\n6. Detailed Design\n   - Deep dive into critical components\n   - Algorithms and data structures\n\n7. Bottlenecks and Solutions\n   - Identify potential issues\n   - Scaling solutions (vertical vs horizontal)\n   - Caching strategies\n   - Load balancing",
    tags: ["system-design", "interview", "preparation"],
    createdAt: "2023-07-10T10:00:00Z",
    updatedAt: "2023-07-12T13:25:00Z",
    isFavorite: false
  }
];

// All available tags from the notes
const allTags = Array.from(new Set(mockNotes.flatMap(note => note.tags)));

const NotesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [editableNote, setEditableNote] = useState({
    id: "",
    title: "",
    content: "",
    tags: [] as string[],
    isFavorite: false
  });

  // Filter notes based on search term and selected tags
  const filteredNotes = mockNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          note.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = filteredTags.length === 0 || 
                        filteredTags.every(tag => note.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const handleCreateNote = () => {
    setIsCreating(true);
    setActiveNote(null);
    setIsEditing(false);
    setEditableNote({
      id: Date.now().toString(),
      title: "",
      content: "",
      tags: [],
      isFavorite: false
    });
  };

  const handleEditNote = (noteId: string) => {
    const note = mockNotes.find(n => n.id === noteId);
    if (note) {
      setIsEditing(true);
      setIsCreating(false);
      setEditableNote({
        id: note.id,
        title: note.title,
        content: note.content,
        tags: [...note.tags],
        isFavorite: note.isFavorite
      });
    }
  };

  const handleViewNote = (noteId: string) => {
    setActiveNote(noteId);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleSaveNote = () => {
    if (!editableNote.title) {
      toast.error("Title is required");
      return;
    }
    
    if (isCreating) {
      toast.success("Note created successfully!");
      // In a real app, you would save the new note to the database
    } else {
      toast.success("Note updated successfully!");
      // In a real app, you would update the note in the database
    }
    
    setIsEditing(false);
    setIsCreating(false);
    setActiveNote(editableNote.id);
  };

  const handleDeleteNote = (noteId: string) => {
    // In a real app, you would delete the note from the database
    toast.success("Note deleted successfully!");
    if (activeNote === noteId) {
      setActiveNote(null);
    }
  };

  const handleToggleFavorite = (noteId: string) => {
    // In a real app, you would toggle the favorite status in the database
    toast.success("Favorite status updated!");
  };

  const handleTagFilter = (tag: string) => {
    if (filteredTags.includes(tag)) {
      setFilteredTags(filteredTags.filter(t => t !== tag));
    } else {
      setFilteredTags([...filteredTags, tag]);
    }
  };

  const handleTagInput = (input: string) => {
    if (input.endsWith(",") && input.length > 1) {
      const newTag = input.slice(0, -1).trim();
      if (newTag && !editableNote.tags.includes(newTag)) {
        setEditableNote({
          ...editableNote,
          tags: [...editableNote.tags, newTag]
        });
      }
      return "";
    }
    return input;
  };

  const activeNoteData = mockNotes.find(note => note.id === activeNote);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
            {/* Notes List Sidebar */}
            <div className="md:w-80 w-full shrink-0">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  <span className="text-primary">My</span> Notes
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${viewMode === 'list' ? 'bg-primary/10 text-primary' : ''}`}
                    onClick={() => setViewMode("list")}
                  >
                    <LayoutList className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : ''}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes..."
                  className="pl-10 bg-background/50 border-border/50 focus-visible:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
                <Button
                  variant="outline"
                  size="sm"
                  className={`whitespace-nowrap ${filteredTags.length === 0 ? 'bg-primary/10 text-primary border-primary/30' : 'border-border/50'}`}
                  onClick={() => setFilteredTags([])}
                >
                  All Notes
                </Button>
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className={`whitespace-nowrap ${filteredTags.includes(tag) ? 'bg-primary/10 text-primary border-primary/30' : 'border-border/50'}`}
                    onClick={() => handleTagFilter(tag)}
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
              
              <Button 
                className="w-full mb-4 bg-primary hover:bg-primary/90 gap-2"
                onClick={handleCreateNote}
              >
                <Plus className="h-4 w-4" />
                New Note
              </Button>
              
              <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-240px)] pr-1">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                      <motion.div 
                        key={note.id}
                        variants={itemVariants}
                        onClick={() => handleViewNote(note.id)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          activeNote === note.id
                            ? "bg-primary/10 border-primary/50"
                            : "hover:bg-muted/30 border-transparent"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm line-clamp-1">{note.title}</h3>
                          {note.isFavorite && (
                            <Star className="h-4 w-4 text-primary/80 mt-0.5 ml-2 shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {note.content}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex flex-wrap gap-1">
                            {note.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-xs px-1.5 py-0.5 bg-secondary/10 text-secondary rounded-full">
                                #{tag}
                              </span>
                            ))}
                            {note.tags.length > 2 && (
                              <span className="text-xs px-1.5 py-0.5 bg-muted/30 text-muted-foreground rounded-full">
                                +{note.tags.length - 2}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(note.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground border border-dashed border-border/50 rounded-lg">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                      <p>No notes found</p>
                      <p className="text-sm">Try a different search term</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
            
            {/* Note Content */}
            <div className="flex-1">
              <Card className="h-[calc(100vh-8rem)] border border-border bg-card/50 backdrop-blur-md shadow-lg overflow-hidden">
                {isEditing || isCreating ? (
                  <>
                    <CardHeader className="p-4 border-b border-border/50 flex flex-row justify-between items-center">
                      <Input 
                        placeholder="Note title"
                        value={editableNote.title}
                        onChange={(e) => setEditableNote({...editableNote, title: e.target.value})}
                        className="text-xl font-semibold border-none bg-transparent focus-visible:ring-0 px-0 py-0 h-auto"
                      />
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-border/50 hover:bg-background/50"
                          onClick={() => {
                            if (isCreating) {
                              setIsCreating(false);
                              setActiveNote(null);
                            } else {
                              setIsEditing(false);
                              setActiveNote(editableNote.id);
                            }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-primary hover:bg-primary/90 gap-1"
                          onClick={handleSaveNote}
                        >
                          <Save className="h-3.5 w-3.5" />
                          Save
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex flex-col h-[calc(100%-4rem)] overflow-hidden">
                      <div className="flex gap-2 items-center mb-4">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-wrap gap-2 flex-1">
                          {editableNote.tags.map((tag, index) => (
                            <div 
                              key={index} 
                              className="flex items-center gap-1 text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full"
                            >
                              #{tag}
                              <button 
                                onClick={() => {
                                  setEditableNote({
                                    ...editableNote,
                                    tags: editableNote.tags.filter((_, i) => i !== index)
                                  });
                                }}
                                className="text-secondary hover:text-secondary/80"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <Input 
                            placeholder="Add tags (comma separated)"
                            className="border-none bg-transparent focus-visible:ring-0 p-0 h-6 text-sm"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ',') {
                                e.preventDefault();
                                const value = (e.target as HTMLInputElement).value.trim();
                                if (value && !editableNote.tags.includes(value)) {
                                  setEditableNote({
                                    ...editableNote,
                                    tags: [...editableNote.tags, value]
                                  });
                                  (e.target as HTMLInputElement).value = '';
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <Textarea 
                        placeholder="Start writing your note..."
                        value={editableNote.content}
                        onChange={(e) => setEditableNote({...editableNote, content: e.target.value})}
                        className="flex-1 resize-none border-none bg-transparent focus-visible:ring-0 p-0 font-mono"
                      />
                    </CardContent>
                  </>
                ) : activeNoteData ? (
                  <>
                    <CardHeader className="p-4 border-b border-border/50 flex flex-row justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <span>{activeNoteData.title}</span>
                        {activeNoteData.isFavorite && (
                          <Star className="h-4 w-4 text-primary" />
                        )}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                          onClick={() => handleToggleFavorite(activeNoteData.id)}
                        >
                          {activeNoteData.isFavorite ? (
                            <StarOff className="h-4 w-4" />
                          ) : (
                            <Star className="h-4 w-4" />
                          )}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                          onClick={() => handleEditNote(activeNoteData.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => handleDeleteNote(activeNoteData.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 overflow-auto h-[calc(100%-4rem)]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-2">
                          {activeNoteData.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>Created: {new Date(activeNoteData.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Updated: {new Date(activeNoteData.updatedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="whitespace-pre-wrap">
                        {activeNoteData.content}
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Your Notes Space</h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      Create and manage your study notes, algorithm insights, and interview preparation materials all in one place.
                    </p>
                    <Button 
                      onClick={handleCreateNote}
                      className="bg-primary hover:bg-primary/90 gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Create Your First Note
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </AnimatedTransition>
  );
};

export default NotesPage;
