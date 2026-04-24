'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { countries, indianStates, userTypes } from '@/data/geo';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

const schema = z
  .object({
    firstName: z.string().min(2, 'Enter your first name'),
    lastName: z.string().min(1, 'Enter your last name'),
    company: z.string().min(2, 'Enter your company name'),
    addressLine1: z.string().min(3, 'Enter address line 1'),
    addressLine2: z.string().optional(),
    country: z.string().min(2, 'Select country'),
    state: z.string().min(1, 'Enter state / region'),
    city: z.string().min(1, 'Enter area / city'),
    pincode: z.string().min(3, 'Enter pincode / ZIP'),
    contactMethod: z.enum(['email', 'mobile']),
    email: z.string().email('Enter a valid email').optional().or(z.literal('')),
    mobile: z.string().min(6, 'Enter a valid phone').optional().or(z.literal('')),
    otp: z.string().optional(),
    userType: z.enum(userTypes as unknown as [string, ...string[]]),
    productInterest: z.string().min(1, 'Select a product interest'),
    message: z.string().min(10, 'Tell us a bit about your requirement (min 10 chars)'),
    seriousBuyer: z.boolean().refine((v) => v, 'Please confirm'),
    website: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.contactMethod === 'email' && !val.email) {
      ctx.addIssue({ code: 'custom', path: ['email'], message: 'Email is required' });
    }
    if (val.contactMethod === 'mobile' && !val.mobile) {
      ctx.addIssue({ code: 'custom', path: ['mobile'], message: 'Mobile is required' });
    }
  });

type FormValues = z.infer<typeof schema>;

export default function InquiryForm() {
  const [otpSent, setOtpSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      contactMethod: 'email',
      userType: 'Buyer',
      country: 'IN',
      productInterest: '',
      seriousBuyer: false,
      website: '',
    },
  });

  const country = watch('country');
  const contactMethod = watch('contactMethod');

  const stateOptions = useMemo(() => (country === 'IN' ? indianStates : null), [country]);

  const onSubmit = async (data: FormValues) => {
    if (data.website) return;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      alert('Unable to submit right now. Please try again or email us.');
    }
  };

  if (submitted) {
    return (
      <section id="inquiry" className="bg-[#F8F9FB] py-20 md:py-24">
        <div className="container max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-brand-green" aria-hidden />
          <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-navy">
            Thank you — your buyer enquiry has been received
          </h2>
          <p className="mt-3 text-brand-navy/70">
            Our team will reply with sample options, quotation guidance and next steps within one
            business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="bg-[#F8F9FB] py-20 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Buyer Enquiries"
          title="Request samples, quotations and buyer support"
          subtitle="A premium but practical enquiry flow for international buyers who want structured communication and quick follow-up."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid max-w-5xl gap-5 rounded-[32px] border border-brand-navy/10 bg-white p-6 shadow-card md:p-10"
          noValidate
        >
          <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register('website')} />

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="First name" error={errors.firstName?.message}>
              <input className={inputCls} {...register('firstName')} autoComplete="given-name" />
            </Field>
            <Field label="Last name" error={errors.lastName?.message}>
              <input className={inputCls} {...register('lastName')} autoComplete="family-name" />
            </Field>
          </div>

          <Field label="Company name" error={errors.company?.message}>
            <input className={inputCls} {...register('company')} autoComplete="organization" />
          </Field>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Address line 1" error={errors.addressLine1?.message}>
              <input className={inputCls} {...register('addressLine1')} autoComplete="address-line1" />
            </Field>
            <Field label="Address line 2 (optional)">
              <input className={inputCls} {...register('addressLine2')} autoComplete="address-line2" />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <Field label="Country" error={errors.country?.message}>
              <select className={inputCls} {...register('country')}>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="State / Region" error={errors.state?.message}>
              {stateOptions ? (
                <select className={inputCls} {...register('state')} defaultValue="">
                  <option value="" disabled>
                    Select state
                  </option>
                  {stateOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              ) : (
                <input className={inputCls} {...register('state')} />
              )}
            </Field>
            <Field label="Area / City" error={errors.city?.message}>
              <input className={inputCls} {...register('city')} autoComplete="address-level2" />
            </Field>
            <Field label="Pincode / ZIP" error={errors.pincode?.message}>
              <input className={inputCls} {...register('pincode')} autoComplete="postal-code" />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="User type" error={errors.userType?.message}>
              <select className={inputCls} {...register('userType')}>
                {userTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Product interest" error={errors.productInterest?.message}>
              <select className={inputCls} {...register('productInterest')} defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
                <option value="other">Other / Not listed</option>
              </select>
            </Field>
          </div>

          <fieldset className="rounded-[24px] border border-brand-navy/10 p-5">
            <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-brand-navy/70">
              Verify contact
            </legend>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="radio" value="email" {...register('contactMethod')} />
                Email
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="radio" value="mobile" {...register('contactMethod')} />
                Mobile
              </label>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
              {contactMethod === 'email' ? (
                <Field label="Email" error={errors.email?.message}>
                  <input className={inputCls} type="email" {...register('email')} autoComplete="email" />
                </Field>
              ) : (
                <Field label="Mobile (with country code)" error={errors.mobile?.message}>
                  <input className={inputCls} type="tel" {...register('mobile')} autoComplete="tel" />
                </Field>
              )}
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => setOtpSent(true)}
                  className="w-full rounded-full border border-brand-navy/20 px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-[#F8F9FB] md:w-auto"
                >
                  {otpSent ? 'Resend OTP' : 'Send OTP'}
                </button>
              </div>
            </div>
            {otpSent && (
              <div className="mt-3">
                <Field label="Enter OTP (demo)" error={errors.otp?.message}>
                  <input className={inputCls} inputMode="numeric" maxLength={6} {...register('otp')} />
                </Field>
              </div>
            )}
            <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-brand-navy/60">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              We do not share your contact with third parties.
            </p>
          </fieldset>

          <Field label="Tell us about your requirement" error={errors.message?.message}>
            <textarea
              className={cn(inputCls, 'min-h-[140px] resize-y')}
              placeholder="Sample requirement, target market, estimated volume, packing format, preferred quotation terms..."
              {...register('message')}
            />
          </Field>

          <label className="inline-flex items-start gap-3 rounded-2xl border border-brand-navy/8 bg-[#F8F9FB] px-4 py-3 text-sm text-brand-navy/84">
            <input type="checkbox" className="mt-1" {...register('seriousBuyer')} />
            <span>I am a serious B2B buyer / trade partner and agree to be contacted about my enquiry.</span>
          </label>
          {errors.seriousBuyer?.message ? (
            <p className="-mt-3 text-sm text-red-600">{errors.seriousBuyer.message}</p>
          ) : null}

          <div className="flex flex-col gap-4 border-t border-brand-navy/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-brand-navy/65">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="font-medium text-brand-navy underline underline-offset-4">
                Privacy Policy
              </a>
              .
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send className="h-4 w-4" aria-hidden />
              {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-navy">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

const inputCls =
  'h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 text-sm text-brand-navy outline-none transition placeholder:text-brand-navy/35 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20';
