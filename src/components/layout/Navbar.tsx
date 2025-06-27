
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type FC, useEffect } from 'react';
import { Menu, X, Home, Info, UsersRound, AlertTriangle, Tag, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';


const navItems: NavItem[] = [
  { label: 'Home', href: '/#hero', icon: Home, sectionId: 'hero' },
  { label: 'About', href: '/#about-aeternix', icon: Info, sectionId: 'about-aeternix' },
  { label: 'Team', href: '/#founders-showcase', icon: UsersRound, sectionId: 'founders-showcase' },
  { label: 'Challenges', href: '/#lets-cut-to-the-chase', icon: AlertTriangle, sectionId: 'lets-cut-to-the-chase' },
  { label: 'Pricing', href: '/#pricing', icon: Tag, sectionId: 'pricing' },
  { label: 'AI Spark', href: '/ai-content-spark', icon: Wand2, sectionId: 'ai-content-spark-page' },
];

const Logo: FC = () => (
  <Link href="/#hero" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity shrink-0">
    <Image src="/image/logo/Aeternix Logo.png" alt="Aeternix Logo" width={28} height={28} />
    <span className="text-xl font-bold font-headline">Aeternix</span>
  </Link>
);

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const directPageNavItem = navItems.find(item => item.href === pathname && !item.href.includes('#'));

    if (directPageNavItem) {
        setActiveSection(directPageNavItem.sectionId);
        return; // Exit early, no observer needed for this case
    }

    let observer: IntersectionObserver | undefined;
    
    const observerSetupAndRun = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));

      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.4, 
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const navItem = navItems.find(item => item.sectionId === entry.target.id && item.href.startsWith('/#'));
                  if (navItem) {
                      setActiveSection(navItem.sectionId);
                  }
              }
          });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach((section) => {
          if (navItems.some(item => item.sectionId === section.id && item.href.startsWith('/#'))) {
              observer!.observe(section);
          }
      });

      if (pathname === '/') {
          const currentHash = window.location.hash.substring(1);
          const navItemForHash = navItems.find(item => item.sectionId === currentHash && item.href.startsWith('/#'));

          if (navItemForHash) {
              setActiveSection(navItemForHash.sectionId);
          } else {
              let foundVisibleSection = false;
              for (const sectionEl of sections) {
                  if (navItems.some(item => item.sectionId === sectionEl.id && item.href.startsWith('/#'))) {
                      const rect = sectionEl.getBoundingClientRect();
                      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                          setActiveSection(sectionEl.id);
                          foundVisibleSection = true;
                          break;
                      }
                  }
              }
              if (!foundVisibleSection && sections.length > 0) { // ensure sections exist before defaulting to hero
                  setActiveSection('hero');
              } else if (sections.length === 0) {
                  // If no sections found on homepage (e.g. during initial render flicker), default to hero
                  setActiveSection('hero');
              }
          }
      }
    };

    // Defer the observer setup and initial active section calculation
    const timeoutId = setTimeout(observerSetupAndRun, 0);

    return () => {
        clearTimeout(timeoutId);
        if (observer) {
            observer.disconnect();
        }
    };
  }, [pathname]);


  const iconLinkClasses = "p-2.5 rounded-full text-neutral-300 hover:text-primary-foreground hover:bg-primary/20 transition-colors duration-150 ease-in-out";
  const activeIconLinkClasses = "bg-primary text-primary-foreground";

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-in-out",
      )}
    >
      <div
        className="p-[2px] rounded-full bg-gradient-to-r from-primary via-purple-500 to-accent animate-border-flow"
        style={{ backgroundSize: '400% 400%' }}
      >
        <div className={cn(
          "flex h-14 sm:h-[60px] items-center justify-center gap-x-6 rounded-full px-6 sm:px-8 shadow-2xl",
          "bg-card/60 backdrop-blur-sm"
        )}>
          <Logo />

          <TooltipProvider delayDuration={100}>
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
              {navItems.map((item) => (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        iconLinkClasses,
                        activeSection === item.sectionId ? activeIconLinkClasses : ""
                      )}
                      aria-label={item.label}
                    >
                      <item.icon className="h-5 w-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-popover/90 text-popover-foreground backdrop-blur-sm">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </TooltipProvider>

          <div className="hidden md:block shrink-0">
              <Button
                asChild
                size="sm"
                className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-600/80 text-white rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-accent/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                  <Link href="https://cal.com/aeternix/strategy-call-30-minutes-discovery-call" target="_blank" rel="noopener noreferrer">Book Strategy Call</Link>
              </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-200 hover:bg-neutral-700/50">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card/80 backdrop-blur-md p-6 flex flex-col text-neutral-100 border-l border-border/50">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <div className="flex items-center justify-between mb-8">
                    <Logo />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" className="text-neutral-300 hover:bg-neutral-700/50">
                          
                          <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary py-3 px-3 rounded-md flex items-center gap-3",
                             activeSection === item.sectionId ? "text-primary bg-primary/10" : "text-neutral-300 hover:bg-neutral-800"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                      size="lg"
                      onClick={() => { setIsMobileMenuOpen(false); }}
                    >
                      <Link href="https://cal.com/aeternix/strategy-call-30-minutes-discovery-call" target="_blank" rel="noopener noreferrer">
                        Book Strategy Call
                      </Link>
                    </Button>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
