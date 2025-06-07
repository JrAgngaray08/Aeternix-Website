
'use client';

import type { FC } from 'react';
import Script from 'next/script';
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { PricingTier } from '@/types';
import { cn } from '@/lib/utils';

interface PricingTiersSectionProps {
  pricingTiers: PricingTier[];
}

const PricingTiersSection: FC<PricingTiersSectionProps> = ({ pricingTiers }) => {
  const handleCalScriptLoad = () => {
    // All Cal.com UI initializations are removed as buttons are now direct links.
    // The main embed.js script is still loaded via <Script /> in case Cal.com uses it for other purposes.
    // if (typeof window !== 'undefined' && (window as any).Cal) {
    //   const Cal = (window as any).Cal;
    // }
  };

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={handleCalScriptLoad}
        id="cal-com-embed-script"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier, index) => (
          <div
            key={tier.id}
            className={cn(
              "flex flex-col",
              tier.popular
                ? "rounded-lg p-[2px] bg-gradient-to-r from-primary via-purple-600 to-accent animate-gradient-flow shadow-2xl hover:shadow-purple-500/60 bg-[length:400%_400%] relative"
                : "bg-card/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-full shadow-md z-10">
                Best Value
              </div>
            )}
            <Card
              className={cn(
                "flex flex-col h-full w-full",
                tier.popular ? "bg-card rounded-[calc(var(--radius)-2px)]" : "bg-transparent"
              )}
            >
              <CardHeader className="text-center pt-10 pb-4">
                <CardTitle className="font-headline text-3xl text-primary">{tier.name}</CardTitle>
                <div className="mt-4 text-center min-h-[100px]">
                  {tier.specialOffer?.originalPrice ? (
                    <>
                      <div>
                        <span className="text-2xl font-normal text-muted-foreground line-through mr-2">
                          {tier.specialOffer.originalPrice}
                        </span>
                        <span className="text-5xl font-bold text-accent">{tier.price}</span>
                        {tier.frequency && (<span className="text-muted-foreground/80 ml-1">{tier.frequency}</span>)}
                      </div>
                      {tier.specialOffer.details && tier.specialOffer.details.length > 0 && (
                        <div className="mt-2 space-y-0.5">
                          {tier.specialOffer.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-accent font-semibold">
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div>
                        <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                        {tier.frequency && (
                          <span className="text-muted-foreground ml-1">{tier.frequency}</span>
                        )}
                      </div>
                      {tier.specialOffer?.details && tier.specialOffer.details.length > 0 && (
                        <div className="mt-2 space-y-0.5">
                          {tier.specialOffer.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-accent font-semibold">
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                {tier.id === 'best-value' ? (
                  <Button
                    asChild
                    className={cn(
                      "w-full text-lg py-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",
                      tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40' : 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent/40'
                    )}
                  >
                    <Link
                      href="https://cal.com/aeternix/best-value-package-30-minutes-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </Link>
                  </Button>
                ) : tier.id === 'empire-builder' ? (
                  <Button
                    asChild
                    className={cn(
                      "w-full text-lg py-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",
                      tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40' : 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent/40'
                    )}
                  >
                    <Link
                      href="https://cal.com/aeternix/empire-builder-package-30-minutes-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </Link>
                  </Button>
                ) : tier.id === 'starter-spark' ? (
                  <Button
                    asChild
                    className={cn(
                      "w-full text-lg py-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",
                      tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40' : 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent/40'
                    )}
                  >
                    <Link
                      href="https://cal.com/aeternix/starter-spark-package-30-minutes-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </Link>
                  </Button>
                ) : (
                   // Fallback for any other tiers, assuming they would also be direct links
                   <Button
                    asChild
                    className={cn(
                      "w-full text-lg py-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1",
                      tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40' : 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent/40'
                    )}
                  >
                    <Link
                      href={`/contact?package=${tier.id}`} // Default to contact page if no specific Cal.com link
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingTiersSection;

