"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Oumar Dimnang</h1>
        <p className="text-xl text-muted-foreground">Full Stack Developer</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce" size={32} />
      </motion.div>
    </section>
  );
}
