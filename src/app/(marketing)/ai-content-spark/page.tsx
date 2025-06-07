import SectionTitle from '@/components/shared/SectionTitle';
import ContentSparkForm from './ContentSparkForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Spark | Aeternix Digital Domination',
  description: 'Leverage AI to generate compelling blog post ideas and drive your content strategy forward. Input your topic, audience, and keywords for instant inspiration.',
};

export default function AiContentSparkPage() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <SectionTitle
          title="AI Content Spark"
          subtitle="Unlock AI-powered creativity for your blog. Generate relevant and engaging content suggestions to fuel your thought leadership and attract your target audience."
          centered
        />
        <div className="max-w-2xl mx-auto">
          <ContentSparkForm />
        </div>
      </div>
    </div>
  );
}
