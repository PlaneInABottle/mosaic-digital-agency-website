'use client';

import { useTranslations } from 'next-intl';
// import { motion } from 'framer-motion';
import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';

// const projects = [
//     {
//         id: 'project1',
//         title: 'E-Commerce Website',
//         category: 'Web Development',
//         imageUrl: '/images/portfolio/lawyer.png',
//         link: '#',
//     },
//     {
//         id: 'project2',
//         title: 'Law Firm Website',
//         category: 'Web Development',
//         imageUrl: '/images/portfolio/lawyer.png',
//         link: 'https://thiscouldbeyourwebsite.netlify.app/tr',
//     },
//     {
//         id: 'project3',
//         title: 'Fitness Center Website',
//         category: 'Web Development',
//         imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
//         link: '#',
//     },
//     {
//         id: 'project4',
//         title: 'Portfolio Website',
//         category: 'Web Design',
//         imageUrl: '/images/portfolio/lawyer.png',
//         link: '#',
//     },
// ];

export default function Portfolio() {
    const t = useTranslations('pages.home.portfolio');

    return (
        <section id="portfolio" className="relative px-[10vw]">
            <div
                className="container relative h-[50vh]"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2 className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                    LET&apos;S GO AMI
                </h2>
                <div className="fixed left-0 top-0 h-full w-full">
                    <Image
                        src="/images/portfolio/lawyer.png"
                        alt="Portfolio"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div
                className="container relative h-[50vh]"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2 className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                    {t('title')}
                </h2>
                <div className="fixed left-0 top-0 h-full w-full">
                    <Image
                        src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg"
                        alt="Portfolio"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div
                className="container relative h-[50vh]"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2 className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                    {t('title')}
                </h2>
                <div className="fixed left-0 top-0 h-full w-full">
                    <Image
                        src="/images/portfolio/lawyer.png"
                        alt="Portfolio"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
