
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Zap, Lightbulb, TrendingUp, Award, Users, Aperture, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Aeternix | Your Digital Growth Engine',
  description: 'Learn about Aeternix: our belief in building digital empires, our CMO-level strategy, and our clear, confident, action-oriented approach.',
};

const whatWeBelievePoints = [
  "We don’t just “run ads.” We build **digital empires**.",
  "**Strategy-first:** Every action is purposeful and aligned with your overarching goals.",
  "**Results-obsessed:** We are relentlessly focused on delivering measurable outcomes.",
  "**Always evolving:** The digital landscape changes, and so do we, staying ahead of the curve.",
  "We’re here for the **long game:** Building sustainable growth and lasting market presence."
];

const ourEdgePoints = [
  { title: "Outsourced CMO-Level Strategy", description: "Access top-tier strategic thinking without the full-time overhead. We become an extension of your leadership team.", icon: Zap },
  { title: "Execution with Built-In Scale", description: "Our processes and systems are designed to grow with your business, ensuring smooth transitions as you expand.", icon: TrendingUp },
  { title: "Authentic Storytelling, Data-Backed", description: "We craft compelling brand narratives that resonate, always validated and refined by data insights for maximum impact.", icon: Aperture },
  { title: "Proactive & Adaptive Partnership", description: "We don't just execute; we anticipate, adapt, and consistently seek new opportunities for your growth.", icon: Lightbulb },
];

const howWeSoundPoints = [
  { title: "Clear & Confident", description: "We communicate complex ideas simply, with the assurance of expertise. No confusing jargon, just straight talk." },
  { title: "Built for Action", description: "Our communication is direct and purposeful, designed to move projects forward, not create confusion or delays." },
  { title: "Vibes High, BS Low", description: "We bring positive energy and a can-do attitude, while maintaining a no-nonsense approach to achieving results." },
  { title: "Transparent & Honest", description: "Open communication is key. We keep you informed every step of the way, fostering a relationship built on trust." }
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-purple-800 to-blue-900 text-primary-foreground">
        <div className="container text-center">
          <SectionTitle
            title="About Aeternix"
            subtitle="We’re not an agency. We’re your growth engine."
            centered
            titleClassName="text-primary-foreground"
            subtitleClassName="text-primary-foreground/80"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            At Aeternix, we're dedicated to transforming businesses by crafting powerful digital ecosystems. Our mission is to empower you to conquer digital chaos and achieve sustainable market dominance.
          </p>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Team strategizing with passion" 
                width={600} 
                height={450} 
                className="rounded-lg shadow-xl"
                data-ai-hint="team strategy meeting"
              />
            </div>
            <div className="animate-fade-in-right">
              <SectionTitle 
                title="What We Believe"
                subtitle="Our foundational principles that drive every decision."
              />
              <ul className="space-y-4 text-lg">
                {whatWeBelievePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="Our Edge"
            subtitle="What sets Aeternix apart in the digital landscape."
            centered 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {ourEdgePoints.map((value, index) => (
              <Card 
                key={value.title} 
                className="bg-card text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up flex flex-col"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="items-center pb-4">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Sound Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container">
          <SectionTitle title="How We Sound: Our Communication Style" subtitle="Clarity and confidence in every interaction." centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {howWeSoundPoints.map((item, index) => (
              <Card key={item.title} className="bg-card animate-fade-in-up" style={{animationDelay: `${0.15 * index}s`}}>
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-purple-800 text-primary-foreground">
        <div className="container text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Ready to Experience the Aeternix Difference?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our unique approach can fuel your brand's growth and help you dominate your market.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-7">
            <Link href="/contact">Start Your Growth Journey</Link>
          </Button>
           <p className="mt-8 text-primary-foreground/70 text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            "Done guessing. Let’s get clarity."
          </p>
        </div>
      </section>
    </>
  );
}
