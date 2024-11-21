'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import NavigationLink from './NavigationLink';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/data/navigation';
import LocaleSwitcher from '../LocaleSwitcher';
import { Phone } from 'lucide-react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/en';
    const t = useTranslations('common.navigation');
    const generalT = useTranslations('common.general');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                !isHomePage || scrolled
                    ? 'border-b border-border bg-background/80 backdrop-blur-sm'
                    : 'bg-transparent'
            }`}
        >
            <nav className="container flex items-center justify-between">
                {/* Logo */}
                <div>
                    <NavigationLink
                        href="/"
                        className="text-xs font-normal tracking-tight text-foreground hover:text-foreground md:text-xl"
                    >
                        {generalT('companyName')}
                    </NavigationLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-8 lg:flex">
                    {/* Phone Number */}
                    <a
                        href={`tel:${generalT('phone').replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={t('callUs')}
                    >
                        <Phone className="h-4 w-4" />
                        <span>{generalT('phone')}</span>
                    </a>

                    {/* Navigation Links */}
                    {navigationLinks.map((link) => (
                        <NavigationLink key={link.href} href={link.href}>
                            {t(link.translationKey)}
                        </NavigationLink>
                    ))}

                    <LocaleSwitcher />
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-4 lg:hidden">
                    <a
                        href={`tel:${generalT('phone').replace(/\s/g, '')}`}
                        className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={t('callUs')}
                    >
                        <Phone className="h-4 w-4" />
                    </a>

                    <LocaleSwitcher />
                    <MobileMenu scrolled={scrolled} isHomePage={isHomePage} />
                </div>
            </nav>
        </div>
    );
}
