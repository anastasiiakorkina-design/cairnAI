'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

const demoFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email'),
  organisationName: z.string().min(2, 'Organisation name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  organisationType: z.enum([
    'local-authority',
    'nhs-board',
    'university',
    'scottish-government',
    'private-sector',
    'third-sector',
    'other',
  ]),
  employeeCount: z.enum([
    '1-50',
    '51-250',
    '251-1000',
    '1001-5000',
    '5000+',
  ]),
  specificNeeds: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In production, send to your backend/CRM
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-light py-16 md:py-24 lg:py-32" id="demo-form">
      <div className="container-max max-w-2xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4">Schedule Your Demo</h2>
          <p className="text-lg text-cairn-slate-grey">
            Fill in your details below and we'll be in touch within 4 hours to arrange a time that works for you.
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-cairn-glen-green/10 border border-cairn-glen-green text-cairn-glen-green rounded-lg">
            ✓ Thank you! We've received your demo request. Check your email for confirmation.
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            ✕ {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Work Email *
              </label>
              <input
                type="email"
                placeholder="your.email@organisation.co.uk"
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('workEmail')}
              />
              {errors.workEmail && (
                <p className="text-red-600 text-sm mt-1">{errors.workEmail.message}</p>
              )}
            </div>

            {/* Organisation Name */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Organisation Name *
              </label>
              <input
                type="text"
                placeholder="Your organisation"
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('organisationName')}
              />
              {errors.organisationName && (
                <p className="text-red-600 text-sm mt-1">{errors.organisationName.message}</p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Job Title *
              </label>
              <input
                type="text"
                placeholder="e.g., Head of Procurement"
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('jobTitle')}
              />
              {errors.jobTitle && (
                <p className="text-red-600 text-sm mt-1">{errors.jobTitle.message}</p>
              )}
            </div>

            {/* Organisation Type */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Organisation Type *
              </label>
              <select
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('organisationType')}
              >
                <option value="">Select your organisation type</option>
                <option value="local-authority">Local Authority</option>
                <option value="nhs-board">NHS Board</option>
                <option value="university">University/College</option>
                <option value="scottish-government">Scottish Government Agency</option>
                <option value="private-sector">Private Sector</option>
                <option value="third-sector">Third Sector/Social Enterprise</option>
                <option value="other">Other</option>
              </select>
              {errors.organisationType && (
                <p className="text-red-600 text-sm mt-1">{errors.organisationType.message}</p>
              )}
            </div>

            {/* Employee Count */}
            <div>
              <label className="block text-sm font-semibold text-cairn-navy mb-2">
                Number of Employees *
              </label>
              <select
                className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent"
                {...register('employeeCount')}
              >
                <option value="">Select employee range</option>
                <option value="1-50">1-50</option>
                <option value="51-250">51-250</option>
                <option value="251-1000">251-1,000</option>
                <option value="1001-5000">1,001-5,000</option>
                <option value="5000+">5,000+</option>
              </select>
              {errors.employeeCount && (
                <p className="text-red-600 text-sm mt-1">{errors.employeeCount.message}</p>
              )}
            </div>
          </div>

          {/* Specific Needs */}
          <div>
            <label className="block text-sm font-semibold text-cairn-navy mb-2">
              Anything specific you'd like to see? (optional)
            </label>
            <textarea
              placeholder="Tell us about your key procurement challenges..."
              rows={4}
              className="w-full px-4 py-3 border border-cairn-frost rounded-lg focus:outline-none focus:ring-2 focus:ring-cairn-blue focus:border-transparent resize-none"
              {...register('specificNeeds')}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary bg-cairn-blue text-white font-semibold py-3 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
            {isSubmitting ? 'Submitting...' : 'Book Your Demo'}
          </button>

          <p className="text-center text-sm text-cairn-slate-grey">
            We'll respond within 4 hours during business hours. No spam, no hard sell.
          </p>
        </form>
      </div>
    </section>
  );
}
