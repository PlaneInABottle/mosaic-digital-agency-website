'use client';

// import { useTranslations } from 'nex-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const trainers = [
    {
        id: 1,
        name: 'MICHAEL SEMPLE',
        role: 'Fitness Instructor',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png',
        specialties: ['Strength Training', 'HIIT', 'Nutrition'],
    },
    {
        id: 2,
        name: 'JOSE HAWTHORNE',
        role: 'Nutritionist',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png',
        specialties: ['Meal Planning', 'Weight Management', 'Sports Nutrition'],
    },
    {
        id: 3,
        name: 'TIMOTHY ANDREWS',
        role: 'Fitness Instructor',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png',
        specialties: ['CrossFit', 'Bodybuilding', 'Functional Training'],
    },
];

export default function TeamSection() {
    // const t = useTranslations('pages.team');

    return (
        <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full" />
                <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-primary/10 rounded-tr-full" />
            </div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <motion.span
                        className="text-primary font-medium uppercase tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        MEET OUR EXPERT TRAINERS
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mt-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Transform With The Best
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our certified trainers are here to help you reach your fitness goals with
                        personalized programs and expert guidance.
                    </motion.p>
                </div>

                {/* Trainers Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                <Image
                                    src={trainer.imageUrl}
                                    alt={trainer.name}
                                    fill
                                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content - Always visible on mobile, hover on desktop */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end md:transform md:translate-y-8 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                                    <p className="text-primary font-medium">{trainer.role}</p>
                                    <div className="mt-4">
                                        <p className="text-sm text-white/80 mb-2">Specialties:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {trainer.specialties.map((specialty, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-primary/20 text-white px-3 py-1 rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link
                            href="/team"
                            className="transition-colors hover:bg-primary-rgba/80 flex items-center gap-2"
                        >
                            View All Trainers
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
