'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { Service } from '@/types/service';

type ServiceDetailsProps = {
    service: Service;
};

export default function ServiceDetails({ service }: ServiceDetailsProps) {
    const t = useTranslations(`pages.services.areas.${service.id}`);
    const commonT = useTranslations('common.buttons');

    return (
        <>
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-background shadow-xl rounded-lg">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-foreground text-4xl font-bold mb-4">
                                {t('title')}
                            </h1>
                            <p className="text-muted-foreground mb-6">{t('longDescription')}</p>
                            <Button asChild>
                                <a href="#contact" className="flex items-center gap-2">
                                    {commonT('startNow')}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src={service.imageUrl}
                                alt={t('title')}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.services.map((feature, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {t(`services.${feature}`)}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {t(`serviceDescriptions.${feature}`)}
                                    </p>
                                    <ul className="space-y-2">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-primary" />
                                                <span className="text-sm">
                                                    {t(`serviceFeatures.${feature}.${item}`)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-background shadow-xl rounded-lg">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {t('ctaDescription')}
                    </p>
                    <Button size="lg" asChild>
                        <a href="#contact" className="flex items-center gap-2">
                            {commonT('startFreeTrial')}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </section>
        </>
    );
}
