'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Menu, X, Sparkles } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-[var(--border)]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-[var(--accent)]" />
            <span className="text-xl font-semibold gradient-text">Proclaimers AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/builder"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Sermon Builder
            </Link>
            <Link
              href="#features"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Pricing
            </Link>
            <Button size="sm" asChild>
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/builder"
              className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sermon Builder
            </Link>
            <Link
              href="#features"
              className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button size="sm" className="w-full" asChild>
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
