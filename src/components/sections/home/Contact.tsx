'use client';

import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';

export default function Contact() {
    return (
        <section className="bg-background py-16 md:py-24" id="contact">
            <div className="container max-w-5xl">
                <div className="grid items-start gap-12 md:grid-cols-2">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
