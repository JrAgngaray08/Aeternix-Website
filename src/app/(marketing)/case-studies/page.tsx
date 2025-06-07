
import SectionTitle from '@/components/shared/SectionTitle';
import CaseStudyCard from '@/components/shared/CaseStudyCard';
import type { CaseStudy } from '@/types';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Results That Hit | Aeternix Digital Domination Case Studies',
  description: 'Explore success stories: increased leads for real estate, boosted e-commerce traffic, and enhanced SMB conversions through Aeternix\'s digital strategies.',
};

const caseStudiesData: CaseStudy[] = [
  {
    id: 'real-estate-leads',
    clientType: 'Real Estate',
    title: 'Qualified Leads Surge for Real Estate Teams',
    problem: 'Low lead quality and quantity despite marketing efforts, hindering sales pipeline growth and causing frustration for sales agents.',
    solution: 'Developed and implemented a hyper-targeted "Shoppable Video + User-Generated Content (UGC)" funnel. This involved creating engaging video property tours, leveraging authentic client testimonials (UGC), and running precision-targeted ad campaigns on social media and search platforms to attract serious buyers and sellers.',
    result: '+403% qualified leads within 3 months, significantly improving sales conversion rates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'luxury home interior',
  },
  {
    id: 'ecommerce-seo',
    clientType: 'E-Commerce',
    title: 'E-commerce SEO & Traffic Transformation',
    problem: 'Weak organic search presence and declining website traffic, resulting in missed sales opportunities and over-reliance on paid advertising for an online retail brand.',
    solution: 'Executed a comprehensive SEO overhaul including technical SEO fixes, strategic keyword research, on-page optimization of product and category pages, and a consistent high-quality blog content strategy targeting informational and commercial intent keywords. This was coupled with a backlink-building initiative.',
    result: '+53% organic traffic and a 25% increase in organic sales within 60 days.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store analytics',
  },
  {
    id: 'smb-automation',
    clientType: 'SMB Services',
    title: 'Automation Drives Conversions for Service Business',
    problem: 'Manual lead follow-up processes were time-consuming and inefficient, leading to lost leads and inconsistent client communication for a local service-based business.',
    solution: 'Integrated a robust CRM (Customer Relationship Management) system and developed tailored automated email drip sequences for different lead segments. This included welcome series, nurture campaigns for cold leads, and re-engagement campaigns for past clients.',
    result: '+41% lead-to-customer conversion rate and a 20% reduction in sales cycle length.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'crm dashboard software',
  },
  {
    id: 'all-clients-growth-sprints',
    clientType: 'All Clients',
    title: 'Consistent High-Intent Leads via Agile Growth Sprints',
    problem: 'Clients across various sectors needed a reliable way to generate a consistent flow of high-intent leads without long, drawn-out campaign cycles.',
    solution: 'Implemented Aeternix\'s proprietary "Growth Sprints" methodology. These are short, focused marketing campaigns (2-4 weeks) that iteratively test and optimize offers, creatives, and targeting across multiple channels. Each sprint builds on learnings from the previous one.',
    result: 'Average +49% increase in high-intent leads within the first 90 days of engagement across participating clients.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'agile board sprint',
  },
];


export default function CaseStudiesPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <SectionTitle
          title="Results That Hit"
          subtitle="Tangible outcomes that speak volumes. We turn challenges into triumphs for Real Estate, E-Commerce, and SMBs."
          centered
        />
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudiesData.map((study, index) => (
            <div id={study.id} key={study.id} className="animate-slide-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <CaseStudyCard 
                  study={study} 
                />
            </div>
          ))}
        </div>
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-xl text-muted-foreground mb-6">
                "This isn’t another strategy doc. It’s your growth engine."
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Ready to See Your Results? Book a Call</Link>
            </Button>
          </div>
      </div>
    </div>
  );
}
