'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '../TerminalWindow';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const lines = [
    { text: '$ cat about.txt', color: 'text-terminal-amber', isCommand: true },
    { text: '' },
    { text: '╔═══════════════════════════════════════════╗', color: 'text-terminal-border' },
    { text: '║           DEVELOPER PROFILE               ║', color: 'text-terminal-border' },
    { text: '╚═══════════════════════════════════════════╝', color: 'text-terminal-border' },
    { text: '' },
    {
      text: "Hello! I'm Lazizbek — a Frontend Developer from Uzbekistan",
      color: 'text-terminal-text',
    },
    {
      text: "focused on building modern, responsive, and user-friendly",
      color: 'text-terminal-text',
    },
    {
      text: "web applications.",
      color: 'text-terminal-text',
    },
    { text: '' },
    {
      text: "I specialize in the React ecosystem: React, Next.js, TypeScript,",
      color: 'text-terminal-text',
    },
    {
      text: "Tailwind CSS, and component libraries like Shadcn/UI and Radix UI.",
      color: 'text-terminal-text',
    },
    { text: '' },
    {
      text: "I care deeply about:",
      color: 'text-terminal-cyan',
    },
    {
      text: "  → Clean, maintainable code architecture",
      color: 'text-terminal-text',
    },
    {
      text: "  → Performance-first user experiences",
      color: 'text-terminal-text',
    },
    {
      text: "  → Accessible and inclusive design",
      color: 'text-terminal-text',
    },
    {
      text: "  → Pixel-perfect implementation of designs",
      color: 'text-terminal-text',
    },
    { text: '' },
    {
      text: "Currently expanding into backend with Python, FastAPI, and Flask,",
      color: 'text-terminal-purple',
    },
    {
      text: "and mobile development with React Native.",
      color: 'text-terminal-purple',
    },
    { text: '' },
    {
      text: '// EOF about.txt',
      color: 'text-terminal-muted',
    },
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="about.txt — read-only">
          <div className="space-y-0.5 text-sm font-mono">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className={`leading-relaxed ${line.color || 'text-terminal-text'}`}
              >
                {line.isCommand ? (
                  <span>
                    <span className="text-terminal-green font-bold">$ </span>
                    <span className="text-terminal-amber">{line.text.replace('$ ', '')}</span>
                  </span>
                ) : (
                  line.text || '\u00A0'
                )}
              </motion.div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
