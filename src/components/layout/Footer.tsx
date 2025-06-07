
import type { FC } from 'react';
import Link from 'next/link';
import { Zap, Linkedin, Twitter } from 'lucide-react'; // Removed Facebook, Instagram, Youtube as they are not in socialLinks
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", label: "LinkedIn", icon: Linkedin },
    { href: "#", label: "Twitter", icon: Twitter },
  ];

  const quickLinks = [
    { href: '/#about-aeternix', label: 'About' },
    { href: '/#aeternix-solution', label: 'Solutions' },
    { href: '/#results-that-hit', label: 'Results' },
    { href: '/#problems-we-solve', label: 'Challenges' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/ai-content-spark', label: 'AI Content Spark' },
  ];

  const legalLinks = [
     { href: '/#contact', label: 'Contact Us' },
     { href: '/privacy-policy', label: 'Privacy Policy' },
     { href: '/terms-of-service', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-background border-t border-border/40 text-muted-foreground">
      <div className="container py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/#hero" className="flex items-center gap-2 text-primary mb-4 hover:opacity-80 transition-opacity">
              <Zap className="h-9 w-9" />
              <span className="text-3xl font-bold font-headline text-white">Aeternix</span>
            </Link>
            <p className="text-sm leading-relaxed mb-2 text-neutral-300">
              Aeternix | Digital Empires, Engineered.
            </p>
            <p className="text-xs leading-relaxed text-neutral-400">
              We’re not here for clout. We’re here to build the most scalable, high-converting brands of this decade.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4 font-headline">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Company */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4 font-headline">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map(link => (
                 <li key={link.href}><Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
               <li><a href="mailto:info@aeternix.com" className="text-neutral-300 hover:text-primary transition-colors">info@aeternix.com</a></li>
              <li><a href="tel:+1234567890" className="text-neutral-300 hover:text-primary transition-colors">+1 (234) 567-890</a></li>
            </ul>
          </div>

          {/* Column 4: Call to Action & Social */}
          <div>
             <h3 className="text-lg font-semibold text-neutral-100 mb-4 font-headline">Let’s build something legendary.</h3>
             <p className="text-sm mb-4 text-neutral-300">Subscribe for insights, or connect with us.</p>
             <form className="flex gap-2 mb-6">
                <Input type="email" placeholder="your.email@example.com" className="bg-input border-border text-sm" aria-label="Email for newsletter"/>
                <Button type="submit" size="sm" variant="outline" className="text-primary border-primary hover:bg-primary/10">Subscribe</Button>
             </form>
            {socialLinks.length > 0 && (
                <div className="flex space-x-3">
                {socialLinks.map(social => (
                    <Link key={social.label} href={social.href} aria-label={social.label} className="text-neutral-400 hover:text-primary transition-colors">
                    <social.icon size={20} />
                    </Link>
                ))}
                </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8 text-center text-xs text-neutral-400">
          <p>&copy; {currentYear} Aeternix. All Rights Reserved. </p>
          <p className="mt-1">Conquer the Digital Chaos. Dominate Your Market.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
