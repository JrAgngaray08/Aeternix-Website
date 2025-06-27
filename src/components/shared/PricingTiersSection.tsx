
'use client';

import type { FC } from 'react';
import Script from 'next/script';
import Link from 'next/link';
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
    // This function can remain empty as Cal.com buttons are now direct links.
    // The script is kept in case Cal.com uses it for other functionalities.
  };

  const calLinks: { [key: string]: string } = {
    'starter-spark': 'https://cal.com/aeternix/starter-spark-package-30-minutes-discovery-call',
    'best-value': 'https://cal.com/aeternix/best-value-package-30-minutes-discovery-call',
    'empire-builder': 'https://cal.com/aeternix/empire-builder-package-30-minutes-discovery-call',
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
        {pricingTiers.map((tier, index) => {
          const linkHref = calLinks[tier.id] || `/contact?package=${tier.id}`;

          return (
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
                   <Button
                      asChild
                      className={cn(
                        "w-full text-lg py-6 transition-all duration-300 ease-in-out",
                        tier.popular
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1'
                          : 'bg-transparent border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-accent-glow hover:-translate-y-0.5'
                      )}
                    >
                      <Link
                        href={linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tier.cta}
                      </Link>
                    </Button>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default PricingTiersSection;
