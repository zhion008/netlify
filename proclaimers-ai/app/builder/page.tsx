'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  BookOpen,
  Mic,
  Users,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  Send,
  Loader2,
} from 'lucide-react';

export default function SermonBuilder() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [sermonData, setSermonData] = useState({
    scripture: '',
    theme: '',
    audience: '',
    style: '',
    tone: '',
  });
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const userModes = [
    {
      id: 'pastor',
      title: 'Pastor & Preacher',
      description: 'Rich, pulpit-ready sermons',
      icon: Mic,
    },
    {
      id: 'student',
      title: 'Seminary Student',
      description: 'Deep exegetical study',
      icon: GraduationCap,
    },
    {
      id: 'creative',
      title: 'Christian Creative',
      description: 'Media-ready content',
      icon: Sparkles,
    },
    {
      id: 'leader',
      title: 'Lay Leader',
      description: 'Accessible teaching',
      icon: Users,
    },
  ];

  const preachingStyles = [
    'Black Church Tradition',
    'Contemporary Expository',
    'Narrative',
    'Topical',
    'Verse-by-Verse',
    'Prophetic',
    'Pastoral',
    'Evangelistic',
  ];

  const tones = [
    'Celebratory',
    'Reflective',
    'Prophetic',
    'Pastoral',
    'Academic',
    'Conversational',
    'Bold & Direct',
    'Compassionate',
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);

    // Simulate API call (replace with actual AI API integration)
    setTimeout(() => {
      const mockContent = `
# ${sermonData.theme || 'Your Sermon Title'}

## Scripture Foundation
${sermonData.scripture || 'Selected Scripture'}

## Introduction
In the tradition of the great preachers who came before us—Gardner C. Taylor, Prathia Hall, and Howard Thurman—we gather to explore the depth and richness of God's word...

## Main Points

### 1. The Context of Liberation
Drawing from James Cone's theology, we understand that the Gospel is inherently liberating. This passage speaks to those who have been marginalized...

### 2. The Power of Community
Howard Thurman reminds us that the beloved community is not just an ideal, but a divine mandate. In this text, we see...

### 3. The Call to Action
Katie Cannon's womanist perspective challenges us to move beyond passive belief into active transformation...

## Illustrations
- Contemporary connection: [Cultural moment relevant to ${sermonData.audience || 'your audience'}]
- Historical example: The civil rights movement and its theological foundations
- Personal testimony: Space for your own story

## Conclusion
As we close, remember the words of Martin Luther King Jr.: "The arc of the moral universe is long, but it bends toward justice."

## Social Media Snippets
1. "God's word is not just for hearing—it's for doing. #PreachingWithPower"
2. "In the tradition of our ancestors, we proclaim truth with boldness. #ProclaimersAI"
3. "Theology without action is merely philosophy. Let's move! #SermonsWithImpact"
      `;

      setGeneratedContent(mockContent);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--muted)] hover:text-[var(--foreground)] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Sermon Builder</span>
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Craft powerful, theologically rich sermons with AI assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input Form */}
          <div className="space-y-6">
            {/* User Mode Selection */}
            {!selectedMode ? (
              <Card>
                <h2 className="text-2xl font-semibold mb-4">Choose Your Mode</h2>
                <div className="grid grid-cols-2 gap-4">
                  {userModes.map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setSelectedMode(mode.id)}
                        className="p-4 border-2 border-[var(--border)] rounded-2xl hover:border-[var(--accent)] transition-all duration-200 text-left"
                      >
                        <Icon className="w-6 h-6 text-[var(--accent)] mb-2" />
                        <h3 className="font-semibold text-sm mb-1">{mode.title}</h3>
                        <p className="text-xs text-[var(--muted)]">{mode.description}</p>
                      </button>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <>
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Mode: {userModes.find(m => m.id === selectedMode)?.title}</h2>
                    <button
                      onClick={() => setSelectedMode(null)}
                      className="text-sm text-[var(--accent)] hover:underline"
                    >
                      Change
                    </button>
                  </div>
                </Card>

                {/* Scripture Input */}
                <Card>
                  <label className="block mb-2 font-semibold">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Scripture Passage
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Romans 8:28-39"
                    value={sermonData.scripture}
                    onChange={(e) =>
                      setSermonData({ ...sermonData, scripture: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </Card>

                {/* Theme Input */}
                <Card>
                  <label className="block mb-2 font-semibold">Sermon Theme</label>
                  <input
                    type="text"
                    placeholder="e.g., God's Unshakeable Love"
                    value={sermonData.theme}
                    onChange={(e) =>
                      setSermonData({ ...sermonData, theme: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </Card>

                {/* Audience Input */}
                <Card>
                  <label className="block mb-2 font-semibold">Target Audience</label>
                  <input
                    type="text"
                    placeholder="e.g., Young adults facing uncertainty"
                    value={sermonData.audience}
                    onChange={(e) =>
                      setSermonData({ ...sermonData, audience: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </Card>

                {/* Style Selection */}
                <Card>
                  <label className="block mb-2 font-semibold">Preaching Style</label>
                  <select
                    value={sermonData.style}
                    onChange={(e) =>
                      setSermonData({ ...sermonData, style: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    <option value="">Select a style...</option>
                    {preachingStyles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </Card>

                {/* Tone Selection */}
                <Card>
                  <label className="block mb-2 font-semibold">Tone</label>
                  <select
                    value={sermonData.tone}
                    onChange={(e) =>
                      setSermonData({ ...sermonData, tone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    <option value="">Select a tone...</option>
                    {tones.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                </Card>

                {/* Generate Button */}
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleGenerate}
                  disabled={!sermonData.scripture || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Generate Sermon
                    </>
                  )}
                </Button>
              </>
            )}
          </div>

          {/* Right Column - Output */}
          <div>
            <Card className="sticky top-8 min-h-[600px]">
              {!generatedContent ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <Sparkles className="w-16 h-16 text-[var(--muted)] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Your Sermon Will Appear Here</h3>
                  <p className="text-[var(--muted)]">
                    Fill in the details on the left and click "Generate Sermon" to begin crafting
                    your message.
                  </p>
                </div>
              ) : (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Generated Sermon</h3>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        Export
                      </Button>
                    </div>
                  </div>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {generatedContent}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
