
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }).optional(),
  industry: z.enum(["Real Estate", "E-Commerce", "SMB Services", "Other"], {
    errorMap: () => ({ message: "Please select your industry." }),
  }),
  struggle: z.string().min(10, { message: "Please describe your challenge in at least 10 characters." }),
});
