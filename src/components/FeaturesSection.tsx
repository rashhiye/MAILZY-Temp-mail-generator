import { Shield, Zap, RefreshCw, Trash2, Globe, Lock } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Setup", desc: "Generate a disposable email in one click. No registration required." },
  { icon: Shield, title: "Spam Protection", desc: "Keep your real inbox clean. Use temp email for signups and trials." },
  { icon: RefreshCw, title: "Auto Refresh", desc: "Inbox refreshes automatically so you never miss an important email." },
  { icon: Lock, title: "Privacy First", desc: "No personal data collected. Your identity stays completely anonymous." },
  { icon: Globe, title: "Works Everywhere", desc: "Compatible with any website that requires email verification." },
  { icon: Trash2, title: "Self-Destructing", desc: "Emails auto-delete after expiry. No traces left behind." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-foreground mb-3">Why Choose Mailzy?</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Everything you need for hassle-free temporary email.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6 card-hover">
            <div className="mb-4 inline-flex rounded-lg gradient-bg p-2.5">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
