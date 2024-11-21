'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'tr' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            className={`text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm ${
                isPending ? 'opacity-50' : ''
            }`}
            disabled={isPending}
            onClick={toggleLocale}
        >
            {locale === 'en' ? 'TR' : 'EN'}
        </button>
    );
}
