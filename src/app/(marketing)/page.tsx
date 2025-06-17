
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Users, ArrowRight, Lightbulb, BarChart as LucideBarChart, UsersRound, Brain, AlertTriangle, FileWarning, ShieldCheck, Mail, Phone, MapPin, ShoppingCart, House, TrendingUp, FileWarningIcon, Wand2, Compass, MegaphoneOff, MonitorX, TrendingDown, BarChartHorizontalBig, SlidersHorizontal, Target, Sparkles, MousePointerClick, PieChart, Bot } from 'lucide-react';
import type { PricingTier, Founder } from '@/types';
import { cn } from '@/lib/utils';
// import ContactForm from './contact/ContactForm'; // Contact section is removed
import ProblemsSolutionsTabs from '@/components/shared/ProblemsSolutionsTabs';
import FounderCarousel from '@/components/shared/FounderCarousel';
import ShowcaseVideoPlayer from '@/components/shared/ShowcaseVideoPlayer';
import PricingTiersSection from '@/components/shared/PricingTiersSection';


const problemsSolved = [
  { title: "No real strategy", description: "Struggling with unclear marketing direction or guessing what works? No roadmap = no results.", iconName: "Compass", id: 'problem-no-real-strategy' },
  { title: "Drowning in content, but nothing converts", description: "You’re posting a lot, but your audience isn’t responding. No engagement, no ROI, just noise.", iconName: "MegaphoneOff", id: 'problem-content-no-converts' },
  { title: "Website looks good but doesn’t sell", description: "A beautiful website means nothing if it can’t generate leads or sales. Design isn’t the same as conversion.", iconName: "MonitorX", id: 'problem-website-not-selling' },
  { title: "Ads spend with no returns", description: "Tired of wasting budget on ads that don’t perform? If you can’t scale results, it’s not performance marketing.", iconName: "TrendingDown", id: 'problem-ads-no-returns' },
  { title: "You have analytics—but they’re overwhelming", description: "You’re flooded with numbers but still don’t know what’s working. Data overload = zero clarity.", iconName: "BarChartHorizontalBig", id: 'problem-analytics-overload' },
  { title: "No systems, no automation, everything is manual", description: "Your marketing team is burnt out doing repetitive tasks. Without automation, you can’t grow sustainably.", iconName: "SlidersHorizontal", id: 'problem-manual-processes' }
];

const aeternixSolutions = [
  {
    title: "Built-for-you strategy",
    description: "We create tailored marketing strategies that align with your brand goals and drive measurable growth.",
    iconName: "Target",
    id: 'solution-built-for-you-strategy'
  },
  {
    title: "Scroll-stopping content",
    description: "We develop magnetic content that actually gets clicks, comments, and conversions.",
    iconName: "Sparkles",
    id: 'solution-scroll-stopping-content'
  },
  {
    title: "Conversion-driven design",
    description: "We design sleek, high-performing websites that turn visitors into customers.",
    iconName: "MousePointerClick",
    id: 'solution-conversion-driven-design'
  },
  {
    title: "Performance marketing that actually performs",
    description: "We run smart, ROI-focused ad campaigns that drive sales and scalable growth.",
    iconName: "TrendingUp",
    id: 'solution-performance-marketing-roi'
  },
  {
    title: "Data you can actually use",
    description: "We simplify your metrics into clean dashboards so you can track what matters and make better decisions.",
    iconName: "PieChart",
    id: 'solution-data-you-can-use'
  },
  {
    title: "Automation that scales with you",
    description: "We build systems that streamline your marketing, freeing up time and helping you scale effortlessly.",
    iconName: "Bot",
    id: 'solution-automation-scales'
  }
];

const whoWeHelpData = [
    {
      title: "E-Commerce Brands",
      icon: ShoppingCart,
      description: "From product discovery to post-purchase, we craft digital campaigns that convert browsers into loyal customers — blending performance marketing with scroll-stopping creative."
    },
    {
      title: "Real Estate Teams",
      icon: House,
      description: "We help real estate teams turn attention into action — building magnetic digital funnels that attract high-quality leads, nurture trust, and drive conversions without the overwhelm."
    },
    {
      title: "Growth-Stage Businesses",
      icon: TrendingUp,
      description: "Scaling fast? We bring the clarity, systems, and strategy you need to grow without chaos — aligning brand, content, and data into one seamless growth engine."
    }
  ];


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
        originalPrice: '',
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

