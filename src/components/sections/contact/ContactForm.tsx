'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
    const t = useTranslations('pages.home.contact.form');
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                alert(t('success'));
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            console.log((error as any).message);
            alert(t('error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium">{t('title')}</h2>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                </p>

                <div className="space-y-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('firstName')}
                        required
                        className="w-full rounded-none border border-border bg-background px-4 py-2 focus:outline-none focus:ring-1 focus:ring-foreground"
                    />

                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        placeholder={t('phone')}
                        required
                        className="w-full rounded-none border border-border bg-background px-4 py-2 focus:outline-none focus:ring-1 focus:ring-foreground"
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('email')}
                        required
                        className="w-full rounded-none border border-border bg-background px-4 py-2 focus:outline-none focus:ring-1 focus:ring-foreground"
                    />

                    <textarea
                        id="message"
                        name="message"
                        placeholder={t('message')}
                        required
                        rows={4}
                        className="w-full rounded-none border border-border bg-background px-4 py-2 focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border border-foreground bg-foreground px-6 py-3 text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
                >
                    {isSubmitting ? t('sending') : t('send')}
                </button>
            </form>
        </div>
    );
}
