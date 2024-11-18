'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, Code, LineChart } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('pages.home.hero');

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background with modern digital agency aesthetic */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/5882869/pexels-photo-5882869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Digital Agency Hero"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative">
                <div className="max-w-3xl text-white">
                    <h2 className="text-primary text-sm md:text-base font-bold mb-4 tracking-wider">
                        {t('topper')}
                    </h2>
                    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-base md:text-xl mb-8 text-gray-200 max-w-2xl">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="text-base relative overflow-hidden group bg-primary hover:bg-primary-rgba/90"
                        >
                            <Link href="#contact">
                                <span className="relative z-10 flex items-center">
                                    {t('contactUs')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent text-base relative overflow-hidden group border-white text-white hover:text-white hover:border-primary hover:bg-primary-rgba/20"
                        >
                            <Link href="#services">{t('learnMore')}</Link>
                        </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 max-w-4xl">
                        <div className="flex items-center space-x-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                            <Palette className="h-8 w-8 text-primary" />
                            <div>
                                <div className="font-semibold">{t('features.design.title')}</div>
                                <div className="text-sm text-gray-300">
                                    {t('features.design.description')}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                            <Code className="h-8 w-8 text-primary" />
                            <div>
                                <div className="font-semibold">
                                    {t('features.development.title')}
                                </div>
                                <div className="text-sm text-gray-300">
                                    {t('features.development.description')}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                            <LineChart className="h-8 w-8 text-primary" />
                            <div>
                                <div className="font-semibold">{t('features.marketing.title')}</div>
                                <div className="text-sm text-gray-300">
                                    {t('features.marketing.description')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
