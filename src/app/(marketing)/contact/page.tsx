
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Build Your Digital Empire with Aeternix',
  description: 'Ready to build your digital empire? Book your free strategy session with Aeternix and let\'s turn your vision into a well-oiled growth machine.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <div className="container">
        <SectionTitle
          title="Ready to Build Your Digital Empire?"
          subtitle="Book your free strategy session and let’s turn your vision into a well-oiled growth machine. Your competitors won’t wait. Why should you?"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold font-headline text-primary">Start Your Strategy Session</h3>
            </div>
            <ContactForm />
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Aeternix team in a productive meeting" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg mb-8"
                data-ai-hint="office team discussion"
              />
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold font-headline mb-6 text-primary">Connect With Us Directly</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <strong className="block text-foreground">Email Us</strong>
                    <a href="mailto:info@aeternix.com" className="hover:text-primary transition-colors">info@aeternix.com</a>
                    <p className="text-xs">For general inquiries and partnerships.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <strong className="block text-foreground">Call Us</strong>
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                    <p className="text-xs">Mon-Fri, 9am-5pm (Your Timezone)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <strong className="block text-foreground">Our Headquarters</strong>
                    123 Digital Avenue, Innovation City, TX 75001
                     <p className="text-xs">Visits by appointment only.</p>
                  </div>
                </li>
              </ul>
            </div>
             <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold font-headline mb-4 text-primary">Why Aeternix?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>"Done guessing. Let’s get clarity."</li>
                    <li>"Build. Automate. Scale. Repeat."</li>
                    <li>"This isn’t another strategy doc. It’s your growth engine."</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
