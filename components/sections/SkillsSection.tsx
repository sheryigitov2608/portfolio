'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '../TerminalWindow';

interface Skill {
  name: string;
  category: string;
  level: 'expert' | 'proficient' | 'learning';
}

const SKILLS: Skill[] = [
  // Frontend - Core
  { name: 'HTML5', category: 'Frontend', level: 'expert' },
  { name: 'CSS3', category: 'Frontend', level: 'expert' },
  { name: 'JavaScript', category: 'Frontend', level: 'expert' },
  { name: 'TypeScript', category: 'Frontend', level: 'proficient' },
  { name: 'React', category: 'Frontend', level: 'expert' },
  { name: 'Next.js', category: 'Frontend', level: 'proficient' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'expert' },
  { name: 'Shadcn/UI', category: 'Frontend', level: 'proficient' },
  { name: 'Radix UI', category: 'Frontend', level: 'proficient' },
  { name: 'Framer Motion', category: 'Frontend', level: 'proficient' },
];

const TOOLS: Skill[] = [
  { name: 'Git', category: 'Tools', level: 'expert' },
  { name: 'GitHub', category: 'Tools', level: 'expert' },
  { name: 'VS Code', category: 'Tools', level: 'expert' },
  { name: 'Vite', category: 'Tools', level: 'proficient' },
  { name: 'npm / pnpm', category: 'Tools', level: 'proficient' },
  { name: 'Vercel', category: 'Tools', level: 'proficient' },
];

const LEARNING: Skill[] = [
  { name: 'Python', category: 'Learning', level: 'learning' },
  { name: 'FastAPI', category: 'Learning', level: 'learning' },
  { name: 'Flask', category: 'Learning', level: 'learning' },
  { name: 'React Native', category: 'Learning', level: 'learning' },
];

function getIcon(level: Skill['level']) {
  if (level === 'learning') return '~';
  return '✓';
}

function getColor(level: Skill['level']) {
  if (level === 'learning') return 'text-terminal-amber';
  if (level === 'expert') return 'text-terminal-green';
  return 'text-terminal-cyan';
}

function getLabelColor(level: Skill['level']) {
  if (level === 'learning') return 'text-terminal-amber';
  if (level === 'expert') return 'text-terminal-text';
  return 'text-terminal-text';
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
  startDelay: number;
  inView: boolean;
}

function SkillGroup({ title, skills, startDelay, inView }: SkillGroupProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: startDelay / 1000 }}
        className="text-terminal-muted text-xs mb-3 uppercase tracking-widest"
      >
        # {title}
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: (startDelay + i * 80) / 1000, duration: 0.3 }}
            className="flex items-center gap-2 text-sm py-0.5 group cursor-default"
          >
            <span className={`font-bold ${getColor(skill.level)} w-4 text-center`}>
              [{getIcon(skill.level)}]
            </span>
            <span className={`${getLabelColor(skill.level)} group-hover:text-terminal-green transition-colors`}>
              {skill.name}
            </span>
            {skill.level === 'expert' && (
              <span className="text-terminal-border text-xs ml-auto">●●●</span>
            )}
            {skill.level === 'proficient' && (
              <span className="text-terminal-border text-xs ml-auto">●●○</span>
            )}
            {skill.level === 'learning' && (
              <span className="text-terminal-border text-xs ml-auto">●○○</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="bash — ls skills/">
          <div className="space-y-6 text-sm font-mono">
            {/* Command */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green font-bold">$</span>
              <span className="text-terminal-amber">ls -la skills/</span>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4 text-xs text-terminal-muted border border-terminal-border rounded px-3 py-2"
            >
              <span><span className="text-terminal-green">[✓]</span> proficient/expert</span>
              <span><span className="text-terminal-amber">[~]</span> currently learning</span>
              <span className="text-terminal-muted">●●● expert · ●●○ proficient · ●○○ learning</span>
            </motion.div>

            {/* Skill groups */}
            <div className="space-y-8">
              <SkillGroup
                title="Frontend Stack"
                skills={SKILLS}
                startDelay={200}
                inView={inView}
              />
              <SkillGroup
                title="Tools & DevOps"
                skills={TOOLS}
                startDelay={1100}
                inView={inView}
              />
              <SkillGroup
                title="Currently Learning"
                skills={LEARNING}
                startDelay={1700}
                inView={inView}
              />
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
