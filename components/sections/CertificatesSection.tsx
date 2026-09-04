'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '../TerminalWindow';
import { Award } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  id?: string;
  verifyUrl?: string;
  placeholder?: boolean;
}

const CERTIFICATES: Certificate[] = [
  {
    name: '[Certificate Name]',
    issuer: '[Issuing Organization / Platform]',
    date: '[Month Year]',
    id: '[Credential ID]',
    verifyUrl: undefined,
    placeholder: true,
  },
  {
    name: '[Certificate Name]',
    issuer: '[Issuing Organization / Platform]',
    date: '[Month Year]',
    id: '[Credential ID]',
    verifyUrl: undefined,
    placeholder: true,
  },
  {
    name: '[Certificate Name]',
    issuer: '[Issuing Organization / Platform]',
    date: '[Month Year]',
    id: '[Credential ID]',
    verifyUrl: undefined,
    placeholder: true,
  },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="py-16 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="bash — find certificates/">
          <div className="space-y-4 text-sm font-mono">
            {/* Command */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2"
            >
              <span className="text-terminal-green font-bold">$</span>
              <span className="text-terminal-amber">find certificates/ -name &quot;*.cert&quot; -type f</span>
            </motion.div>

            {/* Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-terminal-muted text-xs border border-terminal-border rounded px-3 py-2"
            >
              // Replace the placeholders below with your actual certificates
            </motion.div>

            {/* Certificate files */}
            <div className="space-y-3">
              {CERTIFICATES.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={`border rounded p-4 space-y-2 transition-all duration-300 ${
                    cert.placeholder
                      ? 'border-dashed border-terminal-border opacity-60 hover:opacity-80'
                      : 'border-terminal-border hover:border-terminal-green'
                  }`}
                  style={{ background: 'rgba(13,17,23,0.5)' }}
                >
                  <div className="flex items-start gap-3">
                    <Award size={14} className="text-terminal-amber mt-0.5 shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className={`font-bold text-sm ${cert.placeholder ? 'text-terminal-muted' : 'text-terminal-cyan'}`}>
                        {cert.name}
                      </div>
                      <div className="text-xs flex flex-wrap gap-3">
                        <span className="text-terminal-text">issuer: <span className="text-terminal-purple">{cert.issuer}</span></span>
                        <span className="text-terminal-text">date: <span className="text-terminal-muted">{cert.date}</span></span>
                        {cert.id && (
                          <span className="text-terminal-text">id: <span className="text-terminal-muted">{cert.id}</span></span>
                        )}
                      </div>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-terminal-green hover:underline mt-1"
                        >
                          → verify credential
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-terminal-muted text-xs"
            >
              {CERTIFICATES.length} certificate(s) found
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
