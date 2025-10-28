'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/Header';
import {
  Check,
  Sparkles,
  Crown,
  Zap,
  ArrowLeft,
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for lay leaders and occasional preachers',
      icon: Sparkles,
      monthly: 19,
      annual: 190,
      features: [
        '10 sermon outlines per month',
        'Basic scripture references',
        'Social media snippets',
        'Email support',
        'Access to core library',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For pastors and ministry leaders',
      icon: Crown,
      monthly: 49,
      annual: 490,
      features: [
        'Unlimited sermon development',
        'Advanced exegesis tools',
        'Cultural calendar access',
        'Hermeneutic customization',
        'API.Bible & Bolls.life integration',
        'Priority support',
        'All preaching styles',
        'Social media optimization',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Institution',
      description: 'For seminaries and large ministries',
      icon: Zap,
      monthly: 199,
      annual: 1990,
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom syllabus creation',
        'Mentorship & feedback tools',
        'White-label options',
        'Dedicated support',
        'API access',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const handleCheckout = async (planName: string, price: number) => {
    // This is where you'd integrate Stripe Checkout
    // For now, we'll just log the action
    console.log(`Initiating checkout for ${planName} at $${price}/${billingCycle}`);

    // Example Stripe integration (you'll need to set up the API route):
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ planName, price, billingCycle }),
    // });
    // const { url } = await response.json();
    // window.location.href = url;

    alert(`Checkout for ${planName} - $${price}/${billingCycle}\n\nStripe integration coming soon! Add your Stripe keys to enable payments.`);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-[var(--muted)] hover:text-[var(--foreground)] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="gradient-text">Ministry Plan</span>
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto mb-8">
              Start with a 14-day free trial. No credit card required.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-[var(--surface)] rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--muted)]'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  billingCycle === 'annual'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--muted)]'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual
                <span className="ml-2 text-xs text-[var(--success)]">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price = billingCycle === 'monthly' ? plan.monthly : plan.annual;
              const displayPrice = billingCycle === 'annual' ? Math.round(price / 12) : price;

              return (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular ? 'border-2 border-[var(--accent)] shadow-2xl' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-[var(--gradient-purple)] to-[var(--gradient-blue)] rounded-2xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-[var(--muted)]">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold">${displayPrice}</span>
                      <span className="text-[var(--muted)] ml-2">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-[var(--muted)] mt-2">
                        Billed ${price} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-[var(--success)] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--muted)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => handleCheckout(plan.name, price)}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-[var(--muted)]">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect
                  at the start of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-[var(--muted)]">
                  We accept all major credit cards, debit cards, and PayPal through our secure
                  Stripe payment processing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-[var(--muted)]">
                  Yes! All plans come with a 14-day free trial. No credit card required to start.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-[var(--muted)]">
                  Absolutely. You can cancel your subscription at any time from your account
                  settings. No questions asked.
                </p>
              </div>
            </div>
          </div>
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
