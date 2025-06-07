 'use server';

/**
 * @fileOverview AI-powered content suggestion tool for blog posts.
 *
 * - generateContentSuggestions - A function that generates content suggestions for blog posts.
 * - ContentSuggestionsInput - The input type for the generateContentSuggestions function.
 * - ContentSuggestionsOutput - The return type for the generateContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentSuggestionsInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate content suggestions.'),
  targetAudience: z.string().describe('The intended audience for the blog post.'),
  keywords: z.string().describe('Relevant keywords to include in the content suggestions.'),
});
export type ContentSuggestionsInput = z.infer<typeof ContentSuggestionsInputSchema>;

const ContentSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of content suggestions for the blog post.'),
});
export type ContentSuggestionsOutput = z.infer<typeof ContentSuggestionsOutputSchema>;

export async function generateContentSuggestions(input: ContentSuggestionsInput): Promise<ContentSuggestionsOutput> {
  return generateContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentSuggestionsPrompt',
  input: {schema: ContentSuggestionsInputSchema},
  output: {schema: ContentSuggestionsOutputSchema},
  prompt: `You are a marketing expert specializing in content creation for blog posts. Generate content suggestions based on the provided topic, target audience, and keywords.

Topic: {{{topic}}}
Target Audience: {{{targetAudience}}}
Keywords: {{{keywords}}}

Provide at least 3 content suggestions.`,
});

const generateContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateContentSuggestionsFlow',
    inputSchema: ContentSuggestionsInputSchema,
    outputSchema: ContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
