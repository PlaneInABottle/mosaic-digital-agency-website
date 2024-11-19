'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('pages.home.about');

    return (
        <section id="about" className="relative overflow-hidden bg-black">
            {/* Technology SVG Background */}

            <div className="container relative py-24">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-medium uppercase tracking-wider text-primary"
                        >
                            {t('topper')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-6 mt-4 text-4xl font-bold md:text-5xl"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mb-8 text-lg text-muted-foreground"
                        >
                            {t('description')}
                        </motion.p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <GraduationCap className="mb-2 h-8 w-8 text-primary" />
                                <h3 className="text-2xl font-bold">{t('stats.education.value')}</h3>
                                <p className="text-muted-foreground">
                                    {t('stats.education.label')}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Code2 className="mb-2 h-8 w-8 text-primary" />
                                <h3 className="text-2xl font-bold">{t('stats.approach.value')}</h3>
                                <p className="text-muted-foreground">{t('stats.approach.label')}</p>
                            </div>
                            <div className="space-y-2">
                                <Trophy className="mb-2 h-8 w-8 text-primary" />
                                <h3 className="text-2xl font-bold">{t('stats.focus.value')}</h3>
                                <p className="text-muted-foreground">{t('stats.focus.label')}</p>
                            </div>
                            <div className="space-y-2">
                                <Users className="mb-2 h-8 w-8 text-primary" />
                                <h3 className="text-2xl font-bold">
                                    {t('stats.innovation.value')}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t('stats.innovation.label')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative hidden h-[600px] lg:block"
                    >
                        <div className="absolute inset-0 z-10 w-1/2 bg-gradient-to-r from-black to-transparent" />
                        <Image
                            src="/images/ben-png.png"
                            alt="Ben"
                            fill
                            className="rounded-2xl object-cover object-top"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
