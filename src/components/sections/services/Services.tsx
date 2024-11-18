'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Users, Flame } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { services } from '@/data/services';

export default function Services() {
    const t = useTranslations('pages.services');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const getServiceIcon = (serviceId: string) => {
        switch (serviceId) {
            case 'personal-training':
                return Users;
            case 'group-fitness':
                return Flame;
            case 'strength-training':
                return Dumbbell;
            default:
                return Dumbbell;
        }
    };

    return (
        <section className="py-16 md:py-24">
            {/* Services Grid */}
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => {
                        const ServiceIcon = getServiceIcon(service.id);
                        return (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={service.imageUrl}
                                        alt={t(`areas.${service.id}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <ServiceIcon className="h-8 w-8 text-primary mb-3" />
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {t(`areas.${service.id}.title`)}
                                        </h3>
                                        <p className="text-white/80">
                                            {t(`areas.${service.id}.description`)}
                                        </p>
                                    </div>
                                </div>

                                {/* Features Section */}
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {service.services.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-4 text-foreground/80"
                                            >
                                                <Dumbbell className="h-5 w-5 text-primary" />
                                                <span>
                                                    {t(`areas.${service.id}.services.${feature}`)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full mt-6 bg-primary hover:bg-primary/90"
                                    >
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="flex items-center justify-center gap-2"
                                        >
                                            {t('learnMore')}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/contact" className="flex items-center gap-2">
                            {t('contactUs')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
