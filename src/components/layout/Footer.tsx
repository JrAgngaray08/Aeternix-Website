
import type { FC } from 'react';
import Link from 'next/link';
import { Zap, Linkedin, Facebook } from 'lucide-react'; // Changed Twitter to Facebook
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.linkedin.com/company/aeternix", label: "LinkedIn", icon: Linkedin },
    { href: "https://www.facebook.com/profile.php?id=61574416082145", label: "Facebook", icon: Facebook }, // Changed from Twitter to Facebook
  ];

  const quickLinks = [
    { href: '/#about-aeternix', label: 'About' },
    { href: '/#founders-showcase', label: 'Team' },
    { href: '/#lets-cut-to-the-chase', label: 'Challenges' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/ai-content-spark', label: 'AI Content Spark' },
  ];

  const legalLinks = [
     { href: '/contact', label: 'Contact Us' },
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
               <li><a href="mailto:aeternix.marketing@gmail.com" className="text-neutral-300 hover:text-primary transition-colors">aeternix.marketing@gmail.com</a></li>
              <li><a href="tel:+639654904087" className="text-neutral-300 hover:text-primary transition-colors">+1 (234) 567-890</a></li>
            </ul>
          </div>

          {/* Column 4: Call to Action & Social */}
          <div>
             <h3 className="text-lg font-semibold text-neutral-100 mb-4 font-headline">Let’s build something legendary.</h3>
            {socialLinks.length > 0 && (
                <div className="flex space-x-3">
                {socialLinks.map(social => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-neutral-400 hover:text-primary transition-colors">
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

