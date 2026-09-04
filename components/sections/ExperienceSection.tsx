'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '../TerminalWindow';
import { Code2, Briefcase, Wrench } from 'lucide-react';

interface ExperienceEntry {
  type: 'project' | 'freelance' | 'practice';
  title: string;
  period: string;
  description: string[];
  icon: typeof Code2;
  iconColor: string;
}

const ENTRIES: ExperienceEntry[] = [
  {
    type: 'project',
    title: 'Slidea — AI Presentation Generator',
    period: '2024 — Present',
    description: [
      'Architected and built a full-stack AI-powered presentation generator',
      'Integrated FastAPI backend with React/Next.js frontend',
      'Designed component system using Tailwind CSS and TypeScript',
      'Implemented real-time slide preview and export functionality',
    ],
    icon: Code2,
    iconColor: 'text-terminal-green',
  },
  {
    type: 'project',
    title: 'SmartEdu — Education Management System',
    period: '2024',
    description: [
      'Built comprehensive school management SaaS platform',
      'Implemented role-based access control for admins, teachers, and students',
      'Developed dashboards for attendance, finance, grades, and reporting',
      'Integrated real-time chat, calendar, and file management modules',
    ],
    icon: Briefcase,
    iconColor: 'text-terminal-cyan',
  },
  {
    type: 'project',
    title: 'Taomify — Digital Restaurant Menu',
    period: '2024',
    description: [
      'Designed and built QR-based digital menu platform for restaurants',
      'Created admin dashboard for dynamic menu and category management',
      'Optimized for mobile-first usage with fast load times',
      'Implemented multi-language support for broader accessibility',
    ],
    icon: Wrench,
    iconColor: 'text-terminal-purple',
  },
  {
    type: 'freelance',
    title: 'Freelance Frontend Projects',
    period: '2023 — Present',
    description: [
      'Delivered custom landing pages and web apps for various clients',
      'Translated Figma/design mockups into pixel-perfect React components',
      'Maintained clean, documented code for handoff and future maintenance',
      'Collaborated with designers and backend developers remotely',
    ],
    icon: Code2,
    iconColor: 'text-terminal-amber',
  },
  {
    type: 'practice',
    title: 'Independent Learning & Development',
    period: '2022 — Present',
    description: [
      'Built 10+ portfolio projects across React, Next.js, and TypeScript',
      'Actively expanding backend knowledge: Python, FastAPI, Flask',
      'Exploring React Native for cross-platform mobile development',
      'Regularly practicing through open-source contributions and experiments',
    ],
    icon: Code2,
    iconColor: 'text-terminal-blue',
  },
];

function typeLabel(type: ExperienceEntry['type']) {
  const labels = {
    project: '[ project ]',
    freelance: '[ freelance ]',
    practice: '[ practice ]',
  };
  return labels[type];
}

function typeColor(type: ExperienceEntry['type']) {
  const colors = {
    project: 'text-terminal-green',
    freelance: 'text-terminal-amber',
    practice: 'text-terminal-blue',
  };
  return colors[type];
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="experience.log — tail -f">
          <div className="space-y-1 text-sm font-mono">
            {/* Command */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-terminal-green font-bold">$</span>
              <span className="text-terminal-amber">cat experience.log</span>
            </motion.div>

            {/* Entries */}
            <div className="space-y-6">
              {ENTRIES.map((entry, i) => {
                const Icon = entry.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.35 }}
                    className="relative pl-6 border-l border-terminal-border hover:border-terminal-green transition-colors duration-300"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-terminal-bg border-2 ${
                      i === 0 ? 'border-terminal-green' : 'border-terminal-border'
                    }`} />

                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <Icon size={14} className={entry.iconColor} />
                      <span className="text-terminal-text font-bold text-sm flex-1">
                        {entry.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className={`text-xs ${typeColor(entry.type)}`}>
                        {typeLabel(entry.type)}
                      </span>
                      <span className="text-terminal-muted text-xs">{entry.period}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-0.5">
                      {entry.description.map((desc, j) => (
                        <li key={j} className="text-xs text-terminal-text flex gap-2">
                          <span className="text-terminal-green shrink-0">→</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
