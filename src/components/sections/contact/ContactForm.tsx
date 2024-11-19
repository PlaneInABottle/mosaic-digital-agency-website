'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
// import { usePathname } from 'next/navigation';

export default function ContactForm() {
    const t = useTranslations('pages.home.contact.form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const pathname = usePathname();

    // const locale = pathname.split('/')[1]; // Get current locale from path

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        try {
            const response = await fetch(`/__forms.html`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                body: new URLSearchParams(data as any).toString(),
            });

            if (response.ok) {
                form.reset();
                alert('Thank you for your message. We will get back to you soon!');
            } else {
                throw new Error('Form submission failed');
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            console.log((error as any).message);
            alert('Sorry, there was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-card rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl text-foreground font-semibold">{t('title')}</h2>
                <p className="text-muted-foreground mt-2">{t('subtitle')}</p>
            </div>
            <div className="p-6">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don&apos;t fill this out if you&apos;re human:{' '}
                            <input name="bot-field" />
                        </label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium">
                                {t('firstName')}
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="w-full px-3 py-2 border rounded-md bg-background"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium">
                                {t('lastName')}
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="w-full px-3 py-2 border rounded-md bg-background"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            {t('email')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 border rounded-md bg-background"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                            {t('phone')}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-md bg-background"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            {t('message')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-3 py-2 border rounded-md bg-background"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? t('sending') : t('send')}
                    </Button>
                </form>
            </div>
        </section>
    );
}
