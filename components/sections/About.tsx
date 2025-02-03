"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import picture from "../assets/oumarDimnang.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative w-full h-[400px]">
          <Image
            src={picture}
            alt="Profile picture"
            className="rounded-lg object-cover"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Who am I?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I'm a passionate Full Stack Developer with 2 years of experience
            building applications. I specialize in creating beautiful,
            functional, and user-friendly applications using modern
            technologies. When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing my
            knowledge through technical writing.
          </p>
          <p className="text-lg text-muted-foreground">
            I believe in writing clean, maintainable code and following best
            practices to create scalable solutions that solve real-world
            problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
