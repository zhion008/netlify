import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] focus:ring-[var(--accent)]',
    secondary: 'bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--border)] focus:ring-[var(--accent)]',
    outline: 'border-2 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)] focus:ring-[var(--accent)]',
    ghost: 'text-[var(--foreground)] hover:bg-[var(--surface)] focus:ring-[var(--accent)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, (children.props as any).className),
    } as any);
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
