
import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false, 
  className, 
  titleClassName,
  subtitleClassName,
  ...props 
}) => {
  return (
    <div className={cn('mb-10 md:mb-16', centered ? 'text-center items-center' : '', 'flex flex-col', className)} {...props}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-bold font-headline text-gradient-primary-accent leading-tight mb-4 md:mb-5", // Using gradient for title
        centered && "mx-auto",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed", 
          centered ? 'mx-auto' : '',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
