'use client';

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

    return (
        <section id="portfolio" className="relative bg-black">
            <div
                className="relative h-screen"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2
                    className="fixed left-1/2 top-1/2 z-10 flex h-1/3 w-2/3 items-center justify-center bg-red-400 bg-opacity-50 text-4xl font-bold tracking-[1rem] md:h-1/2 md:text-[14rem]"
                    style={{
                        textShadow: `
                            2px 2px 0 #ffffff,
                            4px 4px 0 #f0f0f0,
                            6px 6px 0 #e0e0e0,
                            10px 10px 20px rgba(0, 0, 0, 0.8)
                        `,
                        transform:
                            ' perspective(10rem) translateX(-60%) translateY(-50%) rotateX(4deg) rotateY(-4deg) skew(1deg)',
                    }}
                >
                    DİJİTAL
                </h2>
                <div className="fixed left-0 top-0 h-full w-full">
                    <Image
                        src="/images/portfolio/lawyer.png"
                        alt="Portfolio"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
            </div>
            <div
                className="relative h-screen"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2
                    className="fixed right-1/2 top-1/2 z-10 flex h-1/3 w-3/4 items-center justify-center bg-orange-400 bg-opacity-50 text-4xl font-bold tracking-[1rem] md:h-1/2 md:text-[14rem]"
                    style={{
                        textShadow: `
                            2px 2px 0 #ffffff,
                            4px 4px 0 #f0f0f0,
                            6px 6px 0 #e0e0e0,
                            10px 10px 20px rgba(0, 0, 0, 0.8)
                        `,
                        // transform: 'perspective(300px) rotateX(10deg) rotateY(-10deg) skew(1deg)',
                        transform:
                            ' perspective(10rem) translateX(60%) translateY(-50%) rotateY(4deg) rotateX(4deg) ',
                    }}
                >
                    DÜNYA&apos;DA
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
                className="relative h-screen"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2
                    className="fixed left-1/2 top-1/2 z-10 flex h-1/3 w-2/3 items-center justify-center bg-green-400 bg-opacity-50 text-4xl font-bold tracking-[1rem] md:h-1/2 md:text-[14rem]"
                    style={{
                        textShadow: `
                            2px 2px 0 #ffffff,
                            4px 4px 0 #f0f0f0,
                            6px 6px 0 #e0e0e0,
                            10px 10px 20px rgba(0, 0, 0, 0.8)
                        `,
                        transform:
                            ' perspective(10rem) translateX(-60%) translateY(-50%) rotateX(4deg) rotateY(-4deg) skew(1deg)',
                    }}
                >
                    FARK
                </h2>
                <div className="fixed left-0 top-0 h-full w-full">
                    <Image
                        src="/images/portfolio/lawyer.png"
                        alt="Portfolio"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
            </div>
            <div
                className="relative h-screen"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
            >
                <h2
                    className="fixed left-1/2 top-1/2 z-10 flex h-1/3 w-2/3 items-center justify-center bg-blue-400 bg-opacity-50 text-4xl font-bold tracking-[1rem] md:h-1/2 md:text-[14rem]"
                    style={{
                        textShadow: `
                            2px 2px 0 #ffffff,
                            4px 4px 0 #f0f0f0,
                            6px 6px 0 #e0e0e0,
                            10px 10px 20px rgba(0, 0, 0, 0.8)
                        `,
                        // transform: 'perspective(300px) rotateX(10deg) rotateY(-10deg) skew(1deg)',
                        transform:
                            ' perspective(10rem) translateX(-50%) translateY(-50%) rotateY(4deg) rotateX(4deg) ',
                    }}
                >
                    YARAT
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
        </section>
    );
}
