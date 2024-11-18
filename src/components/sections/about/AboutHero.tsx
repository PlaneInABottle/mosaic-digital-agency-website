'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
    const t = useTranslations('pages.about');

    return (
        <section className="relative py-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
                    alt="Fitness Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
            </div>

            <div className="container relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white"
                    >
                        <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
                        <p className="text-lg text-gray-200 mb-8">{t('hero.subtitle')}</p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-3xl font-bold text-primary">10+</p>
                                <p className="text-sm text-gray-300">{t('hero.stats.years')}</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">500+</p>
                                <p className="text-sm text-gray-300">{t('hero.stats.members')}</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">50+</p>
                                <p className="text-sm text-gray-300">{t('hero.stats.trainers')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
