"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Server, Settings } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Layout className="h-10 w-10 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Building beautiful, responsive user interfaces",
  },
  {
    category: "Backend",
    icon: <Server className="h-10 w-10 text-primary" />,
    skills: ["Node.js", "Express.js"],
    description: "Creating robust server-side applications",
  },
  {
    category: "Database",
    icon: <Database className="h-10 w-10 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
    description: "Managing and optimizing data storage",
  },
  {
    category: "DevOps",
    icon: <Settings className="h-10 w-10 text-primary" />,
    skills: ["Docker", "AWS", "CI/CD"],
    description: "Automating deployment and scaling",
  },
  {
    category: "Tools",
    icon: <Code2 className="h-10 w-10 text-primary" />,
    skills: ["Git", "VS Code", "Postman"],
    description: "Essential development tools",
  },
  {
    category: "Other",
    icon: <Globe className="h-10 w-10 text-primary" />,
    skills: ["REST APIs", "WebSockets", "Testing"],
    description: "Additional expertise and protocols",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build scalable, modern
            applications from front to back
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-card hover:bg-muted/50 p-8 rounded-xl border border-border/50 shadow-sm transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{tech.category}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
