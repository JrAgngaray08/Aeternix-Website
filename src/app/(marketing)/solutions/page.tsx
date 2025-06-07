
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, PlayCircle, BarChart, Lightbulb, ShieldCheck, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'The Aeternix Solution | Digital Ecosystems for Growth',
  description: 'Discover Aeternix\'s solutions: enhanced visibility & demand, converting content, scalable systems, evolving strategy, and reputation power for your brand.',
};

const aeternixSolutions = [
  {
    id: 'visibility-demand',
    title: "Visibility & Demand",
    icon: Zap,
    description: "We amplify your reach and attract high-intent audiences through a multi-channel approach.",
    features: [
        "Precision Google + Meta Ads campaigns targeting your ideal customers.",
        "Local SEO strategies to dominate Maps Pack and local search results.",
        "Scroll-stopping Social Media Marketing that builds community and drives engagement."
    ],
    cta: "Boost Your Visibility"
  },
  {
    id: 'content-converts',
    title: "Content That Converts",
    icon: PlayCircle,
    description: "Crafting compelling narratives and valuable content that turns prospects into loyal customers.",
    features: [
        "Engaging video walkthroughs, dynamic User-Generated Content (UGC) campaigns, and strategic influencer collaborations.",
        "Persuasive website copy, high-converting email sequences, insightful blog posts, and optimized landing pages."
    ],
    cta: "Elevate Your Content"
  },
  {
    id: 'systems-scale',
    title: "Systems That Scale",
    icon: BarChart, // Represents data and systems
    description: "Building robust digital infrastructure that supports and accelerates your growth.",
    features: [
        "Seamless CRM & sales funnel integration for efficient lead management and nurturing.",
        "AI-driven reporting dashboards providing actionable insights and clear performance metrics.",
        "Marketing automation to streamline workflows and ensure consistent communication."
    ],
    cta: "Scale with Systems"
  },
  {
    id: 'strategy-evolves',
    title: "Strategy That Evolves",
    icon: Lightbulb,
    description: "Developing agile, data-informed strategies that adapt to market changes and seize new opportunities.",
    features: [
        "Dynamic monthly sprints focusing on iterative improvements and measurable progress.",
        "Deep brand and audience alignment to ensure your marketing resonates powerfully.",
        "Scalable execution plans designed for long-term growth and market leadership."
    ],
    cta: "Evolve Your Strategy"
  },
  {
    id: 'reputation-power',
    title: "Reputation Power",
    icon: ShieldCheck,
    description: "Proactively building and protecting your brand’s online image to foster trust and credibility.",
    features: [
        "Targeted review generation campaigns to showcase positive customer experiences.",
        "Comprehensive social listening and sentiment tracking to understand public perception.",
        "Crisis management protocols and brand advocacy programs."
    ],
    cta: "Strengthen Your Reputation"
  }
];

export default function SolutionsPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <SectionTitle
          title="The Aeternix Solution"
          subtitle="We don’t do cookie-cutter. We build complete digital ecosystems designed to grow with you, ensuring every component works in harmony to achieve your business objectives."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {aeternixSolutions.map((solution, index) => (
            <Card 
              key={solution.id} 
              id={solution.id}
              className="bg-card hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-fade-in-up flex flex-col"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-3">
                  <solution.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{solution.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-2 text-center">
                <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/contact?solution=${solution.id}`}>{solution.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-xl text-muted-foreground mb-6">
                "Build. Automate. Scale. Repeat."
            </p>
            <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10">
              <Link href="/contact">Let's Engineer Your Growth</Link>
            </Button>
          </div>
      </div>
    </div>
  );
}
