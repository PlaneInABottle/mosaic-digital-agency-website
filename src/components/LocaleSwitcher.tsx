'use client';

import { useLocale } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isPending, startTransition] = useTransition();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'tr' : 'en';
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate params
                { pathname, params },
                { locale: nextLocale }
            );
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
