import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Building,
  Ellipsis,
  MessageSquare,
  PanelsTopLeft,
  University,
  StarIcon,
  type LucideIcon,
} from "lucide-react";
import { profie } from "@/data/profile";

type HeaderNavLink = {
  label: string;
  to: string;
  icon: LucideIcon;
};

const navLinks: HeaderNavLink[] = [
  { label: "Overview", to: "/", icon: BookOpen },
  { label: "Experience", to: "/experience", icon: Building },
  { label: "Projects", to: "/projects", icon: PanelsTopLeft },
  { label: "Skills", to: "/skills", icon: StarIcon },
  { label: "Education", to: "/education", icon: University },
  { label: "Contact", to: "/contact", icon: MessageSquare },
];

const [firstLink, ...restLinks] = navLinks;

export default function Header() {
  return (
    <motion.header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 bg-background backdrop-blur-md`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <motion.div
            className="text-base font-semibold text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {profie.name}
          </motion.div>
          <ThemeToggle />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          {navLinks.map((ele) => (
            <NavElement key={ele.label} {...ele} />
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="flex justify-between md:hidden">
          <NavElement key={firstLink.label} {...firstLink} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size={"sm"}>
                <Ellipsis className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="absolute flex flex-col w-56 -right-2"
              align="start"
            >
              {restLinks.map((ele) => (
                <MobileNavElement {...ele} key={ele.label} />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}

const NavElement = ({ to, label, icon: Icon }: HeaderNavLink) => {
  return (
    <NavLink
      key={label}
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-red-400" : ""
      }
    >
      <Button variant={"ghost"} size={"sm"}>
        <Icon className="h-4 w-4 text-foreground/55" />
        <span className="">{label}</span>
      </Button>
    </NavLink>
  );
};

const MobileNavElement = ({ to, label, icon: Icon }: HeaderNavLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `rounded-md ${isActive ? "bg-muted" : ""}`}
    >
      <DropdownMenuItem>
        <Icon className="h-4 w-4 text-foreground/55" />
        {label}
      </DropdownMenuItem>
    </NavLink>
  );
};
