
'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from './actions';
import { ContactFormSchema } from '@/lib/schemas';
import { Loader2 } from 'lucide-react';

type ContactFormData = z.infer<typeof ContactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Book Free Strategy Session
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: '', status: 'idle' };
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, initialState);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      struggle: '',
      industry: undefined,
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      reset();
    } else if (state.status === 'error' && state.message && !state.errors) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, reset]);

  const fieldErrors = state.errors || {};

  const handleFormSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof ContactFormData>).forEach((key) => {
        const value = data[key];
        if (value !== undefined && value !== null) {
             formData.append(key, String(value));
        }
    });
    formAction(formData);
  };


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...register('name')} placeholder="e.g., Jane Doe" aria-invalid={!!errors.name || !!fieldErrors.name} />
        {(errors.name || fieldErrors.name) && (
          <p className="text-sm text-destructive mt-1">{errors.name?.message || fieldErrors.name?.[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...register('email')} placeholder="e.g., jane.doe@example.com" aria-invalid={!!errors.email || !!fieldErrors.email} />
        {(errors.email || fieldErrors.email) && (
          <p className="text-sm text-destructive mt-1">{errors.email?.message || fieldErrors.email?.[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input id="businessName" {...register('businessName')} placeholder="e.g., Doe Realty Co." aria-invalid={!!errors.businessName || !!fieldErrors.businessName} />
        {(errors.businessName || fieldErrors.businessName) && (
          <p className="text-sm text-destructive mt-1">{errors.businessName?.message || fieldErrors.businessName?.[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="industry">Select Your Industry</Label>
        <Controller
            name="industry"
            control={control}
            render={({ field }) => (
                 <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <SelectTrigger id="industry" aria-invalid={!!errors.industry || !!fieldErrors.industry}>
                        <SelectValue placeholder="Choose your industry..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                        <SelectItem value="E-Commerce">E-Commerce</SelectItem>
                        <SelectItem value="SMB Services">SMB Services</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
            )}
        />
        {(errors.industry || fieldErrors.industry) && (
          <p className="text-sm text-destructive mt-1">{errors.industry?.message || fieldErrors.industry?.[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="struggle">What Are You Struggling With?</Label>
        <Textarea id="struggle" {...register('struggle')} placeholder="Tell us about your main challenges or goals (e.g., increasing leads, improving SEO, scaling ads)..." rows={5} aria-invalid={!!errors.struggle || !!fieldErrors.struggle} />
        {(errors.struggle || fieldErrors.struggle) && (
          <p className="text-sm text-destructive mt-1">{errors.struggle?.message || fieldErrors.struggle?.[0]}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
