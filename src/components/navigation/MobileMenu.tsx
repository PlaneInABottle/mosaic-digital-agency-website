'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/navigation';

export default function MobileMenu({
    scrolled,
    isHomePage,
}: {
    scrolled: boolean;
    isHomePage: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('common.navigation');

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            y: -4,
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground transition-colors hover:text-muted-foreground"
                aria-label={t('toggleMenu')}
            >
                <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-border ${
                            !isHomePage || scrolled
                                ? 'bg-background/80 backdrop-blur-sm'
                                : 'bg-background/80 backdrop-blur-sm'
                        }`}
                    >
                        <motion.div variants={containerVariants} className="flex flex-col py-4">
                            {navigationLinks.map((link) => (
                                <motion.div key={link.href} variants={linkVariants}>
                                    <NavigationLink
                                        onClick={() => setIsOpen(false)}
                                        href={link.href}
                                        className="w-full px-8 py-2 text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {t(link.translationKey)}
                                    </NavigationLink>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
