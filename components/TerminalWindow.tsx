'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  showDots?: boolean;
  glowEffect?: boolean;
}

export default function TerminalWindow({
  title = 'terminal',
  children,
  className = '',
  showDots = true,
  glowEffect = false,
}: TerminalWindowProps) {
  return (
    <motion.div
      className={`terminal-window w-full ${glowEffect ? 'shadow-[0_0_30px_rgba(0,255,65,0.08)]' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Title bar */}
      <div className="terminal-titlebar">
        {showDots && (
          <div className="flex gap-2 mr-3">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
        )}
        <span
          className="text-terminal-muted text-xs tracking-widest flex-1"
          style={{ fontFamily: 'inherit' }}
        >
          {title}
        </span>
        <span className="text-terminal-muted text-xs opacity-40">━━━</span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  );
}
