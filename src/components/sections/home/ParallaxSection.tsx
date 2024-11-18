'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ParallaxSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']); // Reduced movement range
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]); // Consistent opacity
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]); // Subtle scale

    const t = useTranslations('pages.home.parallax');

    return (
        <section
            ref={ref}
            className="relative h-[80vh] md:h-[80vh] overflow-hidden flex items-center justify-center"
        >
            {/* Background Image with Parallax */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container text-center text-white"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200"
                >
                    {t('description')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button
                        asChild
                        size="lg"
                        variant="default"
                        className="bg-primary hover:bg-primary/90"
                    >
                        <Link href="/contact" className="flex items-center gap-2">
                            {t('cta')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
