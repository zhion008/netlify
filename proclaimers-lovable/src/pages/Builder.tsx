import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Header } from '../components/Header';

export default function Builder() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="gradient-text">Sermon Builder</span>
          </h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <h2 className="text-xl font-semibold mb-4">Scripture Passage</h2>
                <input
                  type="text"
                  placeholder="e.g., Romans 8:28-39"
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </Card>
              <Card>
                <h2 className="text-xl font-semibold mb-4">Sermon Theme</h2>
                <input
                  type="text"
                  placeholder="e.g., God's Unshakeable Love"
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </Card>
              <Card>
                <h2 className="text-xl font-semibold mb-4">Preaching Style</h2>
                <select className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                  <option>Black Church Tradition</option>
                  <option>Contemporary Expository</option>
                  <option>Narrative</option>
                  <option>Prophetic</option>
                </select>
              </Card>
              <Button size="lg" className="w-full">
                Generate Sermon
              </Button>
            </div>
            <Card className="min-h-[600px]">
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Your Sermon Will Appear Here</h3>
                <p className="text-[var(--muted)]">
                  Fill in the details and click "Generate Sermon" to begin crafting your message.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
