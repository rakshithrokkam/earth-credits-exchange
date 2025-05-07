import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { clsx } from "clsx";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignout = async () => {
    await signOut();
    navigate("/auth");
  };

  // Make sure we have these items in our navigation
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-background sticky top-0 z-40 border-b">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <svg
            className="h-6 w-6 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <Link className="text-lg font-bold tracking-tight" to="/">
            CarbonOffset
          </Link>
        </div>
        <div className="flex items-center justify-between flex-1">
          <nav className="hidden md:flex gap-6 ml-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                className={({ isActive }) => 
                  clsx("text-sm font-medium transition-colors", isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                  )
                }
                to={item.href}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <span className="sr-only">Open user menu</span>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user.email || "Authenticated User"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/purchases">My Carbon Credits</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignout}>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign in</Link>
              </Button>
            )}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="grid gap-6 h-full">
                  <div className="flex gap-2 items-center px-6">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <Link className="text-lg font-bold tracking-tight" to="/">
                      CarbonOffset
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 px-6">
                    {navigationItems.map((item) => (
                      <NavLink
                        key={item.name}
                        className={({ isActive }) =>
                          clsx(
                            "text-sm font-medium transition-colors",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )
                        }
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                  <div className="mt-auto px-6 py-4">
                    {user ? (
                      <div className="flex flex-col gap-2">
                        <Link to="/purchases">
                          <Button variant="ghost" className="w-full justify-start">
                            My Carbon Credits
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full" onClick={handleSignout}>
                          Sign out
                        </Button>
                      </div>
                    ) : (
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/auth">Sign in</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
