import { Code, Brain, Cloud, GraduationCap, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Backend",
      icon: Code,
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
      skills: [
        "React.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "REST API",
      ],
    },
    {
      title: "AI & Automation",
      icon: Brain,
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
      skills: [
        "AI Development",
        "AI Chatbots",
        "Automation",
        "Data Analysis",
        "ML",
        "NLP",
      ],
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-500",
      skills: [
        "AWS",
        "Firebase",
        "PostgreSQL",
        "Redis",
        "Docker",
        "CI/CD",
      ],
    },
  ];

  const certifications = [
    {
      name: "IBM AI Engineering Professional Certificate",
      issuer: "IBM / Coursera",
      description: "AI models, machine learning, deep learning, NLP with Python, TensorFlow, and IBM Watson.",
      date: "2023",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20" aria-labelledby="skills-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground animate-fade-in max-w-2xl mx-auto">
              Technologies and domains I work with to build scalable, production-ready solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12" role="list">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-sm bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl border-2 ${category.borderColor} transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  role="listitem"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <div className={`p-3 rounded-xl bg-card/50 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3" role="list">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-2.5 bg-card/80 backdrop-blur-sm text-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-200 text-center shadow-sm border border-border/50"
                          role="listitem"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl border-2 border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-card/50 text-amber-500">
                    <GraduationCap className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-foreground font-semibold text-lg">
                    Bachelor of Technology (BTech)
                  </p>
                  <p className="text-primary font-medium">
                    Software Engineering
                  </p>
                  <p className="text-muted-foreground text-sm">
                    British Columbia Institute of Technology
                  </p>
                  <p className="text-muted-foreground text-sm font-medium">
                    2016 – 2020
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl border-2 border-rose-500/30 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-card/50 text-rose-500">
                    <Award className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Certification</h3>
                </div>
                
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-foreground font-semibold text-lg leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-primary font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    <p className="text-muted-foreground text-sm font-medium">
                      {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border-2 border-primary/20 shadow-lg">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <p className="text-foreground font-semibold text-lg">
                6+ Years of Professional Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
