"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="mailto:oumar.dimnang@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/oumar-dimnang-05243325b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/oumarDimnang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
