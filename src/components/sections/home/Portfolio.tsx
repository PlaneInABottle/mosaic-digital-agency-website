'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    // {
    //     id: 'project1',
    //     title: 'E-Commerce Website',
    //     category: 'Web Development',
    //     imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Projects/ecommerce.jpg',
    //     link: '#',
    // },
    {
        id: 'project2',
        title: 'Law Firm Website',
        category: 'Web Development',
        imageUrl: '/images/portfolio/lawyer.png',
        link: 'https://thiscouldbeyourwebsite.netlify.app/tr',
    },
    {
        id: 'project3',
        title: 'Fitness Center Website',
        category: 'Web Development',
        imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
        link: '#',
    },
    // {
    //     id: 'project4',
    //     title: 'Portfolio Website',
    //     category: 'Web Design',
    //     imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Projects/portfolio.jpg',
    //     link: '#',
    // },
];

export default function Portfolio() {
    const t = useTranslations('pages.home.portfolio');

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="container relative">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-medium uppercase tracking-wider"
                    >
                        {t('topper')}
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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl bg-background"
                        >
                            {/* Project Image */}
                            <div className="relative h-[300px] overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Project Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-primary font-medium mb-2">
                                            {project.category}
                                        </p>
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-300">
                                            {t(`projects.${project.id}.description`)}
                                        </p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="p-2 rounded-full bg-primary/20 text-primary 
                                                 hover:bg-primary hover:text-white transition-colors duration-300"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300">
                        {t('viewAll')}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
