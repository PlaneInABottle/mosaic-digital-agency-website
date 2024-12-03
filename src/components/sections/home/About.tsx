/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Trophy, Users, Rocket, Target, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('pages.home.about');

    return (
        <section id="about" className="relative flex min-h-screen flex-col bg-black md:flex-row">
            {/* Fixed Left Side */}
            <div className="top-0 z-10 flex h-screen w-full flex-col items-center justify-center md:sticky md:w-1/2">
                <span className="mb-6 text-4xl font-bold text-white">{t('topper')}</span>
                <Image
                    src="/images/ben-png.png"
                    alt={t('imageAlt')}
                    width={560}
                    height={600}
                    className="rounded-2xl object-cover"
                />
            </div>

            {/* Scrollable Right Side */}
            <div className="w-full py-24 md:w-1/2">
                {/* Panel 1: Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-h-screen space-y-12 p-12"
                >
                    <div>
                        <h2 className="mb-6 text-4xl font-bold text-white">{t('title')}</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t('description')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">{t('company.title')}</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t('company.description')}
                        </p>
                    </div>
                </motion.div>

                {/* Panel 2: Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-h-screen p-12"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary">
                            <GraduationCap className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">
                                {t('stats.education.value')}
                            </h3>
                            <p className="text-muted-foreground">{t('stats.education.label')}</p>
                        </div>
                        <div className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary">
                            <Code2 className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">
                                {t('stats.approach.value')}
                            </h3>
                            <p className="text-muted-foreground">{t('stats.approach.label')}</p>
                        </div>
                        <div className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary">
                            <Trophy className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">
                                {t('stats.focus.value')}
                            </h3>
                            <p className="text-muted-foreground">{t('stats.focus.label')}</p>
                        </div>
                        <div className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary">
                            <Users className="mb-4 h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">
                                {t('stats.innovation.value')}
                            </h3>
                            <p className="text-muted-foreground">{t('stats.innovation.label')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Panel 3: Vision & Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-h-screen space-y-12 p-12"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Rocket className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">{t('vision.title')}</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t('vision.description')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Target className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">{t('mission.title')}</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t('mission.description')}
                        </p>
                    </div>
                </motion.div>

                {/* Panel 4: Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-h-screen p-12"
                >
                    <h3 className="mb-8 text-2xl font-bold text-white">{t('expertise.title')}</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        {Object.entries(t.raw('expertise.areas')).map(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ([key, area]: [string, any]) => (
                                <div
                                    key={key}
                                    className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary"
                                >
                                    <Wrench className="mb-4 h-8 w-8 text-primary" />
                                    <h4 className="mb-2 text-xl font-bold text-white">
                                        {area.title}
                                    </h4>
                                    <p className="text-muted-foreground">{area.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </motion.div>

                {/* Panel 5: Values */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-h-screen p-12"
                >
                    <h3 className="mb-8 text-2xl font-bold text-white">{t('values.title')}</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        {Object.entries(t.raw('values.list')).map(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ([key, value]: [string, any]) => (
                                <div
                                    key={key}
                                    className="rounded-lg border border-white/10 p-6 transition-colors hover:border-primary"
                                >
                                    <Shield className="mb-4 h-8 w-8 text-primary" />
                                    <h4 className="mb-2 text-xl font-bold text-white">
                                        {value.title}
                                    </h4>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
