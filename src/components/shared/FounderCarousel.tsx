
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { Founder } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FounderCarouselProps {
  founders: Founder[];
}

const FounderCarousel: React.FC<FounderCarouselProps> = ({ founders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? founders.length - 1 : prevIndex - 1
    );
  }, [founders.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === founders.length - 1 ? 0 : prevIndex + 1
    );
  }, [founders.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleFounders = () => {
    if (!founders || founders.length === 0) return [];
    
    const itemsToDisplay = [];
    const numFounders = founders.length;

    if (isMobile || numFounders <= 1) {
      itemsToDisplay.push({ founder: founders[currentIndex], status: 'active', keyId: `${founders[currentIndex].id}-active` });
    } else {
      // Desktop: 3 cards visible
      const prevIndex = (currentIndex - 1 + numFounders) % numFounders;
      const nextIndex = (currentIndex + 1) % numFounders;

      itemsToDisplay.push({ founder: founders[prevIndex], status: 'prev', keyId: `${founders[prevIndex].id}-prev-${currentIndex}` });
      itemsToDisplay.push({ founder: founders[currentIndex], status: 'active', keyId: `${founders[currentIndex].id}-active-${currentIndex}` });
      itemsToDisplay.push({ founder: founders[nextIndex], status: 'next', keyId: `${founders[nextIndex].id}-next-${currentIndex}` });
    }
    return itemsToDisplay;
  };

  const visibleItems = getVisibleFounders();

  if (!founders || founders.length === 0) {
    return null;
  }
  
  // Determine if arrows should be shown
  // Show if more founders than can be displayed at once (1 on mobile, 3 on desktop),
  // or if there are at least 2 founders (to allow navigation between them).
  const showArrows = founders.length > 1;


  return (
    <div className="relative w-full py-12">
      <div className={cn(
        "flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8",
      )}>
        {visibleItems.map(({ founder, status, keyId }) => (
          <div
            key={keyId} 
            className={cn(
              'transition-all duration-500 ease-in-out',
              'w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[260px]', 
              status === 'active' ? 'opacity-100 scale-100 z-10' : 'opacity-50 scale-90',
              (status === 'prev' || status === 'next') && !isMobile ? 'block' : status === 'active' ? 'block' : 'hidden',
            )}
          >
            <div className="relative aspect-[9/16] bg-card/60 backdrop-blur-md border border-border/20 rounded-xl shadow-xl overflow-hidden group">
              <Image
                src={founder.imageUrl}
                alt={`${founder.name} - ${founder.role}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={founder.imageHint}
                sizes="(max-width: 400px) 160px, (max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                <h3 className="font-headline text-base sm:text-lg font-semibold truncate">{founder.name}</h3>
                <p className="text-xs sm:text-sm text-white/80 truncate">{founder.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArrows && (
        <>
           <Button
            variant="outline"
            size="icon"
            className="absolute left-0 sm:left-1 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/50 hover:bg-background/80 border-border/30 h-10 w-10 sm:h-12 sm:w-12"
            onClick={goToPrevious}
            aria-label="Previous founder"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 sm:right-1 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/50 hover:bg-background/80 border-border/30 h-10 w-10 sm:h-12 sm:w-12"
            onClick={goToNext}
            aria-label="Next founder"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </>
      )}

      {founders.length > 1 && (
        <div className="flex justify-center gap-2.5 mt-10">
          {founders.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to founder ${index + 1}`}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out',
                currentIndex === index ? 'bg-primary scale-125 ring-2 ring-primary/50 ring-offset-2 ring-offset-background' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FounderCarousel;
