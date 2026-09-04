'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalLineProps {
  prompt?: string;
  promptColor?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
  indent?: number;
  noPrompt?: boolean;
}

export default function TerminalLine({
  prompt = '$',
  promptColor = 'text-terminal-green',
  children,
  delay = 0,
  className = '',
  indent = 0,
  noPrompt = false,
}: TerminalLineProps) {
  return (
    <motion.div
      className={`terminal-line flex items-start gap-2 text-sm leading-relaxed ${className}`}
      style={{ paddingLeft: indent ? `${indent * 1.5}rem` : undefined }}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.25, ease: 'easeOut' }}
    >
      {!noPrompt && (
        <span className={`${promptColor} select-none shrink-0 font-bold`}>
          {prompt}
        </span>
      )}
      <span className="text-terminal-text break-all">{children}</span>
    </motion.div>
  );
}
