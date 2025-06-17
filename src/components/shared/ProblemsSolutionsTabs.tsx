
'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, FileWarning, BarChart as LucideBarChart, AlertTriangle, Zap, ShieldCheck, PlayCircle, Lightbulb,
  Compass, MegaphoneOff, MonitorX, TrendingDown, BarChartHorizontalBig, SlidersHorizontal,
  Target, Sparkles, MousePointerClick, PieChart, Bot, TrendingUp, CheckCircle // Added TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Map icon names to actual Lucide components
const iconMap: { [key: string]: LucideIcon } = {
  Brain,
  FileWarning,
  BarChart: LucideBarChart, // Alias for existing BarChart
  AlertTriangle,
  Zap,
  ShieldCheck,
  PlayCircle,
  Lightbulb,
  Compass,
  MegaphoneOff,
  MonitorX,
  TrendingDown,
  BarChartHorizontalBig,
  SlidersHorizontal,
  Target,
  Sparkles,
  MousePointerClick,
  TrendingUp: TrendingUp, 
  PieChart,
  Bot,
  CheckCircle, // Kept CheckCircle as it was previously there, good for general use
};

type Problem = {
  id: string;
  title: string;
  description: string; // This is the subheading
  iconName: string;
};

type SolutionItem = {
  id: string;
  title: string;
  description: string; // This is the subheading
  iconName: string;
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

  const cardWrapperBaseClass = "group relative rounded-lg";
  const cardWrapperHoverClass = "hover:p-[2px] hover:bg-gradient-to-r hover:from-primary hover:via-purple-500 hover:to-accent hover:animate-border-flow";
  const cardInnerBaseClass = "bg-card/70 backdrop-blur-sm transition-shadow duration-300 ease-in-out flex flex-col text-card-foreground h-full";
  const cardInnerHoverRadiusClass = "group-hover:rounded-[calc(var(--radius)-2px)]";


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
      <div className="relative min-h-[300px] p-4 sm:p-6 animate-fade-in"> {/* Adjusted min-height and padding */}
        {activeTab === 'problems' && (
          <div key="problems-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {problems.map((problem) => {
                const IconComponent = iconMap[problem.iconName];
                return (
                  <div 
                    key={problem.id} 
                    className={cn(cardWrapperBaseClass, cardWrapperHoverClass)}
                    style={{ backgroundSize: '400% 400%' }}
                  >
                    <Card
                      className={cn(cardInnerBaseClass, cardInnerHoverRadiusClass)}
                    >
                      <CardHeader className="flex flex-col items-center text-center gap-2 pb-4 pt-6 flex-grow"> {/* Added flex-grow */}
                        <div className="p-3 bg-primary/10 rounded-lg mb-2">
                          {IconComponent && <IconComponent className="w-8 h-8 text-primary shrink-0" />}
                        </div>
                        <div className="flex flex-col flex-grow justify-center"> {/* Centering text vertically */}
                          <CardTitle className="font-headline text-xl leading-tight">{problem.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1 px-2">{problem.description}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
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
                  <div 
                    key={solution.id} 
                    className={cn(cardWrapperBaseClass, cardWrapperHoverClass)}
                    style={{ backgroundSize: '400% 400%' }}
                  >
                    <Card
                      className={cn(cardInnerBaseClass, cardInnerHoverRadiusClass)}
                    >
                      <CardHeader className="flex flex-col items-center text-center gap-2 pb-4 pt-6 flex-grow"> {/* Added flex-grow */}
                        <div className="p-3.5 bg-accent/10 rounded-full mb-3">
                          {IconComponent && <IconComponent className="w-9 h-9 text-primary" />}
                        </div>
                        <div className="flex flex-col flex-grow justify-center"> {/* Centering text vertically */}
                          <CardTitle className="font-headline text-xl leading-tight">{solution.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1 px-2">{solution.description}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

