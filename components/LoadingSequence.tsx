'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: 'BIOS v2.4.1 — System initializing...', delay: 0, color: 'text-terminal-muted' },
  { text: 'Memory check... OK [4096MB]', delay: 400, color: 'text-terminal-muted' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 700, color: 'text-terminal-border' },
  { text: '> Initializing portfolio runtime...', delay: 1000, color: 'text-terminal-green' },
  { text: '> Loading developer profile... [lazizbek.sheryigitov]', delay: 1500, color: 'text-terminal-green' },
  { text: '> Parsing skills manifest...', delay: 2100, color: 'text-terminal-green' },
  { text: '  ✓ Frontend stack loaded', delay: 2500, color: 'text-terminal-cyan' },
  { text: '  ✓ Project data synced', delay: 2900, color: 'text-terminal-cyan' },
  { text: '  ✓ Contact nodes active', delay: 3200, color: 'text-terminal-cyan' },
  { text: '> Compiling interface...', delay: 3600, color: 'text-terminal-green' },
  { text: '  [████████████████████████] 100%', delay: 4200, color: 'text-terminal-amber' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 4700, color: 'text-terminal-border' },
  { text: '  system.status    : ONLINE', delay: 5000, color: 'text-terminal-purple' },
  { text: '  developer.mode   : ACTIVE', delay: 5200, color: 'text-terminal-purple' },
  { text: '  location         : Uzbekistan', delay: 5400, color: 'text-terminal-purple' },
  { text: '  stack            : FRONTEND', delay: 5600, color: 'text-terminal-purple' },
  { text: '  availability     : OPEN_TO_WORK', delay: 5800, color: 'text-terminal-green' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 6100, color: 'text-terminal-border' },
  { text: '  ACCESS GRANTED. Welcome.', delay: 6400, color: 'text-terminal-green glow-green' },
];

const COMPLETE_DELAY = 7200;

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
      timers.push(t);
    });

    const finishTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, COMPLETE_DELAY);
    timers.push(finishTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-50 flex items-center justify-center bg-terminal"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-full max-w-2xl px-6">
            {/* Top decoration */}
            <div className="mb-6 text-center">
              <div className="inline-block border border-terminal-green px-6 py-2 text-terminal-green text-sm tracking-[0.3em] font-bold glow-green">
                LS.PORTFOLIO
              </div>
            </div>

            {/* Boot log */}
            <div
              className="bg-terminal-surface border border-terminal-border rounded-lg p-5 font-mono text-xs leading-loose overflow-hidden"
              style={{ minHeight: '320px' }}
            >
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 4 }}
                  animate={
                    visibleLines.includes(i)
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 4 }
                  }
                  transition={{ duration: 0.2 }}
                  className={line.color}
                >
                  {line.text}
                </motion.div>
              ))}
              {visibleLines.length < BOOT_LINES.length && (
                <span className="cursor" />
              )}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
