'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import TerminalWindow from '../TerminalWindow';
import { GitBranch, Send, Mail, Copy, Check } from 'lucide-react';

interface ContactLink {
  icon: typeof GitBranch;
  label: string;
  value: string;
  href: string;
  color: string;
  hoverColor: string;
  borderColor: string;
}

const CONTACTS: ContactLink[] = [
  {
    icon: GitBranch,
    label: 'github',
    value: 'github.com/lazizbeksheryigitov',
    href: 'https://github.com/lazizbeksheryigitov',
    color: 'text-terminal-text',
    hoverColor: 'hover:text-terminal-green',
    borderColor: 'hover:border-terminal-green',
  },
  {
    icon: Send,
    label: 'telegram',
    value: 't.me/lazizbeksheryigitov',
    href: 'https://t.me/lazizbeksheryigitov',
    color: 'text-terminal-blue',
    hoverColor: 'hover:text-terminal-cyan',
    borderColor: 'hover:border-terminal-cyan',
  },
  {
    icon: Mail,
    label: 'email',
    value: 'lazizbek@example.com',
    href: 'mailto:lazizbek@example.com',
    color: 'text-terminal-amber',
    hoverColor: 'hover:text-terminal-orange',
    borderColor: 'hover:border-terminal-amber',
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-terminal-muted hover:text-terminal-green transition-colors p-1"
      title="Copy to clipboard"
    >
      {copied ? <Check size={12} className="text-terminal-green" /> : <Copy size={12} />}
    </button>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-16 px-4 pb-32">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="contact.sh — executable">
          <div className="space-y-5 text-sm font-mono">
            {/* Command */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green font-bold">$</span>
              <span className="text-terminal-amber">./contact.sh</span>
            </motion.div>

            {/* Script output */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="space-y-1 text-xs text-terminal-muted"
            >
              <div>#!/bin/bash</div>
              <div>echo &quot;Initializing contact channels...&quot;</div>
              <div className="text-terminal-green">Initializing contact channels... OK</div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-terminal-border text-xs"
            >
              {'─'.repeat(50)}
            </motion.div>

            {/* Contact cards */}
            <div className="space-y-3">
              {CONTACTS.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.1, duration: 0.35 }}
                    className={`flex items-center gap-3 border border-terminal-border rounded p-3 transition-all duration-200 ${contact.borderColor} group`}
                    style={{ background: 'rgba(13,17,23,0.5)' }}
                  >
                    <Icon size={14} className={`${contact.color} shrink-0`} />
                    <span className={`text-terminal-muted w-16 shrink-0`}>{contact.label}:</span>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${contact.color} ${contact.hoverColor} transition-colors flex-1 text-xs truncate`}
                    >
                      {contact.value}
                    </a>
                    <CopyButton text={contact.value} />
                  </motion.div>
                );
              })}
            </div>

            {/* Note about placeholders */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-terminal-muted text-xs border-l-2 border-terminal-border pl-3"
            >
              // Update the GitHub, Telegram, and Email links above with your actual contact info
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-2 text-xs"
            >
              <div className="text-terminal-border">{'─'.repeat(50)}</div>
              <div className="text-terminal-text">
                <span className="text-terminal-green">→</span>{' '}
                Open to freelance projects, full-time positions, and collaborations.
              </div>
              <div className="text-terminal-text">
                <span className="text-terminal-green">→</span>{' '}
                Feel free to reach out — I respond promptly.
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-terminal-green font-bold">$</span>
                <span className="cursor" />
              </div>
            </motion.div>
          </div>
        </TerminalWindow>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-terminal-muted text-xs space-y-1"
        >
          <div className="text-terminal-border">{'━'.repeat(40)}</div>
          <div>
            Built with <span className="text-terminal-green">Next.js</span> +{' '}
            <span className="text-terminal-cyan">TypeScript</span> +{' '}
            <span className="text-terminal-purple">Framer Motion</span>
          </div>
          <div>
            <span className="text-terminal-green">Lazizbek Sheryigitov</span> © 2024
          </div>
          <div className="text-terminal-border">{'━'.repeat(40)}</div>
        </motion.div>
      </div>
    </section>
  );
}