const foundersData: Founder[] = [
  { id: 'dash-tolentino', name: 'Dash Tolentino', role: 'CEO', imageUrl: '/image/team/dash img.jpg', imageHint: 'ceo portrait' },
  { id: 'mark-sabeniano', name: 'Mark Sabeniano', role: 'CTO', imageUrl: '/image/team/mark img.jpg', imageHint: 'cto portrait' },
  { id: 'regina-sultan', name: 'Regina Sultan', role: 'CBDO', imageUrl: '/image/team/rej img.jpg', imageHint: 'cbdo portrait' },
  { id: 'wilmarc-garcia', name: 'Wilmarc Garcia', role: 'Creative Director', imageUrl: '/image/team/wil img.jpg', imageHint: 'creative director' },
  { id: 'tedy-hylar', name: 'Tedy Hylar', role: 'Video Editor', imageUrl: '/image/team/tedy img.jpg', imageHint: 'video editor' },
  { id: 'matthew-oliver', name: 'Matthew Oliver', role: 'Video Editor', imageUrl: '/image/team/matt img.jpg', imageHint: 'video editor' },
  { id: 'keanu-fragada', name: 'Keanu Fragada', role: 'Sales Executive', imageUrl: '/image/team/keanu img.jpg', imageHint: 'sales executive' },
  { id: 'marco-marvilla', name: 'Marco Marvilla', role: 'Content Director', imageUrl: '/image/team/marco img.JPG', imageHint: 'content director' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section id="hero" className="bg-transparent text-primary-foreground overflow-hidden min-h-[70svh] md:min-h-[80svh] flex items-center pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="w-full">
            <div className="space-y-6 text-center animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold font-headline leading-tight tracking-tight text-foreground">
                Build.<br />
                Scale.<br />
                <span className="text-gradient-primary-accent">Dominate.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We help real estate, e-commerce, and growth-focused brands overcome marketing overwhelm and evolve into unstoppable digital empires.
              </p>
              <div className="mt-8 lg:mt-10 animate-fade-in-up animation-delay-300">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground text-base sm:text-lg px-8 py-6 sm:py-7 w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-accent/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link href="/#contact">
                      Book a Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-8 py-6 sm:py-7 border-primary-foreground/40 w-full sm:w-auto text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link href="/ai-content-spark">
                      Explore AI Content Spark
                      <Wand2 className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-muted-foreground/80 max-w-xl mx-auto">
                  Join ambitious brands building their empires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Showcase Video Section */}
       <section id="showcase-video" className="py-16 md:py-20 lg:py-24">
         <ShowcaseVideoPlayer
           videoSrc="/videos/Aeternix_SoftLaunch_Landscape.mp4"
           posterSrc="https://placehold.co/1280x720.png"
         />
      </section>
      {/* End Showcase Video Section */}

      {/* 2. About Aeternix Section */}
      <section id="about-aeternix" className="py-16 md:py-20 lg:py-24 text-primary-foreground">
        <div className="container text-center animate-fade-in-up">
            <p className="text-sm font-medium text-accent mb-2 tracking-wider animation-delay-100">
                This isn’t your typical marketing agency
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground mb-8 animation-delay-200">
                We’re Aeternix.
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-primary-foreground/80 animation-delay-300 space-y-5">
                <p>
                    We don’t do fluff, fake hype, or outdated playbooks. We build <span className="text-accent font-semibold">brand ecosystems</span> that move markets. With Aeternix, every asset is <span className="text-accent font-semibold">strategic</span>. Every touchpoint is <span className="text-accent font-semibold">intentional</span>. You&apos;re not hiring a team. You&apos;re plugging into a <span className="text-accent font-semibold">growth engine</span>.
                </p>
            </div>
            <div className="mt-10 animation-delay-400">
                <p className="text-md text-primary-foreground/70 mb-4">Want to build something timeless?</p>
                <div className="flex items-center justify-center gap-4">
                <Button variant="link" asChild className="text-accent text-md hover:text-accent/80">
                    <Link href="/#contact">Let’s Talk</Link>
                </Button>
                <span className="text-primary-foreground/50">|</span>
                <Button variant="link" asChild className="text-accent text-md hover:text-accent/80">
                    <Link href="/#pricing">Explore Our Pricing</Link>
                </Button>
                </div>
            </div>
        </div>
      </section>
      
      {/* Founder Carousel Section */}
      <section id="founders-showcase" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-[hsl(250_35%_4%)] to-[hsl(250_30%_2%)] text-foreground">
        <div className="container">
          <SectionTitle
            title="Meet Our Architects of Growth"
            subtitle="The visionary minds behind Aeternix, dedicated to engineering your digital empire with precision and passion."
            centered
            className="animate-fade-in-up"
          />
          <div className="animate-fade-in-up animation-delay-200">
            <FounderCarousel founders={foundersData} />
          </div>
        </div>
      </section>
      {/* END Founder Carousel Section */}

      {/* 3. Who We Help Section */}
      <section id="who-we-help" className="py-16 md:py-20 lg:py-24 bg-transparent text-foreground">
        <div className="container">
          <SectionTitle
            title="Who We Help"
            subtitle="We partner with ambitious brands ready to dominate their digital landscape. If you're one of these, we speak your language."
            centered
            className="animate-fade-in-up"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {whoWeHelpData.map((item, index) => (
              <Card
                key={item.title}
                className="text-left bg-card/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardHeader className="items-start pb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-card-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: "0.5s"}}>
            <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">You’re probably dealing with this:</h3>
            <ul className="space-y-3 text-muted-foreground text-lg list-none p-0 inline-block text-left">
              <li className="flex items-center gap-2"><FileWarningIcon className="text-destructive/80 w-5 h-5"/> Drowning in content with zero results?</li>
              <li className="flex items-center gap-2"><Users className="text-destructive/80 w-5 h-5"/> Leads drying up or ghosting?</li>
              <li className="flex items-center gap-2"><Zap className="text-destructive/80 w-5 h-5"/> No real strategy, no systems, no peace?</li>
              <li className="flex items-center gap-2"><LucideBarChart className="text-destructive/80 w-5 h-5"/> Analytics that confuse more than help?</li>
            </ul>
            <p className="mt-8 text-xl font-semibold text-accent">You’re not alone—and you’re in the right place.</p>
          </div>
        </div>
      </section>

      {/* Combined Problems & Solutions Section */}
       <section id="lets-cut-to-the-chase" className="py-16 md:py-20 lg:py-24 text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 mb-8 md:mb-12 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground mb-3">Let’s Cut to the Chase.</h2>
            <p className="text-lg text-muted-foreground/80">You’ve got pain points. We’ve got battle-tested solutions. Switch between both sides to see exactly how we help brands move forward.</p>
        </div>
        <ProblemsSolutionsTabs problems={problemsSolved} solutions={aeternixSolutions} />
      </section>

      {/* Results That Hit Section - HIDDEN */}
      {/*
      <section id="results-that-hit" className="py-16 md:py-20 lg:py-24 bg-transparent text-foreground">
        <div className="container">
          <SectionTitle
            title="Results That Hit"
            subtitle="Tangible outcomes that speak volumes. We turn challenges into triumphs."
            centered
            className="animate-fade-in-up"
          />
          // ... Case studies content used to be here
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-lg text-muted-foreground mb-6">
                "This isn’t another strategy doc. It’s your growth engine."
            </p>
            <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary text-base px-7 py-6">
              <Link href="/#contact">Ready for Your Results? <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-transparent text-foreground">
        <div className="container">
          <SectionTitle
            title="Pricing That Powers Growth"
            subtitle="Transparent, flexible plans designed to help you conquer the digital chaos and dominate your market. No hidden fees, just pure value."
            centered
            className="animate-fade-in-up"
          />
          <PricingTiersSection pricingTiers={pricingTiers} />
          <div className="mt-16 text-center p-8 bg-card/70 backdrop-blur-sm rounded-lg shadow-lg animate-fade-in-up animation-delay-300">
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
        </div>
      </section>

      {/* Contact Section - HIDDEN and REMOVED */}
      {/*
      <section id="contact" className="py-16 md:py-20 lg:py-24 text-primary-foreground">
        // ... content was here
      </section>
      */}
    </>
  );
}

    
