'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/src/constants/env';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded border border-primary bg-background text-foreground p-3 ' +
  'focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  function validate(): Partial<FormFields> {
    const errs: Partial<FormFields> = {};
    if (!fields.name.trim() || fields.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters.';
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Please enter a valid email address.';
    if (!fields.message.trim() || fields.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
    } catch (err) {
      if (err instanceof Error) console.error(err.message);
      setStatus('error');
    }
  }

  const isLoading = status === 'loading';

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="w-full max-w-lg flex flex-col gap-4 text-left">
      {status === 'success' && (
        <p className="text-primary font-medium text-center">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or use the email link below.
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={fields.name}
          onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
          disabled={isLoading}
          className={inputClass}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={fields.email}
          onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
          disabled={isLoading}
          className={inputClass}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          disabled={isLoading}
          className={inputClass}
          placeholder="What's on your mind?"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="px-8 py-3 bg-primary text-background font-semibold rounded hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
