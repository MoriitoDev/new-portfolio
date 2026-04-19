'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  autostart?: boolean;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?';

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className, autostart = false }) => {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const iterationRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    if (isScramblingRef.current) return;
    
    isScramblingRef.current = true;
    iterationRef.current = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterationRef.current += 1 / 3;

      if (iterationRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    }, 30);
  }, [text]);

  useEffect(() => {
    if (autostart) {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autostart, scramble]);

  return (
    <span 
      onMouseOver={scramble} 
      className={className}
      style={{ display: 'inline-block', cursor: 'default' }}
    >
      {displayText}
    </span>
  );
};
