import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
}

export function Card({ children, glass = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 border border-[var(--border)] transition-all duration-300',
        glass ? 'glass' : 'bg-white dark:bg-[var(--surface)]',
        'hover:shadow-xl hover:scale-[1.02]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
