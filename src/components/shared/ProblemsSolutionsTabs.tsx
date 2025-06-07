
'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Brain, FileWarning, BarChart as LucideBarChart, AlertTriangle, Zap, ShieldCheck, PlayCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

// Map icon names to actual Lucide components
const iconMap: { [key: string]: LucideIcon } = {
  Brain,
  // Briefcase, // Removed as per previous request
  FileWarning,
  BarChart: LucideBarChart,
  AlertTriangle,
  Zap,
  ShieldCheck,
  PlayCircle,
  Lightbulb,
};

type Problem = {
  id: string;
  title: string;
  description: string;
  iconName: string; // Changed from icon: LucideIcon
};

type SolutionItem = {
  title: string;
  iconName: string; // Changed from icon: LucideIcon
  items: string[];
  id: string;
};

interface ProblemsSolutionsTabsProps {
  problems: Problem[];
  solutions: SolutionItem[];
}

export default function ProblemsSolutionsTabs({ problems, solutions }: ProblemsSolutionsTabsProps) {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems');

  const tabButtonBaseClass = "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 w-full sm:w-auto";
  const activeTabClass = "bg-primary/10 text-primary border border-primary shadow-md";
  const inactiveTabClass = "text-muted-foreground hover:text-primary-foreground hover:bg-muted/30";

  return (
    <div className="w-full">
      {/* Tab Buttons Frame */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 bg-card/50 backdrop-blur-md p-1.5 rounded-full border border-border/30 shadow-lg mb-8 md:mb-12 max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('problems')}
          className={cn(
            tabButtonBaseClass,
            activeTab === 'problems' ? activeTabClass : inactiveTabClass
          )}
        >
          Problems We Solve
        </button>
        <button
          onClick={() => setActiveTab('solutions')}
          className={cn(
            tabButtonBaseClass,
            activeTab === 'solutions' ? activeTabClass : inactiveTabClass
          )}
        >
          How We Solve It
        </button>
      </div>

      {/* Content Area */}
      <div className="relative min-h-[400px] p-6 sm:p-8 animate-fade-in">
        {activeTab === 'problems' && (
          <div key="problems-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {problems.map((problem) => {
                const IconComponent = iconMap[problem.iconName];
                return (
                  <Card
                    key={problem.id}
                    className="bg-card/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col text-card-foreground"
                  >
                    <CardHeader className="flex flex-col items-center text-center gap-2 pb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mb-2">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary shrink-0" />}
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl leading-tight">{problem.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div key="solutions-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {solutions.map((solution) => {
                const IconComponent = iconMap[solution.iconName];
                return(
                  <Card
                    key={solution.id}
                    className="bg-card/70 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col text-card-foreground"
                  >
                    <CardHeader className="flex flex-col items-center text-center pb-4"> {/* Added flex flex-col */}
                      <div className="p-3.5 bg-accent/10 rounded-full mb-3">
                        {IconComponent && <IconComponent className="w-9 h-9 text-primary" />}
                      </div>
                      <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-center"> {/* Added text-center */}
                      <ul className="space-y-1.5 text-sm text-muted-foreground inline-block text-left"> {/* Added inline-block text-left */}
                        {solution.items.map(item => (
                          <li key={item} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
