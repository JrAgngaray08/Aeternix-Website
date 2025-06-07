import SectionTitle from '@/components/shared/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Aeternix Digital Domination',
  description: 'Read the Terms of Service for Aeternix Digital Domination.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle title="Terms of Service" centered />
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our website ([Your Website URL]) and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
          </p>

          <h2>2. Changes to Terms or Services</h2>
          <p>
            We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.
          </p>

          <h2>3. Who May Use the Services</h2>
          <p>
            You may use the Services only if you are 18 years or older and capable of forming a binding contract with Aeternix Digital Domination and are not barred from using the Services under applicable law.
          </p>

          <h2>4. Use of Services</h2>
          <p>
            You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
          </p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Aeternix Digital Domination or users of the Services or expose them to liability.</li>
            {/* Add more restrictions as applicable */}
          </ul>
          
          <h2>5. Intellectual Property Rights</h2>
          <p>
            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Aeternix Digital Domination, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Services are provided on an "AS IS" and "AS AVAILABLE" basis. Aeternix Digital Domination makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall Aeternix Digital Domination, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
          </p>
          
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@aeternix.com.
          </p>
          <p className="mt-6 text-sm"><em>This is a template Terms of Service and should be reviewed and customized by legal counsel to fit your specific business practices and legal requirements.</em></p>
        </div>
      </div>
    </div>
  );
}
