'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, GitBranch, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  filename: string;
  description: string;
  longDescription: string;
  techs: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress';
  type: string;
}

const PROJECTS: Project[] = [
  {
    id: 'slidea',
    name: 'Slidea',
    filename: 'slidea/',
    description: 'AI-powered presentation generator',
    longDescription:
      'An intelligent platform that generates polished, professional presentations using AI. Users input a topic and the system creates structured slide decks with content, styling, and layout automatically.',
    techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'FastAPI'],
    features: [
      'AI-driven slide generation',
      'Multiple template themes',
      'Export to PDF/PPTX',
      'Real-time preview',
    ],
    githubUrl: 'https://github.com/lazizbeksheryigitov',
    liveUrl: undefined,
    status: 'completed',
    type: 'AI · Web App',
  },
  {
    id: 'smartedu',
    name: 'SmartEdu',
    filename: 'smartedu/',
    description: 'Education Management System',
    longDescription:
      'A comprehensive school management platform with role-based dashboards for admins, teachers, and students. Covers all aspects of school operations from attendance tracking to finance management.',
    techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn/UI'],
    features: [
      'Role-based dashboards',
      'Attendance tracking',
      'Finance & reports',
      'Real-time chat',
      'Calendar & task management',
      'File uploads',
    ],
    githubUrl: 'https://github.com/lazizbeksheryigitov',
    liveUrl: undefined,
    status: 'completed',
    type: 'SaaS · Dashboard',
  },
  {
    id: 'taomify',
    name: 'Taomify',
    filename: 'taomify/',
    description: 'Digital menu / restaurant platform',
    longDescription:
      'A modern digital menu system for restaurants. Customers can browse menus via QR code, view item details, and restaurants can manage their menus dynamically without reprinting physical menus.',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    features: [
      'QR code menu access',
      'Dynamic menu management',
      'Category filtering',
      'Mobile-first design',
      'Multi-language support',
    ],
    githubUrl: 'https://github.com/lazizbeksheryigitov',
    liveUrl: undefined,
    status: 'completed',
    type: 'Web App · Restaurant Tech',
  },
];

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="inline-block bg-terminal-surface2 border border-terminal-border text-terminal-cyan text-xs px-2 py-0.5 rounded font-mono">
      {tech}
    </span>
  );
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      className="border border-terminal-border rounded-lg overflow-hidden hover:border-terminal-green transition-colors duration-300 group"
      style={{ background: 'rgba(13,17,23,0.8)' }}
    >
      {/* File header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border"
        style={{ background: '#0f1b0f' }}>
        <Terminal size={12} className="text-terminal-green" />
        <span className="text-terminal-green text-xs font-bold">{project.filename}</span>
        <span className="ml-auto text-terminal-muted text-xs bg-terminal-surface border border-terminal-border rounded px-2 py-0.5">
          {project.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Name and description */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-terminal-text font-bold text-base group-hover:text-terminal-green transition-colors">
              {project.name}
            </h3>
            <span className={`text-xs px-2 py-0.5 rounded font-mono ${
              project.status === 'completed'
                ? 'text-terminal-green bg-terminal-surface border border-terminal-green'
                : 'text-terminal-amber bg-terminal-surface border border-terminal-amber'
            }`}>
              {project.status === 'completed' ? '✓ done' : '~ wip'}
            </span>
          </div>
          <p className="text-terminal-muted text-xs mt-1">// {project.description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-terminal-muted text-xs hover:text-terminal-green transition-colors"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? 'hide details' : 'show details'}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <p className="text-terminal-text text-xs leading-relaxed">
              {project.longDescription}
            </p>
            {project.features && (
              <div className="space-y-0.5">
                <div className="text-terminal-muted text-xs">Features:</div>
                {project.features.map((f) => (
                  <div key={f} className="text-xs text-terminal-text flex gap-1.5 pl-2">
                    <span className="text-terminal-green">→</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Links */}
        <div className="flex gap-2 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-terminal-muted hover:text-terminal-green border border-terminal-border hover:border-terminal-green px-3 py-1.5 rounded transition-all duration-200"
            >
              <GitBranch size={12} />
              GitHub
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-terminal-green border border-terminal-green px-3 py-1.5 rounded hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-terminal-muted border border-terminal-border px-3 py-1.5 rounded opacity-50 cursor-not-allowed">
              <ExternalLink size={12} />
              Demo N/A
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-6 font-mono"
        >
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="flex gap-2 mr-3">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="text-terminal-muted text-xs">bash — projects/</span>
            </div>
            <div className="px-5 py-4 space-y-1 text-sm">
              <div>
                <span className="text-terminal-green font-bold">$ </span>
                <span className="text-terminal-amber">ls -la projects/</span>
              </div>
              <div className="text-terminal-muted text-xs">
                total {PROJECTS.length} projects
              </div>
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-xs flex gap-3"
                >
                  <span className="text-terminal-cyan">drwxr-xr-x</span>
                  <span className="text-terminal-muted">lazizbek</span>
                  <span className="text-terminal-green">{p.filename}</span>
                  <span className="text-terminal-muted">// {p.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-1 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
