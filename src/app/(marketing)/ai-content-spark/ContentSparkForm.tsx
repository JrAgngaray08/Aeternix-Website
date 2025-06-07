
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateContentSuggestions, type ContentSuggestionsInput, type ContentSuggestionsOutput } from '@/ai/flows/content-spark';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';

const ContentSparkSchema = z.object({
  topic: z.string().min(3, { message: "Topic must be at least 3 characters." }),
  targetAudience: z.string().min(3, { message: "Target audience must be at least 3 characters." }),
  keywords: z.string().min(3, { message: "Keywords must be at least 3 characters (comma-separated)." }),
});

type ContentSparkFormData = z.infer<typeof ContentSparkSchema>;

export default function ContentSparkForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContentSparkFormData>({
    resolver: zodResolver(ContentSparkSchema),
  });

  const onSubmit = async (data: ContentSparkFormData) => {
    setIsLoading(true);
    setSuggestions(null);
    setError(null);
    try {
      const result: ContentSuggestionsOutput = await generateContentSuggestions(data);
      if (result && result.suggestions && result.suggestions.length > 0) {
        setSuggestions(result.suggestions);
        toast({
          title: 'Suggestions Generated!',
          description: 'Your content ideas are ready below.',
        });
      } else {
        setError('No suggestions were generated. Try refining your input.');
        toast({
          title: 'No Suggestions',
          description: 'The AI could not generate suggestions for this input. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (e: any) {
      console.error("Error generating content suggestions:", e);
      const errorMessage = e.message || "An unexpected error occurred while generating suggestions.";
      setError(errorMessage);
      toast({
        title: 'Error Generating Suggestions',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-primary" />
            Generate Content Ideas
          </CardTitle>
          <CardDescription>
            Input your topic, target audience, and keywords to spark AI-powered content suggestions for your blog.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="topic">Blog Post Topic</Label>
              <Input id="topic" {...register('topic')} placeholder="e.g., Latest Trends in Digital Real Estate Marketing" />
              {errors.topic && <p className="text-sm text-destructive mt-1">{errors.topic.message}</p>}
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input id="targetAudience" {...register('targetAudience')} placeholder="e.g., Real estate agents, E-commerce store owners" />
              {errors.targetAudience && <p className="text-sm text-destructive mt-1">{errors.targetAudience.message}</p>}
            </div>

            <div>
              <Label htmlFor="keywords">Keywords (comma-separated)</Label>
              <Input id="keywords" {...register('keywords')} placeholder="e.g., virtual tours, SEO, social commerce, lead conversion" />
              {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
            </div>
            
            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Suggestions
              </Button>
              <Button type="button" variant="outline" onClick={() => { reset(); setSuggestions(null); setError(null); }} disabled={isLoading} className="w-full sm:w-auto">
                Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="font-headline text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {suggestions && suggestions.length > 0 && (
        <>
          <Card className="shadow-lg animate-fade-in-up">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Generated Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="bg-muted/50 p-3 rounded-md">{suggestion}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="mt-10 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 transition-all duration-300 ease-in-out hover:shadow-accent-glow hover:-translate-y-1"
            >
              <Link href="/contact?interest=content_strategy_assistance">
                Learn How Aeternix Helps Businesses with Content
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
