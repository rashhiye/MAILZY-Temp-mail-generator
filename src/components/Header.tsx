import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Mail } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isInbox = location.pathname === "/inbox";

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-bg rounded-lg p-1.5">
            <Mail className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Mailzy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {!isInbox && (
            <Link to="/inbox">
              <Button className="gradient-bg text-primary-foreground hover:opacity-90 font-medium">
                Get Temp Email
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
