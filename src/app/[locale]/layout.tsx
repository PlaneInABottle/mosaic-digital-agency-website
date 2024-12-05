import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import { routing } from '@/i18n/routing';

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata.layout' });

    return {
        title: t('title'),
        description: t('description'), // Add this translation
        openGraph: {
            title: t('title'),
            description: t('description'), // Add this translation
            siteName: t('siteName'), // Add this translation
            locale: locale,
            type: 'website',
            images: [
                {
                    url: '/images/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: t('title'),
                },
            ],
        },
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
