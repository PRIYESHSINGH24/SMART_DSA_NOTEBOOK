
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
import { LogOut, Menu, X, LucideCode } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <LucideCode className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-xl tracking-tight">DSA Notebook</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/solutions" className="text-sm font-medium transition-colors hover:text-primary">
            Solutions
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 flex items-center gap-2 pl-2 pr-3 rounded-full border border-border/40 hover:bg-background/90" aria-label="User menu">
                    <div className="flex h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
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
                  <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild size="sm">
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
          "md:hidden fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-sm border-b transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container py-4 px-4 space-y-4">
          <Link 
            to="/" 
            className="block py-2 text-base font-medium hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/solutions" 
            className="block py-2 text-base font-medium hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          {isAuthenticated ? (
            <div className="pt-2 border-t">
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
            <div className="pt-2 border-t space-y-2">
              <Button 
                asChild 
                variant="outline" 
                className="w-full" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button 
                asChild 
                className="w-full" 
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
