
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Briefcase, FileWarning, BarChart, AlertTriangle, Zap, ShieldCheck, HelpCircle, Users, Target, UsersRound } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Problems We Solve | Aeternix Digital Domination',
  description: 'Aeternix tackles strategic confusion, resource burnout, content chaos, metric ambiguity, outdated marketing, broken tech, and reputation gaps for businesses.',
};

const problems = [
  { 
    id: 'strategic-confusion',
    title: 'Strategic Confusion', 
    description: 'No roadmap. Random tactics. Shaky targeting. You\'re throwing spaghetti at the wall, hoping something sticks, but sustainable growth feels miles away.', 
    icon: Brain,
    details: [
      'Lack of a clear, actionable digital marketing strategy aligned with business goals.',
      'Difficulty in accurately measuring ROI and attributing success to specific campaigns.',
      'Indecision on optimal content types, platforms, and distribution channels for your audience.',
      'A superficial understanding of the ideal buyer persona and their journey.',
      'Analysis paralysis from overwhelming data and metrics without clear insights.',
      'Constantly chasing fleeting trends or falling into common digital marketing pitfalls.'
    ]
  },
  { 
    id: 'burned-out-resources',
    title: 'Burned-Out Resources', 
    description: 'You’re stretched thin. No time. No bandwidth. Your team is juggling too much, and marketing excellence suffers.', 
    icon: Briefcase,
    details: [
      'High costs associated with producing consistent, high-quality content.',
      'Limited financial resources or marketing budgets restricting impactful campaigns.',
      'Lack of sufficient dedicated time to strategize, implement, and manage marketing efforts effectively.',
      'Insufficient internal personnel with specialized digital marketing expertise.',
      'Difficulty allocating the extra effort required for breakthrough campaigns and innovation.'
    ]
  },
  { 
    id: 'content-chaos',
    title: 'Content Chaos', 
    description: 'You’re winging it with content. It shows. Inconsistent messaging, low engagement, and a brand voice that doesn\'t connect.', 
    icon: FileWarning,
    details: [
      'Struggling to consistently generate fresh, relevant, and engaging content ideas.',
      'Producing an insufficient volume of high-quality content to maintain visibility and audience interest.',
      'Uncertainty if current content is effective, drives desired actions, or resonates with the target audience.',
      'Overwhelmed by balancing content creation and distribution across multiple platforms.',
      'Falling behind on evolving content trends like short-form video, interactive content, or AI-assisted creation.'
    ]
  },
  { 
    id: 'no-insightful-metrics',
    title: 'No Insightful Metrics', 
    description: 'You don’t know what’s working. Just vibes. Data exists, but it’s not translating into actionable intelligence.', 
    icon: BarChart,
    details: [
      'Minimal or delayed immediate returns from marketing efforts leading to impatience and questioning value.',
      'Challenges with data aggregation, processing, and movement from various sources.',
      'Inability to gain a single, unified customer view across all digital touchpoints.',
      'Technical difficulties in tracking conversions, attributing leads, and understanding the full customer journey accurately.',
      'Struggling to measure specific campaign profitability and clearly demonstrate marketing ROI.'
    ]
  },
  { 
    id: 'outdated-marketing',
    title: 'Outdated Marketing', 
    description: 'Your brand feels… meh. No innovation. No story. Competitors are adapting faster, and you\'re losing ground.', 
    icon: AlertTriangle,
    details: [
      'Clinging to outdated marketing thinking, tactics, and practices that are no longer effective.',
      'Internal resistance to change and adopting new digital marketing methodologies.',
      'Not being fully immersed or active in relevant social media landscapes where your audience congregates.',
      'Limited sharing of market wisdom, customer insights, and learnings within the organization.',
      'Neglecting the growth and cultivation of both personal and company brands online.',
      'Assuming branding and advanced digital strategies are only crucial for large corporations.'
    ]
  },
  { 
    id: 'broken-tech',
    title: 'Broken Tech', 
    description: 'Your funnel leaks. Your website’s outdated. Your data’s siloed. Technical issues are actively sabotaging your marketing.', 
    icon: Zap, // Using Zap to signify "broken" or needing fixing
    details: [
      'Difficulty choosing, integrating, and managing the right digital marketing platforms and tools.',
      'Website is not optimized for mobile, speed, user experience, or effective inbound marketing.',
      'Lack of secure, seamless payment solutions (critical for e-commerce and online services).',
      'Challenges in maintaining data privacy compliance (e.g., GDPR, CCPA, etc.).',
      'Struggling to keep up with frequent platform algorithm changes that impact visibility and performance.',
      'Siloed data across different systems preventing a holistic view of customer interactions.'
    ]
  },
  { 
    id: 'reputation-gaps',
    title: 'Online Reputation Gaps', 
    description: 'No reviews. No presence. No trust. Your online image isn\'t reflecting your true value, or worse, it\'s negative.', 
    icon: ShieldCheck,
    details: [
      'Neglecting online reputation management, including monitoring and responding to reviews.',
      'Ineffectively managing customer complaints and negative feedback on social media and review sites.',
      'Failing to engage authentically and build community with your online audience.',
      'Missing opportunities for proactive customer service and support via digital channels.',
      'Lack of a strategy to actively build and promote a positive online brand narrative.'
    ]
  },
];

