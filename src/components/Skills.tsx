const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: ["Full Stack Development", "Web Development", "Mobile App Development", "Frontend & Backend"],
    },
    {
      title: "AI & Automation",
      skills: ["AI Development", "AI Chatbot Development", "Automation", "Data Management"],
    },
    {
      title: "Technologies",
      skills: ["React.js", "Node.js", "Flutter", "JavaScript", "Python", "API Integration"],
    },
    {
      title: "Domains",
      skills: ["eCommerce", "SaaS", "Scalable Web Applications", "Cloud & Integrations"],
    },
  ];

  const certifications = [
    {
      name: "IBM AI Engineering Professional Certificate",
      issuer: "IBM / Coursera",
      description: "Comprehensive training in building and deploying AI models, including machine learning, deep learning, and NLP. Hands-on experience with Python, TensorFlow, and IBM Watson services.",
      date: "2023",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in">
            Technologies and domains I work with every day
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-md hover-lift animate-fade-in-up border border-border/50 flex flex-col min-h-[220px] md:min-h-[240px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-primary/20 shrink-0">
                  {category.title}
                </h3>
                <div className={`grid gap-2 flex-1 ${category.skills.length === 6 ? "grid-cols-3 grid-rows-2" : "grid-cols-2 grid-rows-2"}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors text-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md border-l-4 border-primary border border-border/50 flex flex-col min-h-[200px]">
              <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-primary/20 shrink-0">Education</h3>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-foreground font-medium">Bachelor of Technology (BTech) — Software Engineering</p>
                <p className="text-muted-foreground text-sm mt-1">British Columbia Institute of Technology · 2016–2020</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border-l-4 border-primary border border-border/50 flex flex-col min-h-[200px]">
              <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-primary/20 shrink-0">Certification</h3>
              <div className="flex-1 flex flex-col justify-center">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <h4 className="text-foreground font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer} · {cert.date}</p>
                    <p className="text-muted-foreground text-sm mt-2">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
