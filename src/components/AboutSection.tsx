const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-foreground mb-6">About Mailzy</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Mailzy was built with one mission: to give everyone free, easy access to disposable
        email addresses. In a world where your inbox is constantly flooded with spam, newsletters,
        and data-harvesting forms, we believe you deserve better.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Our service generates fully functional temporary email addresses that receive real emails
        instantly. Use them for website signups, free trials, or any time you don't want to share
        your personal email. Once you're done, the address simply expires — no cleanup, no traces.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        We don't collect personal information, require signups, or track your activity. Your
        privacy is not just a feature — it's our foundation.
      </p>
    </div>
  </section>
);

export default AboutSection;