const whoWeHelp = [
    { title: "Real Estate Teams", description: "Need more qualified leads and to stand out in a crowded market.", icon: Target, link: "/solutions#digital-presence-lead-gen" },
    { title: "E-commerce Brands", description: "Ready to scale traffic, conversions, and build a loyal customer base.", icon: UsersRound, link: "/solutions#engaging-content-creation" },
    { title: "Growth-Focused Founders", description: "Craving clarity, consistency, and a real, measurable ROI from their marketing spend.", icon: Brain, link: "/solutions#strategic-adaptable-approaches" }
];


export default function ProblemsPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <SectionTitle
          title="Problems We Solve"
          subtitle="We’ve seen it all. Here’s what’s holding brands back from true digital domination. If any of these resonate, you're in the right place."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
             <Card 
                key={problem.id} 
                className="bg-card hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in-up flex flex-col"
                style={{animationDelay: `${0.05 * index}s`}}
              >
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                     <problem.icon className="w-8 h-8 text-primary shrink-0" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl leading-tight">{problem.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <ul className="space-y-1.5 text-xs text-muted-foreground/80 list-disc list-inside pl-1">
                    {problem.details.slice(0,3).map((detail, idx)=>( <li key={idx}>{detail}</li>))}
                     {problem.details.length > 3 && <li>And more...</li>}
                  </ul>
                </CardContent>
              </Card>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border/30">
          <SectionTitle
            title="Who We Typically Partner With"
            subtitle="You’ll vibe with us if you’re one of these forward-thinking entities:"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whoWeHelp.map((item, index) => (
              <Card 
                key={item.title} 
                className="text-center bg-card hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button variant="link" asChild className="text-accent">
                        <Link href={item.link}>See Solutions for You</Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <h3 className="text-2xl font-headline font-semibold mb-4 text-primary">Are You Dealing With This?</h3>
            <ul className="space-y-3 text-muted-foreground text-lg list-none p-0 inline-block text-left">
              <li className="flex items-center gap-2"><Zap className="text-destructive w-5 h-5"/> Drowning in content with zero results?</li>
              <li className="flex items-center gap-2"><Users className="text-destructive w-5 h-5"/> Leads drying up or ghosting?</li>
              <li className="flex items-center gap-2"><HelpCircle className="text-destructive w-5 h-5"/> No real strategy, no systems, no peace?</li>
              <li className="flex items-center gap-2"><BarChart className="text-destructive w-5 h-5"/> Analytics that confuse more than help?</li>
            </ul>
            <p className="mt-8 text-xl font-semibold text-accent">You’re not alone—and we can build your bridge to clarity and results.</p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/contact">Discuss Your Challenges</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
