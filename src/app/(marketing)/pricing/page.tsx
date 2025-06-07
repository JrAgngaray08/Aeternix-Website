
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { PricingTier } from '@/types';
import PricingTiersSection from '@/components/shared/PricingTiersSection';

export const metadata: Metadata = {
  title: 'Pricing Plans | Aeternix Digital Domination',
  description: 'Explore Aeternix\'s transparent pricing plans for digital marketing services. Find the right package to build your digital empire.',
};

const pricingTiers: PricingTier[] = [
  {
    id: 'starter-spark',
    name: 'Starter Spark',
    price: '$2499',
    frequency: '/month',
    description: '',
    features: [
      '8 Reels/Month',
      '8 Custom Graphics/Month',
      'AI Customer Support Chatbot',
      'Social Media Management',
      'Meta Ads Management',
      'Monthly Reports + Small Dedicated Team',
      'Minimal Revisions Included',
    ],
    cta: 'Choose Starter Spark',
    popular: false,
  },
  {
    id: 'best-value',
    name: 'Best Value',
    price: '$3990',
    frequency: '/month',
    description: '',
    features: [
      '15 Reels & TikTok/month',
      '15 Custom Graphics/month',
      'AI Customer Support Chatbot',
      'Meta & TikTok Ads Management',
      'Social Media Management',
      'Email Automation',
      'Bi-Weekly Reports + Strategist Support',
      'Limited Revisions Included',
    ],
    cta: 'Choose Best Value',
    popular: true,
  },
  {
    id: 'empire-builder',
    name: 'Empire Builder',
    price: '$3499',
    frequency: '/month',
    description: '',
    specialOffer: {
        details: [
            'Limited to 5 Slots'
        ]
    },
    features: [
      'Unlimited Revisions',
      '20 Premium Reels & TikTok',
      'Unlimited Graphics & Branding',
      'High-Converting Landing Page',
      'AI Chatbot for Sales & Support',
      'Ads Management (Google, Meta, TikTok)',
      'High level SMM',
      'SEO & Blog Creation',
      'Email & SMS Automation',
      'Dedicated Growth Strategist + Weekly Reports',
    ],
    cta: 'Discuss Empire Plan',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <SectionTitle
          title="Pricing That Powers Growth"
          subtitle="Transparent, flexible plans designed to help you conquer the digital chaos and dominate your market. No hidden fees, just pure value."
          centered
        />

        <PricingTiersSection pricingTiers={pricingTiers} />
        
        <div className="mt-16 text-center p-8 bg-muted/30 rounded-lg animate-fade-in-up" style={{animationDelay: "0.3s"}}>
          <h3 className="text-2xl font-bold font-headline text-primary mb-4">Need Something More Specific?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Every digital empire is unique. If our standard plans don't perfectly fit your vision, let's talk. We specialize in crafting custom solutions tailored to your exact challenges and ambitions.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="text-primary border-primary hover:bg-primary/10 hover:shadow-accent-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="https://cal.com/aeternix/30-minutes-intro-call" target="_blank" rel="noopener noreferrer">Request a Custom Quote</Link>
          </Button>
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-xl text-muted-foreground mb-6">
                "This isn’t another strategy doc. It’s your growth engine."
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Let's Build Your Empire</Link>
            </Button>
          </div>
      </div>
    </div>
  );
}

    