'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'stretching',
        title: 'Stretching',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png',
    },
    {
        id: 'hypertrophy',
        title: 'Hypertrophy',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png',
    },
    {
        id: 'strength',
        title: 'Strength',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png',
    },
    {
        id: 'yoga',
        title: 'Yoga',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png',
    },
    {
        id: 'cardio',
        title: 'Cardio',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png',
    },
];

export default function Services() {
    const t = useTranslations('pages.home.services');

    return (
        <section className="py-16 md:py-24">
            <div className="container mb-12 px-16">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="basis-1/4 gap-2">
                        <span className="text-primary font-medium uppercase">
                            {t('ourServices')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('title')}</h2>
                    </div>
                    <div className="basis-1/4 hidden md:block"></div>
                    <div className="basis-1/2 flex items-end gap-2">
                        <p className="text-muted-foreground mt-4">{t('description')}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-[32vw] overflow-hidden"
                    >
                        <div
                            className="absolute top-8 right-8 z-20 text-white/80 font-bold
                                transition-all duration-300 
                                opacity-0 translate-y-4
                                group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <span className="text-7xl font-extrabold tracking-tighter">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                        </div>
                        <div className="relative h-full w-full">
                            <Image
                                src={service.imageUrl}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform origin-center duration-500 group-hover:scale-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-primary-rgba/40 z-10" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h1 className="text-3xl font-bold">{service.title}</h1>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
