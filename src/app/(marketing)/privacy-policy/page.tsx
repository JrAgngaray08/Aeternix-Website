import SectionTitle from '@/components/shared/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aeternix Digital Domination',
  description: 'Read the Privacy Policy for Aeternix Digital Domination.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle title="Privacy Policy" centered />
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Aeternix Digital Domination ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@aeternix.com.
          </p>
          <p>
            This privacy notice describes how we might use your information if you visit our website at [Your Website URL], or otherwise engage with us.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as submitting a contact form) or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, Company Name, and any other information you choose to provide.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To send administrative information to you.</li>
            <li>To send you marketing and promotional communications.</li>
            {/* Add more uses as applicable */}
          </ul>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2>5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>

          <h2>6. How Do We Keep Your Information Safe?</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
          
          <h2>7. Your Privacy Rights</h2>
          <p>
            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
          </p>

          <h2>8. Updates To This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2>9. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at privacy@aeternix.com or by post to:
          </p>
          <p>
            Aeternix Digital Domination<br />
            123 Digital Avenue<br />
            Innovation City, TX 75001<br />
            United States
          </p>
          <p className="mt-6 text-sm"><em>This is a template Privacy Policy and should be reviewed and customized by legal counsel to fit your specific business practices and legal requirements.</em></p>
        </div>
      </div>
    </div>
  );
}
