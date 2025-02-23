"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "../assets/image-gen.png";
import image2 from "../assets/hellothere.png";
import image3 from "../assets/helloworld.png";
import image4 from "../assets/snakegame.png";
import image5 from "../assets/todo.png";
import image6 from "../assets/hikmahai.jpeg";
import image7 from "../assets/link.gif";

const projects = [
  {
    title: "ImageAI",
    description: "An AI-powered image generation tool using DALL-E API.",
    image: image1,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI"],
    githubUrl: "https://github.com/oumarDimnang/image-aigenerator-project",
  },
  {
    title: "LINK",
    description:
      "An AI-Driven Threat Intelligence platform that predicts, detects, and responds towards Zero-Day Attacks. (CyberGuards Hackathon)",
    image: image7,
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Python",
      "Pandas",
      "NumPy",
    ],
    githubUrl: "https://github.com/oumarDimnang/link-landingpage-project",
    liveUrl: "https://link-landingpage-project.vercel.app/",
  },
  {
    title: "Hellothere",
    description:
      "A chat application enabling real-time messaging, media sharing, and seamless communication.",
    image: image2,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/oumarDimnang/hellothere-project",
    liveUrl: "https://hellothere-ahfq.onrender.com/",
  },
  {
    title: "Helloworld",
    description:
      "A social media platform enabling seamless content sharing, real-time interactions, and personalized engagement.",
    image: image3,
    technologies: ["Next.js", "TypeScript", "Express.js", "Clerk"],
    githubUrl: "https://github.com/oumarDimnang/helloworld-project",
    liveUrl: "https://helloworld-project.vercel.app/",
  },
  {
    title: "HikmahAI",
    description:
      "A website that raises awareness about responsibility of using AI (AUBH GenAI Hackathon).",
    image: image6,
    technologies: ["React", "DaisyUI", "Remini"],
    githubUrl: "https://github.com/oumarDimnang/HikmahAI-project",
    liveUrl: "https://hikmah-ai-project.vercel.app/",
  },
  {
    title: "Snake Game",
    description:
      "A classic snake game with smooth controls, dynamic gameplay, and increasing challenges as you grow.",
    image: image4,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/oumarDimnang/snake-game",
    liveUrl: "https://snake-game-phi-lime.vercel.app/",
  },
  {
    title: "To Do App",
    description:
      "A simple and efficient To-Do app for managing tasks and staying organized.",
    image: image5,
    technologies: ["React", "Tailwindcss", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/oumarDimnang/todo-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work // first and last project live demo disabled
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-border transition-colors duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
