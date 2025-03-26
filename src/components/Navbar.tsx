
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  LogOut, 
  Menu, 
  X, 
  LucideCode, 
  Users, 
  FileText,
  Home,
  BookOpen,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <LucideCode className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-xl tracking-tight neon-text">DSA Notebook</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/solutions" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>Solutions</span>
          </Link>
          <Link to="/social" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>Social</span>
          </Link>
          <Link to="/notes" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            <span>Notes</span>
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative p-0">
                <Bell className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  3
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 flex items-center gap-2 pl-2 pr-3 rounded-full border border-border/40 hover:bg-background/90 hover:border-primary/40" aria-label="User menu">
                    <div className="flex h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <img
                        src={user?.photoUrl || "https://source.unsplash.com/random/100x100/?portrait"}
                        alt={user?.username || "User"}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{user?.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.username}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="text-primary">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container py-4 px-4 space-y-4">
          <Link 
            to="/" 
            className="block py-2 text-base font-medium hover:text-primary flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link 
            to="/solutions" 
            className="block py-2 text-base font-medium hover:text-primary flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BookOpen className="h-5 w-5" />
            Solutions
          </Link>
          <Link 
            to="/social" 
            className="block py-2 text-base font-medium hover:text-primary flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Users className="h-5 w-5" />
            Social
          </Link>
          <Link 
            to="/notes" 
            className="block py-2 text-base font-medium hover:text-primary flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText className="h-5 w-5" />
            Notes
          </Link>
          {isAuthenticated ? (
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-3 py-2">
                <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img
                    src={user?.photoUrl || "https://source.unsplash.com/random/100x100/?portrait"}
                    alt={user?.username || "User"}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{user?.username}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-1 pt-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-left font-normal hover:text-primary" 
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <Link to="/profile">My Profile</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-left font-normal hover:text-primary" 
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </div>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-destructive hover:text-destructive mt-2" 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </Button>
            </div>
          ) : (
            <div className="pt-2 border-t border-border/30 space-y-2">
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-primary/30 text-primary" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
