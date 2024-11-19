'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Palette, Code2, Smartphone, Gauge, CheckCircle2 } from 'lucide-react';
import PatternBackground from '@/components/ui/pattern-background';
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
        <section id="services" className="py-24 relative  bg-background">
            <PatternBackground className="absolute inset-0 " />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-medium uppercase tracking-wider"
                    >
                        {t('ourServices')}
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
                        className="text-muted-foreground text-lg"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-background rounded-xl overflow-hidden border border-border/50"
                        >
                            {/* Service Card Content */}
                            <div className="flex flex-col md:flex-row items-center gap-6 p-8">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <service.Icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-3">
                                        {t(`services.${service.id}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t(`services.${service.id}.description`)}
                                    </p>

                                    {/* Features List */}
                                    <ul className="mt-4 space-y-2">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
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
                    className="text-center mt-12"
                >
                    <button
                        onClick={() =>
                            document
                                .getElementById('contact')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="bg-primary text-primary-foreground px-8 py-3 rounded-full 
                                 hover:bg-primary/80 transition-colors duration-300"
                    >
                        {t('contactUs')}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
