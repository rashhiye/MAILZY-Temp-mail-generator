import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden py-24 md:py-32">
    {/* Background glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground animate-fade-in">
          <Shield className="h-4 w-4 text-primary" />
          Free &amp; Privacy-First
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fade-in text-foreground">
          Your Inbox, <span className="gradient-text">Your Rules</span>
        </h1>

        <p className="mb-10 text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Instant disposable email addresses. Protect your real inbox from spam, phishing, and unwanted signups.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/inbox">
            <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 font-semibold px-8 glow animate-pulse-glow">
              Generate Temp Email
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="#features">
            <Button size="lg" variant="outline" className="font-semibold px-8">
              Learn More
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: Zap, label: "Instant", desc: "Generation" },
            { icon: Shield, label: "100%", desc: "Anonymous" },
            { icon: Clock, label: "Auto", desc: "Expiry" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="text-center">
              <Icon className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-xl font-bold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
