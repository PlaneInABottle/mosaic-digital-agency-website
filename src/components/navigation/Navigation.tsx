'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileMenu from './MobileMenu';
import NavigationLink from './NavigationLink';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/data/navigation';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/en';
    const t = useTranslations('common.navigation');

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
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                !isHomePage || scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
            }`}
        >
            <nav className="container flex justify-between p-4 text-white">
                {/* Logo */}
                <div className="flex items-center">
                    <NavigationLink href="/" className="text-xl font-semibold">
                        Fitness GYM
                    </NavigationLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navigationLinks.map((link) => (
                        <NavigationLink key={link.href} href={link.href}>
                            {t(link.translationKey)}
                        </NavigationLink>
                    ))}
                </div>

                {/* Right Side Items */}
                <div className="flex items-center gap-4">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                    <MobileMenu scrolled={scrolled} isHomePage={isHomePage} />
                </div>
            </nav>
        </div>
    );
}
