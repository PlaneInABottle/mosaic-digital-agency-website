'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';

export default function Contact() {
    const t = useTranslations('pages.home.contact');

    return (
        <section className="py-16 md:py-24 bg-muted">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
