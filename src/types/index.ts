
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  sectionId: string;
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export type Challenge = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  realEstateFocus?: string;
  ecommerceFocus?: string;
};

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

// Updated CaseStudy type
export type CaseStudy = {
  id: string;
  clientType: 'Real Estate' | 'E-Commerce' | 'SMB Services' | 'All Clients'; // To match new copy categories
  title: string; // Example: "Luxury Condo Sales Skyrocket" (optional, could be derived or used for internal linking)
  problem: string;
  solution: string;
  result: string;
  imageUrl: string; // Keep for visual representation
  imageHint: string;
};

export type StatItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  frequency: string;
  description: string; 
  features: string[];
  cta: string;
  popular?: boolean;
  specialOffer?: {
    originalPrice?: string; // Made optional as not all tiers have it
    details: string[];
  };
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string; // For data-ai-hint
};

