'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';

export default function NavigationLink({ href, className, ...rest }: ComponentProps<typeof Link>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
                'inline-block px-4 py-2 text-muted-foreground transition-colors hover:text-foreground',
                'text-sm uppercase tracking-wider',
                className
            )}
            href={href}
            {...rest}
        />
    );
}
