import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="gradient-bg rounded-lg p-1.5">
            <Mail className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">Mailzy</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mailzy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
