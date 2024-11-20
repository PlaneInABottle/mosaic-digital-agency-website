'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';

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
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium">{t('title')}</h2>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>
            <div className="space-y-6">
                {contactDetails.map((detail) => (
                    <a
                        key={detail.label}
                        href={detail.href}
                        className="group flex items-center gap-4"
                    >
                        <detail.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                            {detail.value}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
