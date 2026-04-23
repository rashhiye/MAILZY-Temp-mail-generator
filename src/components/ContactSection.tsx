import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions or feedback? Reach us at{" "}
            <a href="mailto:rashidkp2004@gmail.com" className="text-primary hover:underline">
              rashidkp2004@gmail.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 card-hover">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            required
          />
          <Button type="submit" className="w-full gradient-bg text-primary-foreground hover:opacity-90 font-medium">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
