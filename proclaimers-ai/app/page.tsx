'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/Header';
import {
  Sparkles,
  BookOpen,
  Users,
  Share2,
  Mic,
  Globe,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Sermon Development Mastery',
      description: 'Advanced workflow from exegesis to pulpit delivery with "Preach It Back" simulation.',
    },
    {
      icon: Globe,
      title: 'Cultural Fluency',
      description: 'Commentary on current events, justice issues, and culturally significant dates.',
    },
    {
      icon: Lightbulb,
      title: 'Hermeneutic Customization',
      description: 'Tailored content for Reformed, Liberation, Pentecostal, Womanist, and more.',
    },
    {
      icon: GraduationCap,
      title: 'Mentorship Tools',
      description: 'Syllabus creation, sermon rubrics, and apprentice feedback for educators.',
    },
    {
      icon: Share2,
      title: 'Social Media Optimization',
      description: 'Viral quotes, sermon snippets, and engagement boosters for digital ministry.',
    },
    {
      icon: Mic,
      title: 'Voice of the Ancestors',
      description: 'Draws from Gardner C. Taylor, James Cone, Howard Thurman, and more.',
    },
  ];

  const userModes = [
    {
      title: 'Pastors & Preachers',
      description: 'Rich, pulpit-ready sermons with strong narrative and prophetic power.',
      icon: Mic,
    },
    {
      title: 'Seminary Students',
      description: 'Deep exegesis, hermeneutical variety, and educational scaffolding.',
      icon: GraduationCap,
    },
    {
      title: 'Christian Creatives',
      description: 'Media-ready quotes, short-form content, and storytelling help.',
      icon: Sparkles,
    },
    {
      title: 'Lay Leaders',
      description: 'Accessible outlines, clear explanations, and simplified insights.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[var(--surface)] rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-sm text-[var(--muted)]">
              Powered by Advanced AI & Biblical Wisdom
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Preach with Power.</span>
            <br />
            <span className="text-[var(--foreground)]">Transform Your Ministry.</span>
          </h1>

          <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto mb-10">
            Proclaimers AI combines the theological richness of Black preaching excellence with
            cutting-edge technology to help you craft sermons that resonate, inspire, and transform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/pricing">Start Creating Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">12+</div>
              <div className="text-sm text-[var(--muted)]">Preaching Styles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">1000+</div>
              <div className="text-sm text-[var(--muted)]">Scripture References</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">50+</div>
              <div className="text-sm text-[var(--muted)]">Theologians Cited</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">∞</div>
              <div className="text-sm text-[var(--muted)]">Creative Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Proclaim Truth</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Comprehensive tools designed for theological depth, cultural relevance, and digital engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-[var(--gradient-purple)] to-[var(--gradient-blue)] rounded-2xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-[var(--muted)] text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Every Minister</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Whether you're a seasoned pastor or a seminary student, Proclaimers AI adapts to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {userModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <Card key={index} glass>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-[var(--gradient-teal)] to-[var(--gradient-green)] rounded-2xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{mode.title}</h3>
                  </div>
                  <p className="text-[var(--muted)]">{mode.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--gradient-purple)] via-[var(--gradient-blue)] to-[var(--gradient-teal)]">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Preaching?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of pastors, students, and ministry leaders using Proclaimers AI to craft
            powerful, culturally relevant sermons.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/pricing">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-[var(--accent)]" />
            <span className="text-lg font-semibold gradient-text">Proclaimers AI</span>
          </div>
          <p className="text-sm text-[var(--muted)] mb-4">
            Theological excellence meets technological innovation.
          </p>
          <p className="text-xs text-[var(--muted)]">
            © 2025 Proclaimers AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
