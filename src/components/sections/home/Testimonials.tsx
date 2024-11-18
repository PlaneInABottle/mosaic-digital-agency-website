'use client';

// import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Britney Allison',
        role: 'Founder Of Yokoloko',
        content:
            'Great gym! A new gym with modern equipment and facilities makes training so much easier. always willing to help you with your training',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-review-1.png',
        rating: 5,
        progress: {
            before: 110,
            after: 82,
        },
    },
    {
        id: 2,
        name: 'Leslie Alexander',
        role: 'Founder Of Yokoloko',
        content:
            'Great gym! A new gym with modern equipment and facilities makes training so much easier. always willing to help you with your training',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-review-2.png',
        rating: 5,
        progress: {
            before: 110,
            after: 82,
        },
    },
];

export default function ClientTestimonials() {
    // const t = useTranslations('pages.home.testimonials');

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <span className="text-primary uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Our Client&apos;s Testimonials
                    </h2>
                </div>

                <div className="grid xl:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-card rounded-xl p-4 sm:p-6"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="relative w-full sm:w-72 h-64 sm:h-80">
                                    <Image
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <h3 className="text-xl font-semibold">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-primary">{testimonial.role}</p>
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground mb-6">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-background rounded-lg p-3 sm:p-4">
                                            <div className="text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">
                                                ↑ {testimonial.progress.before}KG
                                            </div>
                                            <div className="text-sm text-muted-foreground whitespace-nowrap">
                                                Before Progress
                                            </div>
                                        </div>
                                        <div className="bg-black rounded-lg p-3 sm:p-4 text-white">
                                            <div className="text-xl sm:text-2xl font-bold whitespace-nowrap">
                                                ↓ {testimonial.progress.after}KG
                                            </div>
                                            <div className="text-sm text-white/80 whitespace-nowrap">
                                                After Progress
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
