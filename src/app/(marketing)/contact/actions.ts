
'use server';

import { z } from 'zod';
import { ContactFormSchema } from '@/lib/schemas';

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    businessName?: string[];
    industry?: string[];
    struggle?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    businessName: formData.get('businessName'),
    industry: formData.get('industry'),
    struggle: formData.get('struggle'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, businessName, industry, struggle } = validatedFields.data;

  console.log('Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Business Name:', businessName);
  console.log('Industry:', industry);
  console.log('Struggle:', struggle);

  await new Promise(resolve => setTimeout(resolve, 1000));

  let successMessage = `Thank you, ${name}! Your strategy session request regarding your ${industry.toLowerCase()} business has been received. We'll review your challenges and get back to you soon.`;
  if (industry === "Other" && businessName) {
     successMessage = `Thank you, ${name} from ${businessName}! Your strategy session request has been received. We'll review your challenges and get back to you soon.`
  } else if (industry === "Other") {
    successMessage = `Thank you, ${name}! Your strategy session request has been received. We'll review your challenges and get back to you soon.`
  }

  return {
    message: successMessage,
    status: 'success',
  };
}
