import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CoreValue } from '@/types';

interface CoreValueCardProps {
  value: CoreValue;
  className?: string;
}

const CoreValueCard: FC<CoreValueCardProps> = ({ value, className }) => {
  return (
    <Card className={`text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardHeader className="pb-4">
        <value.icon className="w-12 h-12 text-primary mx-auto mb-3" />
        <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{value.description}</p>
      </CardContent>
    </Card>
  );
};

export default CoreValueCard;
