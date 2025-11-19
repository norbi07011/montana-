import { z } from 'zod';

// Phone validation for Dutch/International numbers
const phoneRegex = /^(\+31|0)[1-9][0-9]{8}$/;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Naam moet minimaal 2 tekens bevatten')
    .max(100, 'Naam mag maximaal 100 tekens bevatten'),
  
  email: z.string()
    .email('Ongeldig e-mailadres')
    .optional()
    .or(z.literal('')),
  
  phone: z.string()
    .regex(phoneRegex, 'Ongeldig telefoonnummer (gebruik format: 0612345678 of +31612345678)')
    .or(z.string().min(10, 'Telefoonnummer moet minimaal 10 cijfers bevatten')),
  
  address: z.string()
    .min(5, 'Adres moet minimaal 5 tekens bevatten')
    .max(200, 'Adres mag maximaal 200 tekens bevatten'),
  
  city: z.string()
    .min(2, 'Stad moet minimaal 2 tekens bevatten')
    .max(100, 'Stad mag maximaal 100 tekens bevatten'),
  
  desc: z.string()
    .min(10, 'Beschrijving moet minimaal 10 tekens bevatten')
    .max(1000, 'Beschrijving mag maximaal 1000 tekens bevatten')
    .optional(),
});

// Service form schema (extends contact form)
export const serviceFormSchema = contactFormSchema.extend({
  service: z.string().min(1, 'Selecteer een service'),
  urgency: z.string().optional(),
  location: z.string().optional(),
  propertyType: z.string().optional(),
  boilerBrand: z.string().optional(),
  boilerAge: z.string().optional(),
  heatingSystem: z.string().optional(),
  energyLabel: z.string().optional(),
  roofType: z.string().optional(),
  dimensions: z.string().optional(),
  currentState: z.string().optional(),
  desiredStyle: z.string().optional(),
  budget: z.string().optional(),
  surface: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ServiceFormData = z.infer<typeof serviceFormSchema>;
