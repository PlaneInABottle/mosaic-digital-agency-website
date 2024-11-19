'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
    const t = useTranslations('pages.home.contact.info');
    const generalT = useTranslations('common.general');

    const contactDetails = [
        {
            icon: Mail,
            label: 'email',
            value: generalT('email'),
            href: `mailto:${generalT('email')}`,
        },
        {
            icon: Phone,
            label: 'phone',
            value: generalT('phone'),
            href: `tel:${generalT('phone').replace(/\s/g, '')}`,
        },
        {
            icon: MapPin,
            label: 'address',
            value: generalT('address'),
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>

            <div className="space-y-6">
                {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                        <div className="flex-shrink-0">
                            <detail.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-medium">{t(`${detail.label}Title`)}</h3>
                            {detail.href ? (
                                <a
                                    href={detail.href}
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    {detail.value}
                                </a>
                            ) : (
                                <p className="text-muted-foreground whitespace-pre-line">
                                    {detail.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Map Embed */}
            <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120997!2d28.978058776944614!3d41.0066902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Tower!5e0!3m2!1sen!2str!4v1696431074374!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
