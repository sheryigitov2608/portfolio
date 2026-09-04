'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '../TerminalWindow';

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const institutions = [
    {
      name: '[Your University / Institution Name]',
      degree: '[Your Degree / Program Name]',
      period: '[Start Year] — [End Year / Present]',
      focus: 'Computer Science / Information Technology',
      status: 'current',
      notes: [
        'Relevant coursework: Algorithms, Data Structures, Web Development',
        'Active member of campus tech community',
      ],
    },
  ];

  const selfLearning = [
    { platform: 'Udemy', topic: 'React & Next.js — Advanced Patterns', year: '2023' },
    { platform: 'freeCodeCamp', topic: 'Responsive Web Design Certification', year: '2022' },
    { platform: 'Scrimba', topic: 'Frontend Developer Career Path', year: '2023' },
    { platform: 'JavaScript.info', topic: 'Modern JavaScript (ES6+)', year: '2023' },
    { platform: 'TypeScript Docs', topic: 'TypeScript Deep Dive', year: '2024' },
  ];

  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="education.txt — read-only">
          <div className="space-y-6 text-sm font-mono">
            {/* Command */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green font-bold">$</span>
              <span className="text-terminal-amber">cat education.txt</span>
            </motion.div>

            {/* Formal education */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="text-terminal-muted text-xs uppercase tracking-widest"
              >
                # Formal Education
              </motion.div>

              {institutions.map((inst, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border border-terminal-border rounded p-4 space-y-2 hover:border-terminal-green transition-colors duration-300"
                  style={{ background: 'rgba(13,17,23,0.5)' }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-terminal-cyan font-bold">{inst.name}</span>
                    {inst.status === 'current' && (
                      <span className="text-xs text-terminal-green border border-terminal-green px-2 py-0.5 rounded">
                        current
                      </span>
                    )}
                  </div>
                  <div className="text-terminal-text text-xs">{inst.degree}</div>
                  <div className="text-terminal-muted text-xs">{inst.period}</div>
                  <div className="text-terminal-purple text-xs">focus: {inst.focus}</div>
                  <ul className="space-y-0.5 mt-2">
                    {inst.notes.map((note, j) => (
                      <li key={j} className="text-xs text-terminal-text flex gap-2">
                        <span className="text-terminal-green shrink-0">→</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-terminal-muted text-xs italic"
              >
                // Note: Update the placeholder above with your actual institution details
              </motion.p>
            </div>

            {/* Self-learning */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-terminal-muted text-xs uppercase tracking-widest"
              >
                # Self-Learning & Online Courses
              </motion.div>

              {selfLearning.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.07 }}
                  className="flex flex-wrap items-center gap-3 text-xs"
                >
                  <span className="text-terminal-green">[✓]</span>
                  <span className="text-terminal-cyan w-28 shrink-0">{item.platform}</span>
                  <span className="text-terminal-text flex-1">{item.topic}</span>
                  <span className="text-terminal-muted">{item.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
