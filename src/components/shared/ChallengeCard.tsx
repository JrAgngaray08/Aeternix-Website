import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Challenge } from '@/types';
import { ChevronRight } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
  className?: string;
}

const ChallengeCard: FC<ChallengeCardProps> = ({ challenge, className }) => {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <challenge.icon className="w-10 h-10 text-primary mt-1 shrink-0" />
        <div>
          <CardTitle className="font-headline text-xl mb-1">{challenge.title}</CardTitle>
          <CardDescription>{challenge.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {challenge.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-primary/70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
