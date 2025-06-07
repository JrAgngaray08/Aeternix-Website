import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Solution } from '@/types';
import { Check } from 'lucide-react';

interface SolutionCardProps {
  solution: Solution;
  className?: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ solution, className }) => {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <solution.icon className="w-10 h-10 text-primary mt-1 shrink-0" />
        <div>
          <CardTitle className="font-headline text-xl mb-1">{solution.title}</CardTitle>
          <CardDescription>{solution.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
          {solution.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {solution.realEstateFocus && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs font-semibold text-primary/80 uppercase mb-1">Real Estate Focus</p>
            <p className="text-sm text-muted-foreground">{solution.realEstateFocus}</p>
          </div>
        )}
        {solution.ecommerceFocus && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs font-semibold text-primary/80 uppercase mb-1">E-commerce Focus</p>
            <p className="text-sm text-muted-foreground">{solution.ecommerceFocus}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
