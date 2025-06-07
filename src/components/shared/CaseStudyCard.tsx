
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CaseStudy } from '@/types';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface CaseStudyCardProps {
  study: CaseStudy;
  className?: string;
}

const CaseStudyCard: FC<CaseStudyCardProps> = ({ study, className }) => {
  return (
    <Card className={`flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card ${className}`}>
      <div className="relative w-full h-48">
        <Image 
          src={study.imageUrl} 
          alt={`Visual for ${study.title || study.clientType}`} 
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={study.imageHint}
        />
      </div>
      <CardHeader className="pb-2">
        <CardDescription className="text-sm text-accent font-semibold">{study.clientType}</CardDescription>
        {study.title && <CardTitle className="font-headline text-lg leading-tight mt-1">{study.title}</CardTitle>}
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <div>
          <h4 className="font-semibold text-muted-foreground flex items-center mb-1">
            <AlertTriangle className="w-4 h-4 mr-2 text-destructive/70 shrink-0" />
            Problem:
          </h4>
          <p className="text-card-foreground/80">{study.problem}</p>
        </div>
        <div>
          <h4 className="font-semibold text-muted-foreground flex items-center mb-1">
            <CheckCircle className="w-4 h-4 mr-2 text-primary/80 shrink-0" />
            Solution:
          </h4>
          <p className="text-card-foreground/80">{study.solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-muted-foreground flex items-center mb-1">
            <Activity className="w-4 h-4 mr-2 text-green-500 shrink-0" />
            Result:
          </h4>
          <p className="text-card-foreground font-bold">{study.result}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
          <Link href={`/case-studies#${study.id}`}>Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
