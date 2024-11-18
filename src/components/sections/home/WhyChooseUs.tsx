'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const reasons = [
    {
        id: 'first',
        description: 'You will achieve your goal',
    },
    {
        id: 'second',
        description: "You'll learn how to be a champ",
    },
    {
        id: 'third',
        description: "You'll get the best results",
    },
];

export default function WhyChooseUs() {
    const t = useTranslations('pages.home.whyChooseUs');

    return (
        <section className="py-16 md:py-24 ">
            <div className="container px-4 md:px-16">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Video Section */}
                    <motion.div
                        className="relative aspect-video rounded-xl overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/UQ160-Pgu0M?si=GMocAyY4c1PMKAt0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        {/* <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center group cursor-pointer">
                            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="h-8 w-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            poster="/images/video-thumbnail.jpg"
                        >
                            <source
                                src="https://youtu.be/UQ160-Pgu0M?si=GMocAyY4c1PMKAt0"
                                type="video/mp4"
                            />
                        </video> */}
                    </motion.div>

                    {/* Content Section */}
                    <div>
                        <div className="mb-8">
                            <span className="text-primary font-medium uppercase">
                                {t('topper')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('title')}</h2>
                            <p className="text-muted-foreground mt-4">{t('description')}</p>
                        </div>

                        {/* Reasons list */}
                        <div className="space-y-4">
                            {reasons.map((reason) => (
                                <motion.div
                                    key={reason.id}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CheckCircle className="text-primary h-6 w-6 flex-shrink-0" />
                                    <span className="text-lg">{t(`reasons.${reason.id}`)}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="transition-colors hover:bg-primary-rgba/80 "
                            >
                                <Link href="/about">
                                    {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
