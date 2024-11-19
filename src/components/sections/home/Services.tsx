'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Palette, Code2, Smartphone, Gauge, CheckCircle2 } from 'lucide-react';
// import PatternBackground from '@/components/ui/pattern-background';
// Services data focused on web design and development
const services = [
    {
        id: 'modern-design',
        Icon: Palette,
        imageUrl:
            'https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 'responsive',
        Icon: Smartphone,
        imageUrl:
            'https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 'performance',
        Icon: Gauge,
        imageUrl:
            'https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 'development',
        Icon: Code2,
        imageUrl:
            'https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

export default function Services() {
    const t = useTranslations('pages.home.services');

    return (
        <section id="services" className="relative bg-background py-24">
            {/* <PatternBackground className="absolute inset-0 " /> */}

            <div className="container relative z-10">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-medium uppercase tracking-wider text-primary"
                    >
                        {t('ourServices')}
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
                        className="text-lg text-muted-foreground"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl border border-border/50 bg-background"
                        >
                            {/* Service Card Content */}
                            <div className="flex flex-col items-center gap-6 p-8 md:flex-row">
                                {/* Icon */}
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <service.Icon className="h-8 w-8 text-primary" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="mb-3 text-2xl font-bold">
                                        {t(`services.${service.id}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t(`services.${service.id}.description`)}
                                    </p>

                                    {/* Features List */}
                                    <ul className="mt-4 space-y-2">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                <span className="text-sm">
                                                    {t(`services.${service.id}.features.${item}`)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <button
                        onClick={() =>
                            document
                                .getElementById('contact')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="rounded-full bg-primary px-8 py-3 text-primary-foreground transition-colors duration-300 hover:bg-primary/80"
                    >
                        {t('contactUs')}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
