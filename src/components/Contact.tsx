import { MapPin, MessageCircle, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Telegram",
    value: "Elony011",
    href: "https://t.me/Elony011",
    icon: MessageCircle,
  },
  {
    label: "Discord",
    value: "Elony017",
    href: "https://discord.com/users/Elony017",
    icon: MessageCircle,
  },
  {
    label: "WhatsApp",
    value: "+1 607 743 4149",
    href: "https://wa.me/16077434149",
    icon: Phone,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            Available for new projects. Let's discuss how I can help bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8" role="list">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up border border-border/50 flex flex-col items-center gap-4 transition-colors hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={`Contact via ${item.label}: ${item.value}`}
                  role="listitem"
                >
                  <Icon className="w-12 h-12 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div
            className="bg-card p-8 rounded-xl shadow-lg border border-border/50 mt-8 animate-fade-in-up flex flex-col items-center gap-2"
            style={{ animationDelay: "0.15s" }}
            role="region"
            aria-label="Location information"
          >
            <MapPin className="w-10 h-10 text-primary" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-foreground">Location</h3>
            <p className="text-muted-foreground">Toronto, Canada (Remote)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
