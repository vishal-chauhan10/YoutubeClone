import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { UserButton } from "@/app/components/shared/UserButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 z-50 bg-background border-b">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-x-4">
          <Link href="/" className="flex items-center gap-x-2">
            <span className="text-xl font-bold">YourTube</span>
          </Link>
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="flex items-center gap-x-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-secondary rounded-full focus:outline-none"
                placeholder="Search videos..."
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <UserButton />
        </div>
      </div>
    </nav>
  );
} 