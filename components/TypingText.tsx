'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorStyle?: 'block' | 'bar';
}

export default function TypingText({
  text,
  speed = 28,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
  cursorStyle = 'block',
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length >= text.length) {
      handleComplete();
      return;
    }
    const t = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayedText, text, speed, started, handleComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className={cursorStyle === 'bar' ? 'cursor-bar' : 'cursor'} />
      )}
    </span>
  );
}
