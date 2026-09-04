'use client';

import { motion } from 'framer-motion';
import TerminalWindow from '../TerminalWindow';
import TypingText from '../TypingText';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function IntroSection() {
  return (
    <section id="intro" className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <TerminalWindow
          title="lazizbek@dev: ~"
          glowEffect
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Command */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm">
              <span className="text-terminal-green font-bold">$</span>
              <TypingText
                text="whoami"
                speed={80}
                delay={100}
                className="text-terminal-amber"
                showCursor={false}
              />
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="pt-2">
              <div
                className="text-terminal-green font-bold leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
              >
                Lazizbek
              </div>
              <div
                className="text-terminal-green font-bold leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
              >
                Sheryigitov
              </div>
            </motion.div>

            {/* Role */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="text-terminal-muted text-sm">//</span>
              <span className="text-terminal-cyan font-medium text-lg tracking-wide">
                Frontend Developer
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div variants={item}>
              <span className="text-terminal-muted text-xs">
                {'─'.repeat(48)}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.div variants={item} className="text-terminal-text text-sm leading-relaxed max-w-xl space-y-1">
              <div>
                <span className="text-terminal-purple">const</span>{' '}
                <span className="text-terminal-blue">developer</span>{' '}
                <span className="text-terminal-text">=</span>{' '}
                <span className="text-terminal-orange">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-cyan">focus</span>
                <span className="text-terminal-text">:</span>{' '}
                <span className="text-terminal-amber">&quot;Modern web interfaces&quot;</span>
                <span className="text-terminal-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-cyan">passion</span>
                <span className="text-terminal-text">:</span>{' '}
                <span className="text-terminal-amber">&quot;Clean, fast, accessible UX&quot;</span>
                <span className="text-terminal-text">,</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-cyan">status</span>
                <span className="text-terminal-text">:</span>{' '}
                <span className="text-terminal-green">&quot;Open to work&quot;</span>
                <span className="text-terminal-text">,</span>
              </div>
              <div>
                <span className="text-terminal-orange">{'}'}</span>
                <span className="text-terminal-text">;</span>
              </div>
            </motion.div>

            {/* Status badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'system.status', value: 'ONLINE', color: 'text-terminal-green' },
                { label: 'location', value: 'Uzbekistan', color: 'text-terminal-cyan' },
                { label: 'availability', value: 'OPEN_TO_WORK', color: 'text-terminal-amber' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1 bg-terminal-surface2 border border-terminal-border rounded px-3 py-1 text-xs"
                >
                  <span className="text-terminal-muted">{badge.label}:</span>
                  <span className={`font-bold ${badge.color}`}>{badge.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Prompt */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm pt-2">
              <span className="text-terminal-green font-bold">$</span>
              <span className="cursor" />
            </motion.div>
          </motion.div>
        </TerminalWindow>

        {/* Scroll hint */}
        <motion.div
          className="text-center mt-8 text-terminal-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="animate-bounce inline-block">↓</span>
          <span className="ml-2">scroll to explore</span>
          <span className="ml-2 animate-bounce inline-block">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
