'use client';

import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  command: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'intro', label: '~/whoami', command: 'whoami' },
  { id: 'about', label: '~/about', command: 'about.txt' },
  { id: 'skills', label: '~/skills', command: 'skills/' },
  { id: 'projects', label: '~/projects', command: 'projects/' },
  { id: 'experience', label: '~/experience', command: 'experience.log' },
  { id: 'education', label: '~/education', command: 'education.txt' },
  { id: 'contact', label: '~/contact', command: 'contact.sh' },
];

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
      style={{ background: 'rgba(8,12,8,0.92)', borderBottom: '1px solid rgba(0,255,65,0.07)' }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1 overflow-x-auto scrollbar-hide">
        {/* Logo */}
        <button
          onClick={() => scrollTo('intro')}
          className="text-terminal-green font-bold text-sm mr-4 shrink-0 glow-green hover:opacity-80 transition-opacity"
        >
          LS@dev:~
        </button>

        <span className="text-terminal-border text-xs mr-2 shrink-0">|</span>

        {/* Nav links */}
        <div className="flex gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                px-3 py-1.5 text-xs rounded font-mono whitespace-nowrap transition-all duration-200
                ${activeSection === item.id
                  ? 'bg-terminal-green text-terminal-bg font-bold'
                  : 'text-terminal-muted hover:text-terminal-green hover:bg-terminal-surface'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Status indicator */}
        <div className="ml-auto shrink-0 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
          <span className="text-terminal-muted text-xs hidden sm:inline">ONLINE</span>
        </div>
      </div>
    </motion.nav>
  );
}
