'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('pages.home.about');

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Technology SVG Background */}

            <div className="container relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-medium uppercase tracking-wider"
                        >
                            {t('topper')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg mb-8"
                        >
                            {t('description')}
                        </motion.p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                                <h3 className="text-2xl font-bold">{t('stats.education.value')}</h3>
                                <p className="text-muted-foreground">
                                    {t('stats.education.label')}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Code2 className="h-8 w-8 text-primary mb-2" />
                                <h3 className="text-2xl font-bold">
                                    {t('stats.experience.value')}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t('stats.experience.label')}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Trophy className="h-8 w-8 text-primary mb-2" />
                                <h3 className="text-2xl font-bold">{t('stats.projects.value')}</h3>
                                <p className="text-muted-foreground">{t('stats.projects.label')}</p>
                            </div>
                            <div className="space-y-2">
                                <Users className="h-8 w-8 text-primary mb-2" />
                                <h3 className="text-2xl font-bold">{t('stats.clients.value')}</h3>
                                <p className="text-muted-foreground">{t('stats.clients.label')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
                        <Image
                            src="/images/odtu.jpg"
                            alt="ODTÜ Campus"
                            fill
                            className="object-cover object-left rounded-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
