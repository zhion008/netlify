import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Header } from '../components/Header';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Ministry Plan</span>
          </h1>
          <p className="text-xl text-[var(--muted)] mb-12">
            Start with a 14-day free trial.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-5xl font-bold mb-4">$19<span className="text-base text-[var(--muted)]">/mo</span></div>
              <Button className="w-full mb-6">Start Free Trial</Button>
              <ul className="space-y-3 text-left">
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>10 sermons/month</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Basic features</li>
              </ul>
            </Card>
            <Card className="border-2 border-[var(--accent)]">
              <div className="bg-[var(--accent)] text-white px-3 py-1 rounded-full text-sm inline-block mb-4">Popular</div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-5xl font-bold mb-4">$49<span className="text-base text-[var(--muted)]">/mo</span></div>
              <Button className="w-full mb-6">Get Started</Button>
              <ul className="space-y-3 text-left">
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Unlimited sermons</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>All features</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Priority support</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold mb-4">Institution</h3>
              <div className="text-5xl font-bold mb-4">$199<span className="text-base text-[var(--muted)]">/mo</span></div>
              <Button className="w-full mb-6">Contact Sales</Button>
              <ul className="space-y-3 text-left">
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Everything in Pro</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Unlimited users</li>
                <li className="flex"><Check className="w-5 h-5 text-[var(--success)] mr-2"/>Custom features</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
