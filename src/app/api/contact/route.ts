import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().min(1),
  addressLine1: z.string().min(1),
  addressLine2: z.string().optional(),
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  pincode: z.string().min(1),
  contactMethod: z.enum(['email', 'mobile']),
  email: z.string().email().optional().or(z.literal('')),
  mobile: z.string().optional().or(z.literal('')),
  otp: z.string().optional(),
  userType: z.string(),
  productInterest: z.string(),
  message: z.string().min(5),
  seriousBuyer: z.boolean(),
  website: z.string().optional(), // honeypot (any value — checked at runtime)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    if (parsed.website) {
      return NextResponse.json({ ok: true }, { status: 200 }); // silently accept bots
    }
    // TODO: integrate with CRM / email service (e.g. Resend, SendGrid, HubSpot).
    console.log('[inquiry]', {
      at: new Date().toISOString(),
      from: `${parsed.firstName} ${parsed.lastName}`,
      company: parsed.company,
      country: parsed.country,
      product: parsed.productInterest,
      userType: parsed.userType,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
