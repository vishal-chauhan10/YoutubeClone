import Link from "next/link";
import { Home, TrendingUp, Library, History } from "lucide-react";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Trending",
    icon: TrendingUp,
    href: "/trending",
  },
  {
    label: "Library",
    icon: Library,
    href: "/library",
  },
  {
    label: "History",
    icon: History,
    href: "/history",
  },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 flex flex-col w-16 h-full bg-background border-r">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="flex flex-col items-center gap-y-1 p-3 hover:bg-secondary transition"
        >
          <route.icon className="h-5 w-5" />
          <span className="text-xs">{route.label}</span>
        </Link>
      ))}
    </div>
  );
} 